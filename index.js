const express = require('express')
const app = express()
const port = 4000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jjw0071:j12345@project1.htgwp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser : true, useUnifiedTopology : true
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

app.get('/home', (req, res) => res.send('Hello World! wow this is working!!!!'))
app.get('/main', (req, res) => res.send('fuck'))




app.listen(port, () => console.log(`Example app listening on port ${port}!`))