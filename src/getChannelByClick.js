const getComments = require("./getComments");
const container = document.getElementById("container");
const getChannelByClick = (id) => {
  fetch(`http://localhost:3004/channels/${id}`)
    .then((res) => res.json())
    .then(data => {
      container.textContent = "";
      const div = document.createElement("div");
      const h3 = document.createElement("h3");
      const h2 = document.createElement("h2");
      const h4 = document.createElement("h4");
      const form = document.createElement("form");
      const inputName = document.createElement("input");
      const inputComment = document.createElement("input");
      const button = document.createElement("button");
      h3.append(data.title);
      h2.append(data.name);
      h4.append(data.text);
      form.method = "post";
      inputName.type = "text";
      inputName.name = "userName";
      inputComment.type = "text";
      inputComment.name = "text";
      button.type = "submit";
      button.prepend("Отправить");
      form.append(inputName, inputComment, button);
      div.append(h3, h2, h4, form);
      container.append(div);
      button.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(data._id)
        fetch(`http://localhost:3004/channel/${data._id}/comments`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userName: inputName.value,
            text: inputComment.value
          }),
        })
          .then((res) => res.json())
          .then((data) => {

            const div = document.createElement("div");
            const userDiv = document.createElement("div");
            const commentDiv = document.createElement("div");
            userDiv.prepend(data.userName);
            commentDiv.prepend(data.text);
            div.append(userDiv, commentDiv);
            container.append(div);
          });
      });

      getComments(data._id)
    });
};
module.exports = getChannelByClick;
