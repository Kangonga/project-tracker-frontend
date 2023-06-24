import { findColumn, initializeBoard } from '@app/features/kanbanBoards/utils/boardUtils';
import { initialTasks } from '@app/features/kanbanBoards/data/initialTasks';
import { BoardSections, Status } from '@app/types/kanbanTypes';
import {
  DndContext,
  DragOverEvent,
  DragOverlay,
  DropAnimation,
  KeyboardSensor,
  PointerSensor,
  closestCorners,
  defaultDropAnimation,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { useState } from 'react';
import { sortableKeyboardCoordinates, arrayMove } from '@dnd-kit/sortable';
import { DragStartEvent, DragEndEvent } from '@dnd-kit/core';
import { getTaskById } from '@app/features/kanbanBoards/utils/taskUtils';
import { Grid } from '@mui/material';
import KanbanColumn from '@app/features/kanbanBoards/components/column/kanbanColumn';
import TaskItem from '@app/features/kanbanBoards/components/task/Task';

export default function Kanban() {
  const tasks = initialTasks;

  const board = initializeBoard(tasks);

  const [columns, setColumns] = useState<BoardSections>(board);

  const [activeTaskId, setActiveTaskId] = useState<null | string>(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  const handleDragStart = ({ active }: DragStartEvent) => {
    setActiveTaskId(active.id as string);
  };
  const handleDragOver = ({ active, over }: DragOverEvent) => {
    const activeColumn = findColumn(columns, active.id as string);
    const overColumn = findColumn(columns, over?.id as string);

    if (!activeColumn || !overColumn || activeColumn === overColumn) {
      return;
    }
    setColumns(container => {
      const activeLane = columns[activeColumn];
      const overLane = columns[overColumn];

      const activeIndex = activeLane.findIndex(task => task.id === active.id);

      const overIndex = overLane.findIndex(task => task.id !== over?.id);
      return {
        ...container,
        [activeColumn]: [...container[activeColumn].filter(task => task.id !== active.id)],
        [overColumn]: [
          ...container[overColumn].slice(0, overIndex),
          container[activeColumn][activeIndex],
          ...container[overColumn].slice(overIndex, container[overColumn].length),
        ],
      };
    });
  };

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    const activeColumn = findColumn(columns, active.id as string);
    const overColumn = findColumn(columns, over?.id as string);

    if (!activeColumn || !overColumn || activeColumn !== overColumn) {
      return;
    }
    const activeTaskIndex = columns[activeColumn].findIndex(task => task.id === active.id);
    const overTaskIndex = columns[overColumn].findIndex(task => task.id === over?.id);

    if (activeTaskIndex !== overTaskIndex) {
      setColumns(columns => ({
        ...columns,
        [overColumn]: arrayMove(columns[overColumn], activeTaskIndex, overTaskIndex),
      }));
    }
    console.log('columns', columns);
    if (activeTaskId) {
      let task = columns[activeColumn].find(task => task.id === activeTaskId);
      console.log('active task', task);
      task ? (task.status = overColumn as Status) : null;
      console.log('updated task', task);
    }
    setActiveTaskId(null);
  };

  const dropAnimation: DropAnimation = {
    ...defaultDropAnimation,
  };

  const task = activeTaskId ? getTaskById(tasks, activeTaskId) : null;

  return (
    <>
      <div style={{ backgroundColor: 'lightcoral' }}>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCorners}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDragEnd={handleDragEnd}
        >
          <Grid container spacing={4}>
            {Object.keys(columns).map(columnName => {
              return (
                <Grid item xs={4} key={columnName}>
                  <KanbanColumn key={columnName} id={columnName} title={columnName} tasks={columns[columnName]} />
                </Grid>
              );
            })}
            <DragOverlay dropAnimation={dropAnimation}>{task ? <TaskItem task={task} /> : null}</DragOverlay>
          </Grid>
        </DndContext>
      </div>
    </>
  );
}
