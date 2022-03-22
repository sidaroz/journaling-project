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
        // Sorts out the overall box layout
        mainGrid.appendChild(newSection);
        newSection.append(newDivHeader);
        newDivHeader.append(factHeader);
        newDivHeader.append(dateForPost);
        newSection.append(factDescription);

        // Sorts out the comment in the bottom navbar
        newSection.append(navBar);
        navBar.append(navBarDivSetter1);
        navBar.append(navBarDivSetter2);
        navBarDivSetter1.append(commentIcon);
        // Sorts the gif in navbar
        navBarDivSetter2.append(gifImage);
        // Sorts the emojis in the navbar
        navBar.append(emojiDiv);
        emojiDiv.append(emojiHappy);
        emojiDiv.append(labelHappyEmoji);

        emojiDiv.append(emojiDizzy);
        emojiDiv.append(labelDizzyEmoji);
        emojiDiv.append(emojiAngry);
        emojiDiv.append(labelAngryEmoji);

        // Sorts the commenting under each post
        const sectionToComment = document.createElement("section");
        sectionToComment.setAttribute("class", "comment comment-box");
        const commentsGoHere = document.createElement("div");
        commentsGoHere.setAttribute("class", "all-comments");
        const commentPara = document.createElement("p");
        commentPara.setAttribute("class", "comment-styling");
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
      });
    });
}

listAllPosts();

// const mainGrid = document.querySelector(".main-grid");

// async function postAll() {
//   try {
//     const fetchPost = await fetch("http://localhost:3000/");
//     let jsonArr = await fetchPost.json();
//     console.log(jsonArr);

//     jsonArr.forEach((obj) => {
//       createArticle(obj);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }

// function createArticle(obj) {
//   const article = document.createElement("article");
//   article.setAttribute("class", "main");
//   const div = document.createElement("div");
//   div.setAttribute("class", "flex");
//   const h2 = document.createElement("h2");
//   h2.textContent = `${obj.title}`;
//   const pArticle = document.createElement("p");
//   pArticle.textContent = `${obj.description}`;
//   const h5 = document.createElement("h5");
//   h5.textContent = `Posted: ${obj.date.slice(5, -7)}`;

//   const iComment = document.createElement("i");
//   iComment.setAttribute("class", "fa-regular fa-comment fa-2x add-comment");
//   const iDiv = document.createElement("div");
//   iDiv.append(iComment);

//   const gifIcon = document.createElement("img");
//   gifIcon.setAttribute("class", "gif-image");
//   gifIcon.setAttribute("src", "./images/gif-image2.png");
//   gifIcon.setAttribute("alt", "gif logo");
//   const gifDiv = document.createElement("div");
//   gifDiv.append(gifIcon);

//   const grinI = document.createElement("i");
//   grinI.setAttribute(
//     "class",
//     "fa-regular fa-face-grin-squint-tears fa-2x face-emoji"
//   );
//   grinI.setAttribute("style", "opacity: 1;");
//   const grinLabel = document.createElement("label");
//   grinLabel.setAttribute("for", "fa-face-grin");
//   grinLabel.setAttribute("style", "opacity: 1;");
//   grinLabel.textContent = "0";

//   const dizzyI = document.createElement("i");
//   dizzyI.setAttribute("class", "fa-regular fa-face-dizzy fa-2x face-emoji");
//   dizzyI.setAttribute("style", "opacity: 1;");
//   const dizzyLabel = document.createElement("label");
//   dizzyLabel.setAttribute("for", "fa-face-dizzy");
//   dizzyLabel.setAttribute("style", "opacity: 1;");
//   dizzyLabel.textContent = "0";

//   const angryI = document.createElement("i");
//   angryI.setAttribute("class", "fa-regular fa-face-angry fa-2x face-emoji");
//   angryI.setAttribute("style", "opacity: 1;");
//   const angryLabel = document.createElement("label");
//   angryLabel.setAttribute("for", "fa-face-angry");
//   angryLabel.setAttribute("style", "opacity: 1;");
//   angryLabel.textContent = "0";

//   const emojiDiv = document.createElement("div");
//   emojiDiv.setAttribute("class", "emojis");
//   emojiDiv.append(grinI);
//   emojiDiv.append(grinLabel);
//   emojiDiv.append(dizzyI);
//   emojiDiv.append(dizzyLabel);
//   emojiDiv.append(angryI);
//   emojiDiv.append(angryLabel);

//   const navDiv = document.createElement("div");
//   navDiv.setAttribute("class", "response-wholenav");
//   navDiv.append(iDiv);
//   navDiv.append(gifDiv);
//   navDiv.append(emojiDiv);

//   div.append(h2);
//   article.append(div);
//   article.append(pArticle);
//   article.append(h5);
//   article.append(navDiv);

//   const divOne = document.createElement("div");
//   divOne.setAttribute("class", "all-comments");
//   const divOneP = document.createElement("p");
//   divOneP.setAttribute("class", "comment-styling");
//   divOneP.textContent = "Comment Section";
//   divOne.append(divOneP);

//   const divTwo = document.createElement("div");
//   divTwo.setAttribute("class", "post-comment");
//   const divTwoInput = document.createElement("input");
//   divTwoInput.setAttribute("type", "text");
//   divTwoInput.setAttribute("class", "comment-text");
//   divTwoInput.setAttribute("placeholder", "Enter comment here");
//   const divTwoBtn = document.createElement("button");
//   divTwoBtn.setAttribute("type", "button");
//   divTwoBtn.setAttribute("class", "btn-comment");
//   divTwoBtn.textContent = "Post Comment";
//   divTwo.append(divTwoInput);
//   divTwo.append(divTwoBtn);

//   const section = document.createElement("section");
//   section.setAttribute("class", "comment-box");
//   section.setAttribute("id", `${obj.id}`);
//   section.append(divOne);
//   section.append(divTwo);

//   mainGrid.append(article);
//   mainGrid.append(section);
// }

// postAll();
