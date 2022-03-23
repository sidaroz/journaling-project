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

router.get("/comment/:id", (req, res) => {
  const idCounterIsWrong = req.params.id - 1;
  const specificPost = Post.all[idCounterIsWrong].comment;
  // console.log(Post.all[idCounterIsWrong]);
  res.status(200).send(specificPost);
});

router.put("/comment/:id", (req, res) => {
  const idCounterIsWrong = req.params.id - 1;
  const newCommentId = Post.all[idCounterIsWrong].id;
  console.log(newCommentId);
  console.log(idCounterIsWrong);
  console.log(req.body.comment);
  try {
    Post.newComment(newCommentId, req.body.comment);
    res.status(201).send("posted comment");
  } catch (e) {
    res.status(404).send("ERROR: TRY AGAIN LATER");
  }
});

// router.put('/', (req, res) => {
//   const newComment = Post.
// })

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
