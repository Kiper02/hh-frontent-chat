import { data }  from './data.js';

const users = document.getElementById('list_users');
const messages = document.getElementById('list_messages')


data.users.map(item => {
    let usersItem = document.createElement("li");
    usersItem.textContent = item.name;
    users.appendChild(usersItem);
})

data.messages.map(item => {
    let messagesItem = document.createElement("li");
    messagesItem.textContent = item.message;
    messages.appendChild(messagesItem);
})