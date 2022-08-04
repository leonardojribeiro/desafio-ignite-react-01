export interface ITodo {
  id: number;
  description: string;
  status: TodoStatus;
}

export type TodoStatus = "created" | "completed";

