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
        "reaction": {
        "reaction1": 0,
        "reaction2": 0,
        "reaction3": 0
        },
        "comment": []

    }
//   // Posts test
//   it ('should make an instance of a post', () => {
//       const post = new Postwithcomment.Post({...testPost});

//       expect(post.id).toBe(9);
//       expect(post.title).toBe("What animals can not walk backwards?");
//       expect(post.description).toBe("here is a fact")
//       expect(post.date).toBe("Wed, 23 Mar 2022 21:50:29 GMT");
//       expect(post.comment)toBe([])
//   })

it ('should return all posts', () => {
    const posts = PostWithComment.Post.all;
    expect(posts).toEqual(postData.posts.posts);
});

}) 
