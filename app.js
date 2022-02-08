const mongoose = require('mongoose')
const express = require('express')
const path = require('path')

const app = express()
app.use(express.json())
const publicDirPath = path.join(__dirname, '../public')
app.use(express.static(publicDirPath))

app.get('/', (req, res) => {
    res.send('<h1>10 thins to know</h1>')
})
app.get('/article', (req, res) => {
    res.send('Success')
    console.log(localStorage)
})


app.listen(3000, () => {
    // not running this callback
    console.log('Server is listen on port 3000');
})
