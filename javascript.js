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

const btn = document.querySelector('#btn');
btn.onclick = () => alert('Hello World (version 2)');

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
  alert('Hello World (version 3)');
});

function alertFunction() {
  alert('YAY! YOU DID IT!');
}

const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', alertFunction);

const btn4 = document.querySelector('#btn4');
btn4.addEventListener('click', function (e) {
    console.log(e);
});

btn4.addEventListener('click', function (e) {
    console.log(e.target);
});

btn4.addEventListener('mouseover', function (e) {
    e.target.style.background = 'blue';
});

const buttons = document.querySelectorAll('#container2 button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    });
});