const express = require('express');
const router = express.Router();

const Post = require('../models/post');

router.get('/', (req, res) => {
    const allData = Post.all;
    res.status(200).send(allData);
});

router.post('/', (req, res) => {
    const newPost = Post.createPost(req.body);
    res.send({message: `${newPost.id} successfully added to our collection.`});
});

module.exports = router;
