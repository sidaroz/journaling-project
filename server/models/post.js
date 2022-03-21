
const postData = require('../data')

class Post {
    constructor(data) {
        this.id = data.id;
        this.title = data.title || "";
        this.description = data.description || "";
        this.gif = data.gif || "";
        this.date = data.date;
        this.reaction = data.reaction || {reaction1: 0, reaction2: 0, reaction3: 0};
        this.comment = data.comment || [];
    }

    static get all() {
        const posts = postData.map((data) => new Post(data));
        return posts;
    }

    static createPost(postInfo) {
        const newPostId = postData.length + 1;
        const date = new Date().toUTCString()
        const newPost = new Post({ id: newPostId, date: date,  ...postInfo });
        postData.push(newPost);
        return newPost;
    }

    // static newComment(req, commentArr) {
    //     let matcher = postData.filter(obj => )
    // }
}

module.exports = Post;
