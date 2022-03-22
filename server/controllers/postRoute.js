const express = require("express");
const router = express.Router();

const Post = require("../models/post");

router.get("/", (req, res) => {
  const allData = Post.all;
  res.status(200).send(allData);
});

function isItAValidPost(data) {
  return (
    data.title &&
    data.title.toString().trim() !== "" &&
    data.description &&
    data.description.toString().trim() !== ""
  );
}

router.post("/", (req, res) => {
  const newPost = Post.createPost(req.body);
  res.send({
    message: `${newPost.id} successfully added to our collection.`,
  });
});

// router.put('/comment/:comment', (req, res) => {
//     let commentArr = req.params.comment;
//     console.log(commentArr);
//     try {
//         Post.newComment(req, commentArr);
//         res.status(201).send('Post was successfully updated.');
//     } catch(e) {
//         res.status(404).send("ERROR: TRY AGAIN LATER")
//     }
// })

module.exports = router;
