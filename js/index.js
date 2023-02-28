let namedInput = document.querySelector('#named');
let linkInput = document.querySelector('#link');
let popupImage = document.querySelector('.popup__image');
let popupText = document.querySelector('.popup__text');
let name = document.querySelector('.profile__name');
let job = document.querySelector('.profile__job');
let nameInput = document.querySelector('#name');
let jobInput = document.querySelector('#job');
//Добавление Дефолтных карточек
function renderDefaultCards () {
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
            imagePopup.classList.add('popup_opened-image');})
};
OpenPopupImage();
}
);};
renderDefaultCards ();
const createCard = ({name, link}) => {
    const elementCardAdd = card.querySelector('.element').cloneNode(true); 
    elementCardAdd.querySelector('.element__text').textContent = name;
    const cardImage =  elementCardAdd.querySelector('.element__image');
    cardImage.src = link; 
    cardImage.alt = name;
    cardImage.addEventListener('click', ()=>{
        document.querySelector('.popup__image').src = link; 
        document.querySelector('.popup__image').alt = name; 
        document.querySelector('.popup__text').textContent = name;
    });
    LikeElement ();
    DeleteElement ();
   return elementCardAdd;
}

const renderCard = (item) => {
    elements.prepend(item);
}


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
    item.addEventListener('click',() => {
        item.classList.toggle('element__like_active');
    }
    );
});
};
LikeElement ();


//Инициализация Попапа Просмотра картинки
function initPopupImageOpen(){
    arrayButtonOpenImage.forEach((item) => {
        console.log(item.querySelector('.element__image'));
        item.addEventListener('click', ()=>{
        document.querySelector('.popup__image').src = item.querySelector('.element__image').src;
        document.querySelector('.popup__image').alt = item.querySelector('.element__text').textContent;
        document.querySelector('.popup__text').textContent = item.querySelector('.element__text').textContent;
        imagePopup.classList.toggle('popup_opened-image');})
});};
initPopupImageOpen();


//Открытие попапов
function openPopup(popup) {
    nameInput.value = name.textContent;
    jobInput.value =  job.textContent;
    popup.classList.add('popup_opened');
};


//Закрытие Попапов редактирования
function closePopup(popup) {
    popup.classList.remove('popup_opened');
    popup.classList.remove('popup_opened-image');
};


//Присваивание значений полей ввода полям профиля
function handleFormSubmitEdit (evt) {
    evt.preventDefault();
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
    closePopup(popupEdit);
};


//Добавление новой карточки
function AddNewCard (evt) { 
    evt.preventDefault(); 
    //Создание новой карточки 
    const elementCardAddd = card.querySelector('.element').cloneNode(true); 
    elementCardAddd.querySelector('#title').textContent = named.value; 
    elementCardAddd.querySelector('#image').src = link.value; 
    closePopup(popupAdd); 
    LikeElement (); 
    elements.prepend(elementCardAddd); 
    formElementAdd.reset(); 
    //Лайк картинки 
    LikeElement (); 
    //Открытие Попапа Просмотра картинки 
    function OpenPopupImage(){ 
            elementCardAddd.querySelector('.element__popup').addEventListener('click', ()=>{ 
            document.querySelector('.popup__image').src = elementCardAddd.querySelector('.element__image').src; 
            document.querySelector('.popup__image').alt = elementCardAddd.querySelector('.element__text').textContent; 
            document.querySelector('.popup__text').textContent = elementCardAddd.querySelector('.element__text').textContent; 
            imagePopup.classList.add('popup_opened');}) 
    }; 
    OpenPopupImage(); 
    //Закрытие Попапа Просмотра Картинки 
    closePopup(imagePopup);
    //Удаление Картинки 
    DeleteElement (); 
};

//Колбеки
formElementAdd.addEventListener('submit', AddNewCard);
formElementEdit.addEventListener('submit', handleFormSubmitEdit);
buttonOpenAdded.addEventListener('click', () => openPopup(popupAdd));
buttonEdit.addEventListener('click', () =>  openPopup(popupEdit)); 
popupProfileClose.addEventListener('click', () => closePopup(popupEdit));
popupAddClose.addEventListener('click', () => closePopup(popupAdd));
popupImageClose.addEventListener('click', () => closePopup(imagePopup));