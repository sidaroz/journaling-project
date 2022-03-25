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

router.get("/:id/:reaction/:toggler", (req, res) => {
  const idCounterIsWrong = req.params.id - 1;
  const reaction = req.params.reaction;
  const specificPost = Post.all[idCounterIsWrong].reaction;
  // console.log(Post.all[idCounterIsWrong]);
  // console.log(Post.all[idCounterIsWrong].id);
  console.log(specificPost);
  switch (reaction){
    case 'happy':
      res.status(200).send(specificPost[0]);
      break;
    case 'dizzy':
      res.status(200).send(specificPost[1]);
      break;  
    case 'angry':
      res.status(200).send(specificPost[2]);
      break;
    default:
      res.sendStatus(404)
  }
  // console.log(req.params.reaction)
  // res.status(200).send(specificPost[0]);
});

router.patch("/:id/:reaction/:toggler", (req, res) => {
  const idCounterIsWrong = req.params.id - 1;
  const newCommentId = Post.all[idCounterIsWrong].id;
  const reaction = req.params.reaction;
  const toggler = req.params.toggler;
  // const arrBefore = Post.all[idCounterIsWrong].reaction
  // console.log(Post.all[idCounterIsWrong].reaction);
  switch (reaction){
    case 'happy':
      Post.newReactionHappy(newCommentId, toggler);
      break;
    case 'dizzy':
      Post.newReactionDizzy(newCommentId, toggler);
      break;  
    case 'angry':
      Post.newReactionAngry(newCommentId, toggler);
      break;
    default:
      res.sendStatus(404)
  }
  
  try {
    res.status(201).send("Sent Reaction");
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


module.exports = router;

