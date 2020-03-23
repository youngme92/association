const mongoose = require("mongoose")

// USER SCHEMA - email, name 

var userSchema = mongoose.Schema({
    email: String,
    name: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
})

module.exports = mongoose.model('User', userSchema)