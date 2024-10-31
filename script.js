const loginPage = document.getElementById('loginPage');
const listPage = document.getElementById('listPage');
const itemList = document.getElementById('itemList');
const addButton = document.getElementById('addButton');
const newItemInput = document.getElementById('newItem');
const message = document.getElementById('message');

let items = ['항목 1', '항목 2', '항목 3'];

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 't8a' && password === 't88a') {
        loginPage.style.display = 'none';
        listPage.style.display = 'block';
        displayItems();
    } else {
        message.textContent = '아이디 또는 비밀번호가 잘못되었습니다.';
    }
});

function displayItems() {
    itemList.innerHTML = '';
    items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'item';
        div.textContent = item;
        itemList.appendChild(div);
    });
}

addButton.addEventListener('click', () => {
    const newItem = newItemInput.value.trim();
    if (newItem) {
        items.push(newItem);
        newItemInput.value = '';
        displayItems();
    }
});
