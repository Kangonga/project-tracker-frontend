//function that accepts two arguments:
//a tasks array and a status string

import { Task } from '@app/types/kanbanTypes';

//This status string relates to a column name
export const getTasksByStatus = (tasks: Task[], status: string) => {
  return tasks.filter(task => task.status === status);
};

//Get tasks by id
export const getTaskById = (tasks: Task[], id: string) => {
  return tasks.find(task => task.id === id);
};
