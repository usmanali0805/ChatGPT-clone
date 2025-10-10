import React, { createContext, useContext, useState, useEffect, type ReactNode } from "react";

interface HistoryContextType{
history:string[];
mblbtn:boolean;
addToHistory:(q:string)=>void;
clearHistory:()=>void;
setHistory:React.Dispatch<React.SetStateAction<string[]>>
setMblbtn:React.Dispatch<React.SetStateAction<boolean>>
}

interface HistoryProviderProps{
  children:ReactNode;
}
const HistoryContext = createContext<HistoryContextType|undefined>(undefined);


export const HistoryProvider: React.FC<HistoryProviderProps> = ({ children }) => {
  const [history, setHistory] = useState<string[]>([]);
  const [mblbtn, setMblbtn] = useState<boolean>(false);
  // Load from localStorage once on mount
  useEffect(() => {
    const stored = localStorage.getItem("History");
    if (stored) setHistory(JSON.parse(stored));
  }, []);

  // Add a new question to history
  const addToHistory = (q:string):void => {
    const updated:string[] = [q, ...history];
    setHistory(updated);
    localStorage.setItem("History", JSON.stringify(updated));
  };

  const clearHistory = (): void => {
    if(!localStorage.getItem("History")) setHistory([])
  }
  

  return (
    <HistoryContext.Provider value={{ history, addToHistory , clearHistory , setHistory , mblbtn , setMblbtn}}>
      {children}
    </HistoryContext.Provider>
  );
};

export const useHistory = ():HistoryContextType => {
  const ctx = useContext(HistoryContext);
  if (!ctx) throw new Error("useHistory must be used within HistoryProvider");
  return ctx;
};
