let modal = document.querySelector('.modal');
let searchButton = document.querySelector('.search-button');
let buttonClose = document.querySelector('.closed-modal');

searchButton.addEventListener('click', function (evt) {
evt.preventDefault();
modal.classList.add('modal-open');
});

buttonClose.addEventListener('click', function () {
modal.classList.remove('modal-open');
});

document.addEventListener('keydown', function (evt) {
if (evt.keyCode === 27) {
modal.classList.remove('modal-open');
}
});
