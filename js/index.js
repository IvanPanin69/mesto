let editButton = document.querySelector('.profile__edit-button');
let popupClose = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__submit-button');
let name = document.querySelector('.profile__name');
let job = document.querySelector('.profile__job');
let nameInput = document.querySelector('.popup__input-name');
let jobInput = document.querySelector('.popup__input-job');


editButton.addEventListener('click', function (){
    popup.classList.toggle('popup__openclose');
    nameInput.value = name.textContent;
    jobInput.value = job.textContent;
});
popupClose.addEventListener('click', function (){
    popup.classList.toggle('popup__openclose');
});


formElement.addEventListener('click', handleFormSubmit); 


function handleFormSubmit (evt) {
    evt.preventDefault();
    console.log(nameInput.value);
    console.log(jobInput.value);
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
    popup.classList.toggle('popup__openclose');
};
