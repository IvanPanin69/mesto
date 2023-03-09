//Открытие Попапов
function openPopup(popup) {
    popup.classList.add('popup_opened');
};


//Закрытие Попапов
function closePopup(popup) {
    popup.classList.remove('popup_opened');
};


//Присваивание полей ввода полям профиля
function openPopupProfile(){ 
    openPopup(popupEdit);
    nameInput.value = name.textContent; 
    jobInput.value = job.textContent; 
};


//Присваивание Значений Полей Ввода Полям Профиля
function handleFormSubmitEdit (evt) {
    evt.preventDefault();
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
    closePopup(popupEdit);
};


//Добавление Карточек
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
    //Добавление элемента
    elements.prepend(elementCardAdd);

    closePopup(popupAdd);
    //Лайк Карточки
    const buttonLike = elementCardAdd.querySelector('.element__like');
    buttonLike.addEventListener('click', () => {
        buttonLike.classList.toggle('element__like_active');
    });

    //Открытие Попапа Просмотра Картинки
    const buttonOpenImage = elementCardAdd.querySelector('.element__popup');
    buttonOpenImage.addEventListener('click', () => {
        document.querySelector('.popup__image').src = elementCardAdd.querySelector('.element__image').src; 
        document.querySelector('.popup__image').alt = elementCardAdd.querySelector('.element__text').textContent; 
        document.querySelector('.popup__text').textContent = elementCardAdd.querySelector('.element__text').textContent;
        imagePopup.classList.toggle('popup_opened');
    });

    //Удаление Карточки 
    const buttonDelete = elementCardAdd.querySelector('.element__delete');
    buttonDelete.addEventListener('click', () => {
        const elementDelete = buttonDelete.closest('.element');
        elementDelete.remove();
    });
    return elementCardAdd;
};

//Добавление Дефолтных Карточек
const addInitialCards = initialCards.forEach((item) => {
    createCard(item);
});


//Добавление Новой Карточки
function addNewCard (evt) {  
    evt.preventDefault(); 
    const elements = document.querySelector('.elements');
    const newCard = createCard({name: namedInput.value, link: linkInput.value});
    formElementAdd.reset();
};


//Колбеки
formElementAdd.addEventListener('submit', addNewCard);
formElementEdit.addEventListener('submit', handleFormSubmitEdit);
buttonOpenAdded.addEventListener('click', () => openPopup(popupAdd));
buttonEdit.addEventListener('click', openPopupProfile); 
popupProfileClose.addEventListener('click', () => closePopup(popupEdit));
popupAddClose.addEventListener('click', () => closePopup(popupAdd));
popupImageClose.addEventListener('click', () => closePopup(imagePopup));


//Закрытие Попапов нажатием на 'Esc'
document.addEventListener('keyup', (evt) => {
    if (evt.keyCode === 27) {
        popup.forEach((item)=>{
            item.classList.remove('popup_opened')
        });
    };    
});


//Закрытие Попапов нажатием на оверлей
popup.forEach((item) => {
    item.addEventListener('click', (evt)=>{
        if (evt.currentTarget === evt.target) {
            item.classList.remove('popup_opened');
        }
    })
})
