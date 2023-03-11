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
const popups = document.querySelectorAll('.popup');
const card = document.querySelector('#card').content;
const namedInput = document.querySelector('#named');
const linkInput = document.querySelector('#link');
const popupImage = document.querySelector('.popup__image');
const popupText = document.querySelector('.popup__text');
const name = document.querySelector('.profile__name');
const job = document.querySelector('.profile__job');
const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#job');
const escape = 27;
const selectors = {
  element: '.element',
  elementText: '.element__text',
  elementImage: '.element__image',
  elementLike: '.element__like',
  popupElement: '.element__popup',
  elementDelete: '.element__delete',
  openedPopup: 'popup_opened',
  formSelector: '.popup__form',
  activeElementLike: 'element__like_active'
};
const validationParameters = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};
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