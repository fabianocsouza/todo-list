import { createContext, useContext, FC, ReactNode, useState } from 'react';

interface ContextType {
  taskCompleted: number;
  addTaskDone: () => void;
  removeTaskDone: () => void;
}

const Context = createContext<ContextType | undefined>(undefined);

export const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [taskCompleted, setTaskCompleted] = useState<number>(0);

  const  addTaskDone = () =>{
    setTaskCompleted(prev => prev + 1)
  }
  const  removeTaskDone = () =>{
    setTaskCompleted(prev => Math.max(prev - 1, 0))
  }

  return (
    <Context.Provider value={{ taskCompleted, addTaskDone, removeTaskDone }}>
      {children}
    </Context.Provider>
  );
};

export const useTask = (): ContextType => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('useTask deve ser usado dentro de um ContextProvider');
  }
  return context;
};
