const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost/blog_demo', {useNewUrlParser: true, useUnifiedTopology: true});

// POST SCHEMA - title, content 

var postSchema = mongoose.Schema({
    title: String,
    content: String
})
var Post = mongoose.model('Post', postSchema)

// USER SCHEMA - email, name 

var userSchema = mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
})
var User = mongoose.model('User', userSchema)

// New User register

// var newUser = new User({
//     email: "newuser@wwqw.dd",
//     name: "newPost"
// })

// // New user contain posts

// newUser.posts.push({
//     title: "new title!!",
//     content: "new content!!"
// })

// newUser.save(function(err, post){
//     if(err){
//         console.log(err)
//     } else {
//         console.log(post)
//     }
// })

// -----------

// New Post register

// var newPost = new Post({
//     title: "hello first time!",
//     content: "bye im done"
// })

// newPost.save(function(err, post){
//     if(err){
//         console.log(err)
//     } else {
//         console.log(post)
//     }
// })

// ----------

// findOne and addtion Method 

// User.findOne({name: "james"}, function(err, user){
//     if(err){
//         console.log(err)
//     } else {
//         user.posts.push({
//             title: "happy",
//             content: "and sad"
//         })
//         user.save(function(err, user){
//             if(err){
//                 console.log(err)
//             } else {
//                 console.log(user)
//             }
//         })
//     }
// })