const buttonEdit = document.querySelector('.profile__edit-button');
let popupProfileClose = document.querySelector('.popup__close');
let popupAddClose = document.querySelector('.popup__close_add');
let popupImageClose = document.querySelector('.popup__close_image');
let popupProfile = document.querySelector('.popup');
let popupAdd = document.querySelector('.popup_add');
let formElement = document.querySelector('.popup__form');
let formElementAdd = document.querySelector('.popup__form_add');
let name = document.querySelector('.profile__name');
let job = document.querySelector('.profile__job');
let nameInput = document.querySelector('#name');
let jobInput = document.querySelector('#job');
let elements = document.querySelector('.elements');
let named = document.querySelector('#named');
let link = document.querySelector('#link');
let buttonOpenAdded = document.querySelector('.profile__add-button');
let buttonAdd = document.querySelector('.popup__submit-button_add');
let popupOfIMG = document.querySelector('.popup-image');
let popupImage = document.querySelector('.popup__image');
let popupText = document.querySelector('.popup__text');
const buttonOpenPopupImage = document.querySelectorAll('.element__popup');
const arrayButtonOpenImage = Array.from(buttonOpenPopupImage);
const card = document.querySelector('#card').content;
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


//Добавление Дефолтных карточек
function CardsDefault () {
initialCards.forEach(({name, link}) => {
    const elementCardAdd = card.querySelector('.element').cloneNode(true);
    elementCardAdd.querySelector('.element__text').textContent = name;
    elementCardAdd.querySelector('.element__image').src = link;
    elementCardAdd.querySelector('.element__image').alt = name;

    elements.prepend(elementCardAdd);

    function OpenPopupImage(){
        elementCardAdd.querySelector('.element__popup').addEventListener('click', ()=>{
        document.querySelector('.popup__image').src = elementCardAdd.querySelector('.element__image').src;
        document.querySelector('.popup__image').alt = elementCardAdd.querySelector('.element__text').textContent;
        document.querySelector('.popup__text').textContent = elementCardAdd.querySelector('.element__text').textContent;
        popupOfIMG.classList.add('popup_opened');})
};
OpenPopupImage();
}
);};
CardsDefault ();


//Удаление элемента
function DeleteElement () {
const buttonDeleteElement = document.querySelectorAll('.element__delete');
buttonDeleteElement.forEach((item) => {
    item.addEventListener('click', function () {
        const element = item.closest('.element');
        element.remove();
    }
    );
});
};
DeleteElement ();


//Лайк элемента
function LikeElement () {
const buttonLike = document.querySelectorAll('.element__like');
buttonLike.forEach((item) => {
    item.addEventListener('click', function elementLike() {
        item.classList.toggle('element__like_active');
    }
    );
});
};
LikeElement ();


//Открытие Попапа Редактирования профиля
function openPopupProfile(){
    popupProfile.classList.add('popup_opened');
    nameInput.value = name.textContent;
    jobInput.value = job.textContent;
};


//Открытие Попапа Добавления карточки
function openPopupAdd() {
    popupAdd.classList.add('popup_opened');
}


//Открытие Попапа Просмотра картинки
function OpenPopupImage(){
    arrayButtonOpenImage.forEach((item) => {
        console.log(item.querySelector('.element__image'));
        item.addEventListener('click', ()=>{
        document.querySelector('.popup__image').src = item.querySelector('.element__image').src;
        document.querySelector('.popup__image').alt = item.querySelector('.element__text').textContent;
        document.querySelector('.popup__text').textContent = item.querySelector('.element__text').textContent;
        popupOfIMG.classList.add('popup_opened');})
});};
OpenPopupImage();


//Закрытие Попапа Редактирования профиля
function closePopupProfile(){
    popupProfile.classList.remove('popup_opened');
}


//Закрытие Попапа Добавления карточки
function closePopupAdd() {
    popupAdd.classList.remove('popup_opened');
}


//Закрытие Попапа Просмотра картинки
function closePopupImage() {
    popupOfIMG.classList.remove('popup_opened');
};


//Присваивание значений полей ввода полям профиля
function handleFormSubmit (evt) {
    evt.preventDefault();
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
    closePopupProfile();
};


//Добавление новой карточки
function AddNewCard (evt) {
    evt.preventDefault();
    //Создание новой карточки
    const elementCardAddd = card.querySelector('.element').cloneNode(true);
    elementCardAddd.querySelector('#title').textContent = named.value;
    elementCardAddd.querySelector('#image').src = link.value;
    closePopupAdd();
    LikeElement ();
    elements.prepend(elementCardAddd);
    link.value = '';
    named.value = '';
    //Лайк картинки
    LikeElement ();
    //Открытие Попапа Просмотра картинки
    function OpenPopupImage(){
            elementCardAddd.querySelector('.element__popup').addEventListener('click', ()=>{
            document.querySelector('.popup__image').src = elementCardAddd.querySelector('.element__image').src;
            document.querySelector('.popup__image').alt = elementCardAddd.querySelector('.element__text').textContent;
            document.querySelector('.popup__text').textContent = elementCardAddd.querySelector('.element__text').textContent;
            popupOfIMG.classList.add('popup_opened');})
    };
    OpenPopupImage();
    //Закрытие Попапа Просмотра Картинки
    popupImageClose.addEventListener('click', ()=> 
    popupOfIMG.classList.remove('popup_opened'));
    //Удаление Картинки
    DeleteElement ();
};


//Колбеки
formElementAdd.addEventListener('submit', AddNewCard);
formElement.addEventListener('submit', handleFormSubmit);
buttonOpenAdded.addEventListener('click', openPopupAdd);
buttonEdit.addEventListener('click', openPopupProfile); 
popupProfileClose.addEventListener('click', closePopupProfile);
popupAddClose.addEventListener('click', closePopupAdd);
popupImageClose.addEventListener('click', closePopupImage);