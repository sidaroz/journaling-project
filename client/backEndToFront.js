// Make the data appear on the html file

const mainGrid = document.querySelector(".main-grid");

function listAllPosts() {
  fetch("http://localhost:3000")
    .then((resp) => resp.json())
    .then((data) => {
        const reversedData = data.reverse();
      console.log(data);
      reversedData.forEach((eachFact) => {
        const newSection = document.createElement("article");
        newSection.setAttribute("class", "main");
        newSection.setAttribute("id", `${eachFact.id}`);
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
        gifImage.setAttribute("src", "./images/gif-image2.png");
        gifImage.setAttribute("alt", "gif logo");
        const emojiDiv = document.createElement("div");
        emojiDiv.setAttribute("class", "emojis");

        // Happy Emoji
        const emojiHappy = document.createElement("i");
        emojiHappy.setAttribute(
          "class",
          "fa-regular fa-face-grin-squint-tears fa-2x face-emoji"
        );
        let labelHappyEmoji = document.createElement("label");
        labelHappyEmoji.setAttribute("class", "emoji-numbers grin");
        labelHappyEmoji.setAttribute("for", "fa-face-grin-squint-tears");
        labelHappyEmoji.textContent = eachFact.reaction[0].reaction1;

        // Dizzy Emoji
        const emojiDizzy = document.createElement("i");
        emojiDizzy.setAttribute(
          "class",
          "fa-regular fa-face-dizzy fa-2x face-emoji"
        );
        let labelDizzyEmoji = document.createElement("label");
        labelDizzyEmoji.setAttribute("class", "emoji-numbers dizzy");
        labelDizzyEmoji.setAttribute("for", "fa-face-dizzy");
        labelDizzyEmoji.textContent = eachFact.reaction[1].reaction2;

        // Angry Emoji
        const emojiAngry = document.createElement("i");
        emojiAngry.setAttribute(
          "class",
          "fa-regular fa-face-angry fa-2x face-emoji"
        );
        let labelAngryEmoji = document.createElement("label");
        labelAngryEmoji.setAttribute("class", "emoji-numbers angry");
        labelAngryEmoji.setAttribute("for", "fa-face-angry");
        labelAngryEmoji.textContent = eachFact.reaction[2].reaction3;

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
          if (eachComment.includes("http")) {
            const lineForDiv = document.createElement("div");
            lineForDiv.setAttribute("class", "giphyOut");
            const imageHolder = document.createElement("img");
            imageHolder.setAttribute("src", `${eachComment}`);
            lineForDiv.append(imageHolder);
            commentsGoHere.append(lineForDiv);
          } else {
            const lineMaker = document.createElement("p");
            lineMaker.setAttribute("class", "comments-from-data-here");
            lineMaker.append(eachComment);
            commentsGoHere.append(lineMaker);
          }
        });
        sectionToComment.append(postCommentSection);
        postCommentSection.append(buttonInput);
        postCommentSection.append(buttonItselfToComment);
        buttonItselfToComment.textContent = "Post Comment";

        // To make a GIF search for each article
        const sectionToGif = document.createElement("section");
        sectionToGif.setAttribute(
          "class",
          "giphy giphy-box comment-box comment"
        );
        const divForGifTitle = document.createElement("div");
        divForGifTitle.setAttribute("class", "all-giphy all-comments");
        const gifTitlePara = document.createElement("p");
        gifTitlePara.setAttribute("class", "giphy-styling comment-styling");
        gifTitlePara.textContent = "Giphy Search";
        const divSectionToPostGif = document.createElement("div");
        divSectionToPostGif.setAttribute("class", "post-giphy post-comment");
        const gifTextInput = document.createElement("input");
        gifTextInput.setAttribute("type", "text");
        gifTextInput.setAttribute("class", "comment-text giphySearch");
        gifTextInput.setAttribute("placeholder", "giphySearch Here");
        const selectGifBtn = document.createElement("button");
        selectGifBtn.setAttribute("type", "button");
        selectGifBtn.setAttribute("class", "btn-comment btn-select-giphy");
        selectGifBtn.textContent = "Select Gif";
        const postGifBtn = document.createElement("button");
        postGifBtn.setAttribute("type", "button");
        postGifBtn.setAttribute("class", "btn-comment btn-post-giphy");
        postGifBtn.textContent = "Post Gif";
        const divSectionForImageGif = document.createElement("div");
        divSectionForImageGif.setAttribute("class", "giphyOut");
        mainGrid.append(sectionToGif);
        sectionToGif.append(divForGifTitle);
        divForGifTitle.append(gifTitlePara);
        sectionToGif.append(divSectionToPostGif);
        divSectionToPostGif.append(gifTextInput);
        divSectionToPostGif.append(selectGifBtn);
        divSectionToPostGif.append(postGifBtn);
        sectionToGif.append(divSectionForImageGif);

        // Open and close gif sections with the icon
        function openGifs() {
          sectionToComment.nextElementSibling.classList.toggle("comment");
        }
        gifImage.addEventListener("click", openGifs);

        // Search for gif in the section
        const searchForGif = function () {
          const ApiKey = "dJsOI4IkRGeJqDMBmqytSqfm506r4lrI";
          const userInput = gifTextInput.value.trim();
          let url = `https://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=${ApiKey}&limit=10`;
          url = url.concat(userInput);
          fetch(url)
            .then((resp) => resp.json())
            .then((content) => {
              // console.log(content.data)
              // console.log('META', content.meta)
              let imgPath =
                content.data[Math.floor(Math.random() * 50)].images.fixed_height.url;
              console.log(imgPath);
              let img = document.createElement("img");
              img.setAttribute("src", imgPath);
              let out = divSectionForImageGif;

              // removes previous gif before inserting new one
              out.textContent = "";
              out.insertAdjacentElement("afterbegin", img);

              // Clears searchbar
              // document.querySelector(".giphySearch").value = '';
            })
            .catch((err) => {
              console.log(err);
            });
        };

        selectGifBtn.addEventListener("click", searchForGif);

        // POST A GIF AFTER ITS SEARCHED
        const toAddGif = function () {
          console.log("clicked");
          const imgSrc = divSectionForImageGif.firstChild.getAttribute("src");
          console.log(imgSrc);
          const data = { comment: imgSrc };

          const options = {
            method: "PUT",
            body: JSON.stringify(data),
            headers: { "Content-type": "application/json" },
          };
          fetch(`http://localhost:3000/comment/${eachFact.id}`, options)
            .then(() => {
              const lineMaker = document.createElement("div");
              lineMaker.setAttribute("class", "giphyOut");
              const imageHolder = document.createElement("img");
              imageHolder.setAttribute("src", `${imgSrc}`);
              lineMaker.append(imageHolder);
              commentsGoHere.append(lineMaker);
            })
            .catch((err) => console.log(err));
        };

        postGifBtn.addEventListener("click", toAddGif);

        // Open comments and close comments function
        function openComments(e) {
          const clicked = e.target;
          if (
            clicked.classList.contains("face-emoji") ||
            clicked.classList.contains("emojis") ||
            clicked.classList.contains("emoji-numbers") ||
            clicked.classList.contains("gif-image")
          ) {
            return;
          } else newSection.nextElementSibling.classList.toggle("comment");
        }

        newSection.addEventListener("click", (e) => openComments(e));

        // ADDING A COMMENT

        const toAddComment = function () {
          console.log("clicked");

          if (buttonInput.value.trim().length > 0) {
            const data = { comment: buttonInput.value.trim() };

            const options = {
              method: "PUT",
              body: JSON.stringify(data),
              headers: { "Content-type": "application/json" },
            };
            fetch(`http://localhost:3000/comment/${eachFact.id}`, options)
              .then(() => {
                const lineMaker = document.createElement("p");
                lineMaker.setAttribute("class", "comments-from-data-here");
                lineMaker.textContent = buttonInput.value;
                commentsGoHere.append(lineMaker);
              })
              .then(() => (buttonInput.value = ""))
              .catch((err) => console.log(err));
          }
        };
        buttonItselfToComment.addEventListener("click", toAddComment);

        // ADDING A REACTION
        const addReaction = function (e) {
          console.log("click the emoji");
          console.log(e.target.classList)
          const tokenList = e.target.classList;
          let emojiFace;
          let emotion = 0;
          let toggler;
          if (tokenList.contains("fa-face-grin-squint-tears")) {
            labelHappyEmoji.classList.toggle('selected');
            if (labelHappyEmoji.classList.contains('selected')){
              toggler = 1;
            } else {
              toggler = 2;
            };
            emotion = 'happy';
            emojiFace = labelHappyEmoji;
          } else if (tokenList.contains("fa-face-dizzy")) {
            labelDizzyEmoji.classList.toggle('selected');
            if (labelDizzyEmoji.classList.contains('selected')){
              toggler = 1;
            } else {
              toggler = 2;
            };
            emotion = 'dizzy';
            emojiFace = labelDizzyEmoji;
          } else if (tokenList.contains("fa-face-angry")) {
            labelAngryEmoji.classList.toggle('selected');
            if (labelAngryEmoji.classList.contains('selected')){
              toggler = 1;
            } else {
              toggler = 2;
            };
            emotion = 'angry';
            emojiFace = labelAngryEmoji;
          }
          const options = {
            method: "PATCH",
            headers: { "Content-type": "application/json" },
          };

          fetch(
            `http://localhost:3000/${eachFact.id}/${emotion}/${toggler}`,
            options
          )
            .then(() => {
              if (toggler === 1){
                emojiFace.textContent++;
              } else if (toggler === 2) {
                emojiFace.textContent--;
              }
            })
            .catch((err) => console.log(err));
        };

        emojiHappy.addEventListener("click", addReaction);
        emojiDizzy.addEventListener("click", addReaction);
        emojiAngry.addEventListener("click", addReaction);

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
