const button = document.getElementById('myButton');
const input = document.getElementById('myInput');
button.addEventListener('click', function () {
  button.textContent = input.value;
});

const img = document.getElementById('myImage');
const changeImgBtn = document.getElementById('changeImgBtn');
changeImgBtn.addEventListener('click', function () {
  img.setAttribute('src', 'https://picsum.photos/seed/forest/200/100');
});

const link = document.getElementById('myLink');
const img3 = document.getElementById('myImage3');
const updateBtn = document.getElementById('updateBtn');
updateBtn.addEventListener('click', function () {
  link.setAttribute('href', 'https://developer.mozilla.org');
  link.textContent = 'developer.mozilla.org';
  img3.setAttribute('alt', 'Логотип MDN Web Docs');
});

const list = document.getElementById('myList');
const changeListBtn = document.getElementById('changeListBtn');
changeListBtn.addEventListener('click', function () {
  const firstItem = list.firstElementChild;
  firstItem.textContent = 'Новий перший елемент';
});