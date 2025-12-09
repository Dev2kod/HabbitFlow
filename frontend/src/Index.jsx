import React, { useEffect, useState } from "react";
import axios from "axios";

const Index = () => {
  const [todos, setTodos] = useState([]); // keep as array

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/user/api/gettodos");
        setTodos(res.data); // assume API returns an array
      } catch (err) {
        console.error("Error fetching todos:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ color: "white" }}>
      {todos.length === 0 ? (
        <p>No todos yet</p>
      ) : (
        todos.map((item, index) => (
          <div key={index}>
            {/* If item is an object, render its fields */}
            {typeof item === "object" ? (
              <>
                <strong>{item.title}</strong> 
                <div>{item.body}</div>
                <hr />
              </>
            ) : (
              item
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Index;
