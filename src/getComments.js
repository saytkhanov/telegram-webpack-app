const container = document.getElementById('container')
const getComments = (id) => {
  fetch(`http://localhost:3004/channel/${id}/comments`)
    .then(res => res.json())
    .then(data => {
      for (let i = 0; i < data.length; i++) {
        console.log(data)
        const div = document.createElement('div');
        const userDiv = document.createElement('div');
        const commentDiv = document.createElement('div');
        userDiv.prepend(data[i].userName)
        commentDiv.prepend(data[i].text);
        div.append(userDiv, commentDiv)
        container.append(div)
      }
    })
}

module.exports = getComments