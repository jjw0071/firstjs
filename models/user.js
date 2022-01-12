const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {
        type : String,
        maxlength: 50
    },
    email : {
        type : String,
        trim : true,
        // Jewon Jung@naver.com 이렇게 치면 빈칸 없애줌
        unique: 1
    },
    password: {
        type : String,
        minlength : 5
    },
    lastname: {
        type : String,
        maxlenght:50
    },
    role:{
        type : Number,
        default: 0
    },
    image: String,
    token: {
        type : String
    },
    tokenExp: {
        type : Number
    }

})

const User = mongoose.model('User', userSchema)

module.exports = {User} // 이러면 외부에서도 사용가능