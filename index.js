const express = require('express')
const app = express()
const port = 4000

const { User } = require("./models/user");
const bodyParser = require('body-parser');

//applicaiton/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended : true}));

//application/json 
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://jjw0071:j12345@project1.htgwp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser : true, useUnifiedTopology : true
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

app.get('/home', (req, res) => res.send('Hello World! wow this is working!!!!'))
app.get('/main', (req, res) => res.send('fuck'))

app.post('/register', (req, res) => {

    //회원가입시 필요 정보들을 client에서 갖오면
    //그것들을 DB에 넣어준다.

    const uu = new User(req.body)

    uu.save((err,doc) =>{
        if(err) return res.json({success : false, err})
        return res.status(200).json({
            success: true
        })
    })
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))