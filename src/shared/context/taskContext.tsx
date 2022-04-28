import React, { useState } from 'react';

interface IProps {
  addCompleted: boolean;
  setAddCompleted?: (addCompleted: boolean) => void;
  addDelete: boolean;
  setAddDelete?: (addDelete: boolean) => void;
  addTask: boolean;
  setAddTask?: (addTask: boolean) => void;
}

export const taskContext = React.createContext<IProps>({
  addCompleted: false,
  addDelete: false,
  addTask: false,
});

export function TaskContextProvider({ children }: { children: React.ReactNode }) {
  const { Provider } = taskContext;
  const [addCompleted, setAddCompleted] = useState(false);
  const [addDelete, setAddDelete] = useState(false);
  const [addTask, setAddTask] = useState(false);

  return (
    <Provider value={{
      addCompleted,
      setAddCompleted,
      addDelete,
      setAddDelete,
      addTask,
      setAddTask,
    }}
    >
      {children}
    </Provider>
  );
}
