// To add post
const form = document.querySelector(".modal__form");

const closeAfterSubmit = function () {
  modal.classList.add("hidden"); // This is the same function as closeModal from script.js, Exporting wasnt working.
  overlay.classList.add("hidden");
};

// ADDING A POST
const addPost = function (e) {
  // e.preventDefault();
  const title = document.querySelector("#fact-question");
  const description = document.querySelector("#fact-description");

  if (title.value.trim().length > 0 && description.value.trim().length > 0) {
    const data = {
      title: title.value.trim(),
      description: description.value.trim(),
    };
    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json" },
    };

    fetch("http://localhost:3000/", options)
      // .then((resp) => resp.json)
      // .then ((data) => console.log(data))
      .then(console.log("Posted post"))
      .catch((err) => console.log(err));
    console.log(data);
  }
  console.log(title.value);
  console.log(description.value);
  closeAfterSubmit();
  form.reset();
};

form.addEventListener("submit", addPost);


