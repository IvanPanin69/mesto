let buttonEdit = document.querySelector('.profile__edit-button');
let popupClose = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__form');
let name = document.querySelector('.profile__name');
let job = document.querySelector('.profile__job');
let nameInput = document.querySelector('#name');
let jobInput = document.querySelector('#job');


function openPopup(){
    popup.classList.add('popup_opened');
    nameInput.value = name.textContent;
    jobInput.value = job.textContent;
};


function closePopup(){
    popup.classList.remove('popup_opened');
}


function handleFormSubmit (evt) {
    evt.preventDefault();
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
    closePopup();
};


buttonEdit.addEventListener('click', openPopup);
formElement.addEventListener('submit', handleFormSubmit); 
popupClose.addEventListener('click', closePopup);