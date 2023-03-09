const buttonEdit = document.querySelector('.profile__edit-button');
const popupProfileClose = document.querySelector('.popup__close_edit');
const popupAddClose = document.querySelector('.popup__close_add');
const popupImageClose = document.querySelector('.popup__close_image');
const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const formElementEdit = document.querySelector('.popup__form_edit');
const formElementAdd = document.querySelector('.popup__form_add');
const elements = document.querySelector('.elements');
const buttonOpenAdded = document.querySelector('.profile__add-button');
const imagePopup = document.querySelector('.popup_image');
const popup = document.querySelectorAll('.popup');
const card = document.querySelector('#card').content;
const namedInput = document.querySelector('#named');
const linkInput = document.querySelector('#link');
const popupImage = document.querySelector('.popup__image');
const popupText = document.querySelector('.popup__text');
const name = document.querySelector('.profile__name');
const job = document.querySelector('.profile__job');
const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#job');
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    },
]; 