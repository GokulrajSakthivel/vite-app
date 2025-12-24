import { create } from "zustand";

export interface TaskItem {
  id: number;
  task: string;
  tools: string;
  hazards: string;
  controls: string;
  initials: string;
}

interface TaskState {
  tasks: TaskItem[];
  addTask: (task: TaskItem) => void;
  deleteTask: (id: number) => void;
  removeHazard: (taskId: number, hazardIndex: number) => void;
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [],

  addTask: (task) =>
    set((state) => ({
      tasks: [...state.tasks, task],
    })),

  deleteTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((t) => t.id !== id),
    })),

  removeHazard: (taskId, hazardIndex) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              hazards: task.hazards
                .split(",")
                .filter((_, i) => i !== hazardIndex)
                .join(","),
            }
          : task
      ),
    })),
}));
