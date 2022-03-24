// import data
const postData = require('../data');

// import model
const PostWithComment = require('../models/post');

describe ('Post Model', () => {
    const testPost = {
        id: 9,
        title: "What animals can not walk backwards?",
        description: "here is a fact",
        date: "Wed, 23 Mar 2022 21:50:29 GMT",
        "gif": "https://giphy.com/gifs/6BMRebCT8GfVmRgzlc",
        "reaction": [{ reaction1: 0}, {reaction2: 0}, {reaction3: 0 }],
        "comment": []

    }
  // Posts test
  it ('should make an instance of a post', () => {
      const post = new PostWithComment({...testPost});

      expect(post.id).toBe(9);
      expect(post.title).toBe("What animals can not walk backwards?");
      expect(post.description).toBe("here is a fact")
      expect(post.date).toBe("Wed, 23 Mar 2022 21:50:29 GMT");
      expect(post.gif).toBe("https://giphy.com/gifs/6BMRebCT8GfVmRgzlc")
      expect(post.reaction).toEqual([{ reaction1: 0}, {reaction2: 0}, {reaction3: 0 }])
      expect(post.comment).toEqual([])
  })



it ('should return all posts', () => {
    const posts = PostWithComment.all;
    expect(posts.posts).toEqual(postData.posts);
});

it ('should create a post', () => {
    const newPost = PostWithComment.createPost(testPost);
    expect(newPost).toEqual({...testPost})
})

//  it ('should create a comment', () => {
//      const bNewComment = PostWithComment.newComment(testPost)
//      expect().toBe()
//      expect(bNewComment).toBe(commentValue)
//  })
}) 
