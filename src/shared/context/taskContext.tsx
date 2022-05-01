import React, { useState } from 'react';

interface IProps {
  addCompleted: boolean;
  setAddCompleted?: (addCompleted: boolean) => void;
  addDelete: boolean;
  setAddDelete?: (addDelete: boolean) => void;
  addTask: boolean;
  setAddTask?: (addTask: boolean) => void;
  oneCls: boolean;
  setOneCls?: (oneCls: boolean) => void;
  twoCls: boolean;
  setTwoCls?: (twoCls: boolean) => void;
  threeCls: boolean;
  setThreeCls?: (threeCls: boolean) => void;
  fourCls: boolean;
  setFourCls?: (fourCls: boolean) => void;
}

export const taskContext = React.createContext<IProps>({
  addCompleted: false,
  addDelete: false,
  addTask: false,
  oneCls: false,
  twoCls: false,
  threeCls: false,
  fourCls: false,
});

export function TaskContextProvider({ children }: { children: React.ReactNode }) {
  const { Provider } = taskContext;
  const [addCompleted, setAddCompleted] = useState(false);
  const [addDelete, setAddDelete] = useState(false);
  const [addTask, setAddTask] = useState(false);
  const [oneCls, setOneCls] = useState(false);
  const [twoCls, setTwoCls] = useState(false);
  const [threeCls, setThreeCls] = useState(false);
  const [fourCls, setFourCls] = useState(false);

  return (
    <Provider value={{
      addCompleted,
      setAddCompleted,
      addDelete,
      setAddDelete,
      addTask,
      setAddTask,
      oneCls,
      setOneCls,
      twoCls,
      setTwoCls,
      threeCls,
      setThreeCls,
      fourCls,
      setFourCls,
    }}
    >
      {children}
    </Provider>
  );
}
