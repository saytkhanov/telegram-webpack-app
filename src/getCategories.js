const getChannelByCategory = require('./getChannelByCategory')
const getCategories = () => {
  fetch('http://localhost:3004/categories')
    .then(res => res.json())
    .then(data => {
      const sidebar = document.getElementById('sidebar');
      for (let i = 0; i < data.length; i++) {
        const button = document.createElement('button');
        const a = document.createElement('a');
        a.href = `#`;
        a.append(data[i].name);
        a.classList.add('active')
        button.append(a)
        sidebar.append(button)
        console.log(data[i])
        a.addEventListener('click', () => getChannelByCategory(data[i]._id))
      }
    })
}

module.exports = getCategories