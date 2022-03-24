const postData = require("../data");

class Post {
  constructor(data) {
    this.id = data.id;
    this.title = data.title || "";
    this.description = data.description || "";
    this.gif = data.gif || "";
    this.date = data.date;
    this.reaction = data.reaction || [{reaction1: 0}, {reaction2: 0}, {reaction3: 0}];
    this.comment = data.comment || [];
  }

  static get all() {
    const posts = postData.map((data) => new Post(data));
    return posts;
  }

  static createPost(postInfo) {
    const newPostId = postData.length + 1;
    const date = new Date().toUTCString();
    const newPost = new Post({ id: newPostId, date: date, ...postInfo });
    postData.push(newPost);
    return newPost;
  }

  static newComment(postId, commentValue) {
    postData.forEach((post) => {
      if (post.id === postId) {
        console.log(postId);
        post.comment.push(commentValue);
        return post;
      }
    });
  }

  static newReactionHappy(postId, toggler) {
    postData.forEach((post) => {
      if (post.id === postId) {
        if (toggler == 1){
          post.reaction[0].reaction1++;
        } else if (toggler == 2){
          post.reaction[0].reaction1--;
        }
        // console.log(post.reaction);
        return post;
      }
    });
  }
  static newReactionDizzy(postId, toggler) {
    postData.forEach((post) => {
      if (post.id === postId) {
        if (toggler == 1){
          post.reaction[1].reaction2++;
        } else if (toggler == 2){
          post.reaction[1].reaction2--;
        }
        return post;
      }
    });
  }
  static newReactionAngry(postId, toggler) {
    postData.forEach((post) => {
      if (post.id === postId) {
        if (toggler == 1){
          post.reaction[2].reaction3++;
        } else if (toggler == 2){
          post.reaction[2].reaction3--;
        }
        return post;
      }
    });
  }

}

module.exports = Post;
