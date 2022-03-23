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

router.get("/:reaction/:id/", (req, res) => {
  const idCounterIsWrong = req.params.id - 1;
  const specificPost = Post.all[idCounterIsWrong].reaction;
  // console.log(Post.all[idCounterIsWrong]);
  console.log(specificPost.reaction1++);
  res.status(200).send(specificPost);
});

// router.get("/:reaction/:id/1", (req, res) => {
//   const idCounterIsWrong = req.params.id - 1;
//   const specificPost = Post.all[idCounterIsWrong].reaction;
//   console.log(specificPost.reaction1++);
//   // console.log(Post.all[idCounterIsWrong]);
//   res.status(200).send(specificPost.reaction1 + 1);
// });
// router.get("/:reaction/:id/", (req, res) => {
//   const idCounterIsWrong = req.params.id - 1;
//   const specificPost = Post.all[idCounterIsWrong].reaction;
//   // console.log(Post.all[idCounterIsWrong]);
//   res.status(200).send(specificPost);
// });

router.put("/comment/:id", (req, res) => {
  const idCounterIsWrong = req.params.id - 1;
  const newCommentId = Post.all[idCounterIsWrong].id;
  // console.log(newCommentId);
  // console.log(idCounterIsWrong);
  // console.log(req.body.comment);
  try {
    Post.newComment(newCommentId, req.body.comment);
    res.status(201).send("posted comment");
  } catch (e) {
    res.status(404).send("ERROR: TRY AGAIN LATER");
  }
});
router.put("/comment/:id", (req, res) => {
  const idCounterIsWrong = req.params.id - 1;
  const newCommentId = Post.all[idCounterIsWrong].id;
  // console.log(newCommentId);
  // console.log(idCounterIsWrong);
  // console.log(req.body.comment);
  try {
    Post.newGifPost(newCommentId, req.body.comment);
    res.status(201).send("posted comment");
  } catch (e) {
    res.status(404).send("ERROR: TRY AGAIN LATER");
  }
});

// router.put("/:reaction/:id/1", (req, res) => {
//   const idCounterIsWrong = req.params.id - 1;
//   const newCommentId = Post.all[idCounterIsWrong].id;
//   console.log(req.body);
//   Post.newReactionHappy(newCommentId);
//   try {
//     res.status(201).send("Sent Reaction");
//   } catch (e) {
//     res.status(404).send("ERROR: TRY AGAIN LATER");
//   }
// });

// router.put("/:reaction/:id/2", (req, res) => {
//   const idCounterIsWrong = req.params.id - 1;
//   const newCommentId = Post.all[idCounterIsWrong].id;
//   console.log(req.body);
//   Post.newReactionDizzy(newCommentId);
//   try {
//     res.status(201).send("Sent Reaction");
//   } catch (e) {
//     res.status(404).send("ERROR: TRY AGAIN LATER");
//   }
// });

// router.put("/:reaction/:id/3", (req, res) => {
//   const idCounterIsWrong = req.params.id - 1;
//   const newCommentId = Post.all[idCounterIsWrong].id;
//   console.log(req.body);
//   Post.newReactionAngry(newCommentId);
//   try {
//     res.status(201).send("Sent Reaction");
//   } catch (e) {
//     res.status(404).send("ERROR: TRY AGAIN LATER");
//   }
// });

module.exports = router;
