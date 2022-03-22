// Make the data appear on the html file

const mainGrid = document.querySelector(".main-grid");

function listAllPosts() {
  fetch("http://localhost:3000")
    .then((resp) => resp.json())
    .then((data) => {
      //   const reversedData = data.reverse();
      console.log(data);
      data.forEach((eachFact) => {
        const newSection = document.createElement("article");
        newSection.setAttribute("class", "main");
        const newDivHeader = document.createElement("div");
        newDivHeader.setAttribute("class", "flex");
        const factHeader = document.createElement("h2");
        factHeader.textContent = eachFact.title;
        const dateForPost = document.createElement("h4");
        dateForPost.textContent = eachFact.date.slice(5, -7);
        const factDescription = document.createElement("p");
        factDescription.textContent = eachFact.description;
        const navBar = document.createElement("div");
        navBar.setAttribute("class", "response-wholenav");
        const navBarDivSetter1 = document.createElement("div");
        const navBarDivSetter2 = document.createElement("div");
        const commentIcon = document.createElement("i");
        commentIcon.setAttribute(
          "class",
          "fa-regular fa-comment fa-2x add-comment"
        );
        const gifImage = document.createElement("img");
        gifImage.setAttribute("class", "gif-image");
        gifImage.setAttribute("src", "/client/images/gif-image2.png");
        gifImage.setAttribute("alt", "gif logo");
        const emojiDiv = document.createElement("div");
        emojiDiv.setAttribute("class", "emojis");

        // Happy Emoji
        const emojiHappy = document.createElement("i");
        emojiHappy.setAttribute(
          "class",
          "fa-regular fa-face-grin-squint-tears fa-2x face-emoji"
        );
        const labelHappyEmoji = document.createElement("label");
        labelHappyEmoji.setAttribute("class", "emoji-numbers grin");
        labelHappyEmoji.setAttribute("for", "fa-face-grin");
        labelHappyEmoji.textContent = eachFact.reaction.reaction1;

        // Dizzy Emoji
        const emojiDizzy = document.createElement("i");
        emojiDizzy.setAttribute(
          "class",
          "fa-regular fa-face-dizzy fa-2x face-emoji"
        );
        const labelDizzyEmoji = document.createElement("label");
        labelDizzyEmoji.setAttribute("class", "emoji-numbers dizzy");
        labelDizzyEmoji.setAttribute("for", "fa-face-dizzy");
        labelDizzyEmoji.textContent = eachFact.reaction.reaction2;

        // Angry Emoji
        const emojiAngry = document.createElement("i");
        emojiAngry.setAttribute(
          "class",
          "fa-regular fa-face-angry fa-2x face-emoji"
        );
        const labelAngryEmoji = document.createElement("label");
        labelAngryEmoji.setAttribute("class", "emoji-numbers angry");
        labelAngryEmoji.setAttribute("for", "fa-face-angry");
        labelAngryEmoji.textContent = eachFact.reaction.reaction3;

        // This is the fact title and description to bring from data to html frontend
        // Creates the overall box layout we wanted
        mainGrid.appendChild(newSection);
        newSection.append(newDivHeader);
        newDivHeader.append(factHeader);
        newDivHeader.append(dateForPost);
        newSection.append(factDescription);

        // Creates the comment in the bottom navbar
        newSection.append(navBar);
        navBar.append(navBarDivSetter1);
        navBar.append(navBarDivSetter2);
        navBarDivSetter1.append(commentIcon);

        // Creates the gif in navbar
        navBarDivSetter2.append(gifImage);

        // Creates the emojis in the navbar
        navBar.append(emojiDiv);
        emojiDiv.append(emojiHappy);
        emojiDiv.append(labelHappyEmoji);

        emojiDiv.append(emojiDizzy);
        emojiDiv.append(labelDizzyEmoji);
        emojiDiv.append(emojiAngry);
        emojiDiv.append(labelAngryEmoji);

        // Creates and sorts the commenting under each post
        const sectionToComment = document.createElement("section");
        sectionToComment.setAttribute("class", "comment comment-box");
        const commentsGoHere = document.createElement("div");
        commentsGoHere.setAttribute("class", "all-comments");
        const commentPara = document.createElement("p");
        commentPara.setAttribute("class", "comment-styling");
        const commentsFromData = document.createElement("p");
        commentsFromData.setAttribute("class", "comments-from-data-here");
        const postCommentSection = document.createElement("div");
        postCommentSection.setAttribute("class", "post-comment");
        const buttonInput = document.createElement("input");
        buttonInput.setAttribute("type", "text");
        buttonInput.setAttribute("class", "comment-text");
        buttonInput.setAttribute("placeholder", "Enter comment here");
        const buttonItselfToComment = document.createElement("button");
        buttonItselfToComment.setAttribute("type", "button");
        buttonItselfToComment.setAttribute("class", "btn-comment");

        mainGrid.append(sectionToComment);
        sectionToComment.append(commentsGoHere);
        commentsGoHere.append(commentPara);
        commentPara.textContent = "Comment Section";

        // To make a new line for every single comment
        eachFact.comment.forEach((eachComment) => {
          const lineMaker = document.createElement("p");
          lineMaker.setAttribute("class", "comments-from-data-here");
          lineMaker.textContent = eachComment;
          commentsGoHere.append(lineMaker);
        });

        sectionToComment.append(postCommentSection);
        postCommentSection.append(buttonInput);
        postCommentSection.append(buttonItselfToComment);
        buttonItselfToComment.textContent = "Post Comment";

        // Open comments and close comments function
        function openComments(e) {
          const clicked = e.target;
          console.log(clicked);
          if (
            clicked.classList.contains("face-emoji") ||
            clicked.classList.contains("emojis") ||
            clicked.classList.contains("emoji-numbers")
          ) {
            return console.log("Cant open");
          } else newSection.nextElementSibling.classList.toggle("comment");
        }

        newSection.addEventListener("click", (e) => openComments(e));

        // Make the emojis change in opacity on hover
        const handleHover = function (e, opacity) {
          if (e.target.classList.contains("face-emoji")) {
            const link = e.target;
            const siblings = link
              .closest(".emojis")
              .querySelectorAll(".face-emoji");
            const numbers = link.closest(".emojis").querySelectorAll("label");
            siblings.forEach((el) => {
              if (el !== link) el.style.opacity = opacity;
            });
            numbers.forEach((el) => {
              if (el !== link) el.style.opacity = opacity;
            });
          }
        };

        newSection.addEventListener("mouseover", (e) => handleHover(e, 0.5));

        newSection.addEventListener("mouseout", (e) => handleHover(e, 1));
      });
    });
}

listAllPosts();
