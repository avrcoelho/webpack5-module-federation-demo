import React, {
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

interface AppContextData {
  counter: number;
  setCounter: Dispatch<SetStateAction<number>>;
}

const AppContext = createContext<AppContextData>({} as AppContextData);

export const AppProvider: React.FC = ({ children }) => {
  const [counter, setCounter] = useState(0);

  return (
    <AppContext.Provider value={{ counter, setCounter }}>
      {children}
    </AppContext.Provider>
  );
};

export function useApp(): AppContextData {
  const context = useContext(AppContext);

  return context;
}
