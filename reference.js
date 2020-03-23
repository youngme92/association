const mongoose = require("mongoose")
const Post = require("./models/post")
const User = require("./models/user")
mongoose.connect('mongodb://localhost/blog_demo2', {useNewUrlParser: true, useUnifiedTopology: true});



// // POST SCHEMA - title, content 

// var postSchema = mongoose.Schema({
//     title: String,
//     content: String
// })
// var Post = mongoose.model('Post', postSchema)

// USER SCHEMA - email, name 

// var userSchema = mongoose.Schema({
//     email: String,
//     name: String,
//     posts: [
//         {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "Post"
//         }
//     ]
// })
// var User = mongoose.model('User', userSchema)

// User CREATE

// User.create({
//     email: "bob@naver.sdkd",
//     name: "newName"
// }, function(err, user){
//     console.log(user)
// })

// Post CREATE and find USER

// Post.create({
//     title: "newTitle3",
//     content: "newContent3"
// }, function(err, post){
//     User.findOne({name: "newName"}, function(err, foundUser){
//         if(err){
//             console.log(err)
//         } else {
//             foundUser.posts.push(post)
//             foundUser.save(function(err, data){
//                 if(err){
//                     console.log(err)
//                 } else {
//                     console.log(data)
//                 }
//             })
//         }
//     })
// })

/// find USER (NOT idArry)

User.findOne({name:"newName"}).populate("posts").exec(function(err, user){
    if(err){
        console.log(err)
    } else {
        console.log(user)
    }
})


