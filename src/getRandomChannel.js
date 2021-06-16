const getChannel = require('./getChannel')
const getRandomChannel = () => {
  fetch('http://localhost:3004/')
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById('container');
      for (let i = 0; i< data.length; i++) {
        getChannel(data[i])
        // container.append(getChannel(data[i]))
      }
    })
}
module.exports = getRandomChannel