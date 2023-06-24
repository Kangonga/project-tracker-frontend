//declare types for the status of a task
export type Status = 'backlog' | 'progress' | 'done';

//declare the type for an individual task
export type Task = {
  id: string;
  title: string;
  description: string;
  status: Status;
};

//declare the type for the kanban columns
export type BoardSections = {
  [name: string]: Task[];
};
