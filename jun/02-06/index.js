//step 1
const newElement = document.createComment('h1');

const nodeText = 'Welcome to my todo'
newElement.appendChild(nodeText);
document.body.appendChild(newElement);
const arr = [];
const addToList = (e) => {
    e.preventDefault();
    console.log(e)
}
document.querySelector('form').addEventListener('submit', addToList)