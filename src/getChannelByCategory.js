const getChannel = require('./getChannel')
const container = document.getElementById('container')
const getChannelByCategory = (id) => {
  fetch(`http://localhost:3004/category/${id}/channels`)
    .then(res => res.json())
    .then(data => {
      container.textContent = ''
      for (let i = 0; i< data.length; i++) {
        getChannel(data[i])
      }
    })
}

module.exports = getChannelByCategory