// Отправка формы в Wats App
const form = document.querySelector('.form');
const number = '79788128290';

function sendToWhatsapp(text, num, email, message, phone) {

  text = "My name: " + encodeURIComponent(text) + "." + "%0a";
  num = "Number: " + encodeURIComponent(num) + "." + "%0a";
  email = "Email: " + encodeURIComponent(email) + "." + "%0a";
  message = "Message: " + encodeURIComponent(message);

  let url = `https://web.whatsapp.com/send?phone=${phone}&text=${text}${num}${email}${message}&source=&data=`;

  window.open(url);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const text = e.currentTarget.querySelector('.name').value;
  const num = e.currentTarget.querySelector('.number').value;
  const email = e.currentTarget.querySelector('.email').value;
  const message = e.currentTarget.querySelector('.message').value;

  sendToWhatsapp(text, num, email, message, number);
});
