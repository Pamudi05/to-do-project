export type TaskStatus = "initiated" | "pending" | "completed";

interface Task {
  id: number;
  title?: string;
  description?: string;
  status: TaskStatus;
}

export default Task;