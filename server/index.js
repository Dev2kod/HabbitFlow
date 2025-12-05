const express = require("express")
const cors = require("cors")
// todos.js

const todos = [
  {
    id: 1,
    title: "Finish React project",
    body: "Complete all components and polish UI",
    completed: false,
  },
  {
    id: 2,
    title: "Study validation logic",
    body: "Review simple syntax for form validation",
    completed: false,
  },
  {
    id: 3,
    title: "Workout",
    body: "30 minutes of cardio",
    completed: true,
  },
  {
    id: 4,
    title: "Read a book",
    body: "Continue reading 20 pages of a novel",
    completed: false,
  },
];



const app = express()
app.use(express.json())
app.use(cors())

app.get("/user/api/getTodos",(req,res)=>{
    res.json(todos)
})

app.listen(3000,()=>console.log("app running on port 3000"))