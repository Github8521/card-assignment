const express = require('express')
var cors = require('cors')
require('./db/conn')
const app = express()
const port = 8000
app.use(express.json())
app.use(cors())


const router = require('./router/Student')
app.use(router)

app.listen(port, () => {
    console.log(`app is listning at ${port}`);
})