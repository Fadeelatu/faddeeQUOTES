const express = require('express')
const port = 4000

const app = express()
app.use(express.json());

app.get("/", (req, res)=>{
    res.send('Hello world, lets code')
})

app.get("/fadee", (req, res)=>{
    res.send("Hello from fadee")
})

app.post('/post', (req,res)=>{
    res.send(req.body)
})


app.listen(port, ()=>{
    console.log(`App is running on port ${port}`)
})