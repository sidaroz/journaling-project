// To add post

const addPost = function (e) {
  e.preventDefault();
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
    
    console.log(data)
  }
  console.log(title.value)
  console.log(description.value)
  
};

postFormBtn = document.querySelector(".modal__form");
postFormBtn.addEventListener("submit", addPost);

// module.exports = { addPost };
