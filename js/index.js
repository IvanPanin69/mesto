//Открытие Попапов
function openPopup(popup) {
    nameInput.value = name.textContent;
    jobInput.value =  job.textContent;
    popup.classList.add('popup_opened');
    popup.classList.add('popup_opened-image');
};


//Закрытие Попапов Редактирования
function closePopup(popup) {
    popup.classList.remove('popup_opened');
    popup.classList.remove('popup_opened-image');
};


//Присваивание Значений Полей Ввода Полям Профиля
function handleFormSubmitEdit (evt) {
    evt.preventDefault();
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
    closePopup(popupEdit);
};


//Добавление Карточек
const elementRender = ({name,link}) =>{
    const elementCardAdd = card.querySelector('.element').cloneNode(true); 
    elementCardAdd.querySelector('.element__text').textContent = `${name}`;
    elementCardAdd.querySelector('.element__image').src = `${link}`;
    elementCardAdd.querySelector('.element__image').alt = `${name}`;

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
        imagePopup.classList.toggle('popup_opened-image');
    });

    //Удаление Карточки 
    const buttonDelete = elementCardAdd.querySelector('.element__delete');
    buttonDelete.addEventListener('click', () => {
        const elementDelete = buttonDelete.closest('.element');
        elementDelete.remove();
    });
};


//Добавление Дефолтных Карточек
const addInitialCards = initialCards.forEach((item) => {
    elementRender(item);
});


//Добавление Новой Карточки
function addNewCard (evt) {  
    evt.preventDefault(); 
    const elements = document.querySelector('.elements');
    const newCard = elementRender({name: namedInput.value, link: linkInput.value});
    formElementAdd.reset();
};


//Колбеки
formElementAdd.addEventListener('submit', addNewCard);
formElementEdit.addEventListener('submit', handleFormSubmitEdit);
buttonOpenAdded.addEventListener('click', () => openPopup(popupAdd));
buttonEdit.addEventListener('click', () =>  openPopup(popupEdit)); 
popupProfileClose.addEventListener('click', () => closePopup(popupEdit));
popupAddClose.addEventListener('click', () => closePopup(popupAdd));
popupImageClose.addEventListener('click', () => closePopup(imagePopup));