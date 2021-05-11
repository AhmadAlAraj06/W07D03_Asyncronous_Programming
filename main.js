const express = require("express")
app = express()
port = 5000
app.use(express.json());
app.get("/",(req,res)=>{
    res.status(200)
    res.json(`Server is working.....`)
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
  