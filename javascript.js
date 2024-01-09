const container = document.querySelector('#container');
const content = document.createElement('p');
content.classList.add('content');
content.textContent = 'Hey I\'m red!';
content.style.color = 'red';
container.appendChild(content);

const div = document.createElement('div');
div.classList.add('content');
div.style.backgroundColor = 'pink';
div.style.border = '1px solid black';
const h1 = document.createElement('h1');
h1.textContent = 'I\'m in a div';
const p = document.createElement('p');
p.textContent = 'ME TOO!';
div.appendChild(h1);
div.appendChild(p);
document.body.appendChild(div);