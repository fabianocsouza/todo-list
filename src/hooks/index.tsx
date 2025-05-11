import { useContext } from "react";
import { TaskContext } from "../Context";

export function useTask() {
  const context = useContext(TaskContext);
  return context;
}
