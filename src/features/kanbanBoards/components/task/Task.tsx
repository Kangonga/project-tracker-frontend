import { Task } from '@app/types/kanbanTypes';
import { Card, CardContent } from '@mui/material';

type TaskItemProps = {
  task: Task;
};
export default function TaskItem({ task }: TaskItemProps) {
  return (
    <Card>
      <CardContent>{task.title}</CardContent>
    </Card>
  );
}
