// src/context/Providers.jsx
import React, { useState } from "react";
import { TaskTodoContext, ThemeContext } from "./Context";

export const AppProviders = ({ children }) => {
  // Task + Todo state
  const [task, settask] = useState("");
  const [todo, settodo] = useState([]);
    
  // Theme state
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <TaskTodoContext.Provider value={{ task, settask, todo, settodo }}>
        {children}
      </TaskTodoContext.Provider>
    </ThemeContext.Provider>
  );
};