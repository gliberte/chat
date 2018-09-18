import express from 'express'
const app = express()
import path from 'path'

const PORT = process.env.PORT || 7000
app.use(express.static(path.join(__dirname,'../client')))

app.listen(7000,()=>{
    console.log(`SERVIDOR INICIADO EN ${PORT}`)
})