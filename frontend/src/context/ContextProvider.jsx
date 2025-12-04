// src/context/Providers.jsx
import React, { useState } from "react";
import { TaskTodoContext, ThemeContext } from "./Context";

export const AppProviders = ({ children }) => {
  // Task + Todo state
  const [task, settask] = useState("");
  const [todo, settodo] = useState([]);
  
  //Signin State
  const [signin, setsignin] = useState(false)

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
