import KanbanCard from '@app/features/kanbanBoards/components/card/kanbanCard';
import { ColumnContainer } from '@app/features/kanbanBoards/components/column/styles';
import TaskItem from '@app/features/kanbanBoards/components/task/Task';
import { Task } from '@app/types/kanbanTypes';
import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { Box, Typography } from '@mui/material';

export interface KanbanColumnProps {
  id: string;
  title: string;
  tasks: Task[];
}

export default function KanbanColumn({ id, title, tasks }: KanbanColumnProps) {
  const { setNodeRef } = useDroppable({
    id,
  });
  return (
    <ColumnContainer>
      <Typography variant="h6" sx={{ mb: 2 }}>
        {title}
      </Typography>
      <SortableContext id={id} items={tasks} strategy={verticalListSortingStrategy}>
        <div ref={setNodeRef}>
          {tasks?.map(task => {
            return (
              <Box key={task?.id} sx={{ mb: 2 }}>
                <KanbanCard id={task.id}>
                  <TaskItem task={task} />
                </KanbanCard>
              </Box>
            );
          })}
        </div>
      </SortableContext>
    </ColumnContainer>
  );
}
