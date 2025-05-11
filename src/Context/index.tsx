import { createContext, useState, type ReactNode } from "react";

type TaskProps = {
  title: string;
  check: boolean;
};

type TaskContextType = {
  task: TaskProps[];
  addTask: (title: string) => void;
  toggleCheck: (index: number) => void;
  updateTask: (upTask: TaskProps[]) => void;
};

type TaskProviderProps = {
  children: ReactNode;
};

export const TaskContext = createContext<TaskContextType>(
  {} as TaskContextType
);

export function TaskProvider({ children }: TaskProviderProps) {
  const [task, setTask] = useState<TaskProps[]>([]);

  function addTask(title: string) {
    setTask((prev) => [...prev, { title, check: false }]);
  }

  function toggleCheck(idTask: number) {
    setTask((prev) =>
      prev.map((task, id) =>
        id === idTask ? { ...task, check: !task.check } : task
      )
    );
  }

  function updateTask(upTask: TaskProps[]) {
    setTask(upTask);
  }

  return (
    <TaskContext.Provider value={{ task, addTask, toggleCheck, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
}
