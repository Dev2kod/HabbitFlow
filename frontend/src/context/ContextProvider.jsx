// src/context/Providers.jsx
import React, { useState } from "react";
import { TaskTodoContext, ThemeContext } from "./Context";

export const AppProviders = ({ children }) => {
  // Task + Todo state
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
    
  // Theme state
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <TaskTodoContext.Provider value={{ task, setTask, todos, setTodos }}>
        {children}
      </TaskTodoContext.Provider>
    </ThemeContext.Provider>
  );
};
