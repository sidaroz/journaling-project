const main = document.querySelectorAll(".main");
const comment = document.querySelector(".comment");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnOpenModal = document.querySelectorAll(".btn--show-modal");
const postBtn = document.querySelector(".btn");
const postCommentBtn = document.querySelector(".btn-comment");
const commentText = document.querySelector(".comment-text");
const commentSection = document.querySelector(".all-comments");

// Toggles comments on the post
main.forEach((eachMain) =>
  eachMain.addEventListener("click", function () {
    comment.classList.toggle("comment");
  })
);

// MAKE a new post
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnOpenModal.forEach((e) => e.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// Make emojis hover
const handleHover = function (e, opacity) {
  if (e.target.classList.contains("face-emoji")) {
    const link = e.target;
    const siblings = link.closest(".emojis").querySelectorAll(".face-emoji");
    const numbers = link.closest(".emojis").querySelectorAll("label");
    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = opacity;
    });
    numbers.forEach((el) => {
      if (el !== link) el.style.opacity = opacity;
    });
  }
};

main.forEach((e) =>
  e.addEventListener("mouseover", (e) => handleHover(e, 0.5))
);

main.forEach((e) => e.addEventListener("mouseout", (e) => handleHover(e, 1)));

// To add comment
const addComment = function (e) {
  const createNewCommentLine = document.createElement("p");
  commentSection.classList.add("comment-styling");
  createNewCommentLine.style.textAlign = "centre";
  createNewCommentLine.textContent = `${commentText.value}`;
  commentSection.style.textAlign = "center";
  commentSection.append(createNewCommentLine.textContent);
  const br = document.createElement("br");
  commentSection.append(br);
};

postCommentBtn.addEventListener("click", addComment);
