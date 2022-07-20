const express=require('express')
var cors = require('cors')
require('./db/conn')
const app =express()
const port =8000
app.use(express.json())
 app.use(cors()) 


const router=require('./router/Student')
app.use(router)


// app.post('/getStudent', (req,res)=>{
//     const user=new student(req.body)
//     user.save().then(()=>{
//         res.status(201).send(user)
//     }).catch((err)=>{
//         res.status(400).send(err)
//     })
//     // res.send('hello from other side')
// })

app.listen(port,()=>{
    console.log(`app is listning at ${port}`);
})