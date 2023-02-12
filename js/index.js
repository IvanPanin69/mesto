let buttonEdit = document.querySelector('.profile__edit-button');
let popupClose = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__submit-button');
let name = document.querySelector('.profile__name');
let job = document.querySelector('.profile__job');
let nameInput = document.querySelector('#name');
let jobInput = document.querySelector('#job');


function openPopup(){
    popup.classList.add('popup_submit');
    nameInput.value = name.textContent;
    jobInput.value = job.textContent;
};


function closePopup(){
    popup.classList.remove('popup_submit');
}


function handleFormSubmit (evt) {
    evt.preventDefault();
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
    popup.classList.remove('popup_submit');
};


buttonEdit.addEventListener('click', openPopup);
formElement.addEventListener('click', handleFormSubmit); 
popupClose.addEventListener('click', closePopup);