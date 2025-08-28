import React, { createContext, useContext, useState, useEffect } from "react";

const HistoryContext = createContext();

export const HistoryProvider = ({ children }) => {
  const [history, setHistory] = useState([]);

  // Load from localStorage once on mount
  useEffect(() => {
    const stored = localStorage.getItem("History");
    if (stored) setHistory(JSON.parse(stored));
  }, []);

  // Add a new question to history
  const addToHistory = (q) => {
    const updated = [q, ...history];
    setHistory(updated);
    localStorage.setItem("History", JSON.stringify(updated));
  };

  const clearHistory = () => {
    if(!localStorage.getItem("History")) setHistory([])
  }
  

  return (
    <HistoryContext.Provider value={{ history, addToHistory , clearHistory }}>
      {children}
    </HistoryContext.Provider>
  );
};

export const useHistory = () => {
  const ctx = useContext(HistoryContext);
  if (!ctx) throw new Error("useHistory must be used within HistoryProvider");
  return ctx;
};
