// document.write("<div> this is js div </div>");
// document.write("<div>  </div>");
// KISS
// DRY
// step 1
const newElement = document.createElement("h1");
// step 2
const nodeText = document.createTextNode("Welcome to my toDo list");
// step 3
//console.log(newElement);
newElement.appendChild(nodeText);
document.body.appendChild(newElement);

const arr = [];
const ul = document.querySelector('ul');
const addToList = (e) => {
    e.preventDefault();
    console.log(e);
    let userData = document.querySelector('#user-data').value;
    if (!userData === '') {
        let newLi = document.createElement('li');
        let text = document.createTextNode(userData);
        newLi.appendChild(text);
        ul.appendChild(newLi)
        document.querySelector('#user-data').value = '';
    } else {
        document.querySelector('#user-data').placeholder =
            'You need to add something here';
    }

};
document.querySelector("form").addEventListener("submit", addToList);
