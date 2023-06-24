// function to create the initial columns from the initial data
// A board is an object whose key is a string that will be used as the title
// The value is an array of tasks

import { getTasksByStatus } from '@app/features/kanbanBoards/utils/taskUtils';
import { BoardSections, Status, Task } from '@app/types/kanbanTypes';

export const initialColumns = {
  backlog: 'backlog',
  progress: 'progress',
  done: 'done',
};

export const initializeBoard = (tasks: Task[]) => {
  const board: BoardSections = {};

  //filter through the columns
  //for each column, call a function
  //this function filters through the tasks and assigns all
  //tasks with this particular column name as their status,
  //to this particular column

  Object.keys(initialColumns).forEach(columnName => {
    board[columnName] = getTasksByStatus(tasks, columnName as Status);
  });
  return board;
};

//function to find the id of a board with the provided task id
//it takes two arguments
//the board ie the columns and
// the id of the task provided by dnd kit
//returns a string with the name of the active column or null
export const findColumn = (board: BoardSections, id: string) => {
  if (id in board) {
    return id;
  }
  const column = Object.keys(board).find(key => board[key].find(item => item.id === id));
  return column;
};
