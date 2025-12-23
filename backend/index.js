const express = require("express")

app = express();

app.get("/",(req,res)=>{
    res.send("backend running")
})

app.listen(3456,()=>{console.log("server running on port 3456")})