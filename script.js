// // 3.1 - Un petit peu de programmation
// // factorial
// function fact(n) {
//   if (n === 0) {
//     return 1;
//   } else {
//     return n * fact(n - 1);
//   }
// }

// console.log(fact(6));

// // apply a function to a table
// function applique(f, tab) {
//   return tab.map(f);
// }

// console.log(applique(fact, [1, 2, 3, 4, 5, 6]));
// console.log(applique((n) => (n + 1), [1, 2, 3, 4, 5, 6]));

// 3.2 - Un peu de dynamique dans la page
// const definition
const msgs = [];

function addMessage(pseudo, date, msg) {
  msgs.push({
    "pseudo": pseudo,
    "date": date.toLocaleString('fr-FR'),
    "msg": msg
  })
}

addMessage("Alice", new Date(2026, 3, 6, 14, 0), "Hello World")
addMessage("Bob", new Date(2026, 3, 6, 14, 30), "Blah Blah")
addMessage("Charles", new Date(2026, 3, 6, 15, 0), "I love cats")
addMessage("General Kenobi", new Date(2026, 3, 6, 15, 30), "Hello There")

// function to update the messages
function update(tab) {
  const msgsList = tab.map((m) => (`
    <li>
      <div class="message-header">
        <span class="pseudo">${m.pseudo}</span>
        <span class="date">${m.date}</span>
      </div>
      <div class="message-content">
        ${m.msg}
      </div>
    </li>
  `)).join('');
  document.getElementById("messages-list").innerHTML = msgsList;
}
update(msgs); // update on loading

// function to send a message
function sendMessage(event) {
  // avoid page reload
  event.preventDefault();

  // get the message
  const messageTextarea = document.getElementById("text-message")

  const msg = messageTextarea.value;
  var now = new Date()
  const pseudo = "Anonymous";

  // clear the textarea
  messageTextarea.value = ''

  // if there is a message, add it to the list and update
  if (msg !== '') {
    addMessage(pseudo, now, msg);
    update(msgs);
  }
}

// send message on send button click
document.getElementById("send-message-form").addEventListener('submit', (event) => { sendMessage(event) })

// send message on enter key press
document.getElementById("text-message").addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    sendMessage(event);
  }
})

// refresh button
document.getElementById("refresh-button").addEventListener('click', () => { update(msgs) })

// dark mode
let isDarkMode = false;
const toggleModeButton = document.getElementById("toggle-mode");

toggleModeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  isDarkMode = !isDarkMode;
});