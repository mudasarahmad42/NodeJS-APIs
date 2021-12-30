const express = require('express');
const verifyToken = require('./verifyToken');
const router = express.Router();
const verify = require('./verifyToken');


router.get('/posts' , verifyToken , (req,res) => {
    res.json({
        posts: {
            title: "my first posts",
            description: "my first posts"
        }
    })
})


module.exports = router;