// src/context/Providers.jsx
import React, { useState,useEffect } from "react";
import { FormContext, TaskTodoContext, ThemeContext } from "./Context";

export const AppProviders = ({ children }) => {
  // Task + Todo state
  const [task, settask] = useState();
  const [todo, settodo] = useState(() => {
    // Load from localStorage on first render
    const saved = localStorage.getItem("todo");
    return saved ? JSON.parse(saved) : [];});

     useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);
  
  //Signin State
  const [signin, setsignin] = useState(false)

  // Theme state
  const [theme, setTheme] = useState("light");

  //Form state
  const [name, setname] = useState("")
  const [number,setnumber] = useState("")
  const [pass,setpass] = useState("")

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <TaskTodoContext.Provider value={{ task, settask, todo, settodo }}>
        <FormContext.Provider value={{name, setname,number,setnumber,pass,setpass}}>
        {children}
        </FormContext.Provider>
      </TaskTodoContext.Provider>
    </ThemeContext.Provider>
  );
};
