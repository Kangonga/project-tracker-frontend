import { Task } from '@app/types/kanbanTypes';
import { v4 as uuidv4 } from 'uuid';

//create the initial tasks
export const initialTasks: Task[] = [
  {
    id: uuidv4(),
    title: 'Title 2',
    description: 'Desc 2',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    title: 'Title 3',
    description: 'Desc 3',
    status: 'progress',
  },
  {
    id: uuidv4(),
    title: 'Title 4',
    description: 'Desc 4',
    status: 'done',
  },
];
