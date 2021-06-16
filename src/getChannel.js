const container = document.getElementById('container')
const getChannelByClick = require('./getChannelByClick')
const getChannel = (data) => {
  const mainDiv = document.createElement('div');
  const textDiv = document.createElement('div');
  const titleDiv = document.createElement('div');
  const nameDiv = document.createElement('div');
  const b = document.createElement('b')
  const buttonDiv = document.createElement('div');
  const title = document.createElement('h3');
  const text = document.createElement('p')
  const button = document.createElement('button');
  const titleLink = document.createElement('a');
  const a = document.createElement('a');
  title.append(titleLink)
  titleLink.append(data.title);
  titleDiv.append(title);
  b.append(data.name);
  nameDiv.prepend(b)
  text.append(data.text);
  textDiv.append(text);
  titleLink.href = "#";
  a.textContent = 'Подписаться';
  a.href = '#';
  button.prepend(a);
  buttonDiv.append(button);
  mainDiv.prepend( nameDiv, textDiv, titleDiv, buttonDiv);
  titleLink.addEventListener('click', () => {
    getChannelByClick(data._id)
    console.log(data)
  })
  container.append(mainDiv)
}

module.exports = getChannel;