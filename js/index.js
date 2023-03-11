//Открытие Попапов
function openPopup(popup) {
    popup.classList.add(obj.openedPopup);
    document.addEventListener('keyup', (evt) => {
        if (evt.keyCode === escape) {
                closePopup(popup);
        };    
    });
    popups.forEach((item) => {
        item.addEventListener('click', (evt)=>{
            if (evt.currentTarget === evt.target) {
                closePopup(item);
            }
        })
    })
};


//Закрытие Попапов
function closePopup(popup) {
    popup.classList.remove(obj.openedPopup);
    document.removeEventListener('keyup', (evt) => {
        if (evt.keyCode === escape) {
                closePopup(popup);
        };    
    });
    popups.forEach((item) => {
        item.removeEventListener('click', (evt)=>{
            if (evt.currentTarget === evt.target) {
                closePopup(item);
            }
        })
    })
    if (popup == popupEdit || popup == popupAdd){
        const form = popup.querySelector(obj.formSelector);
        form.reset();
    }
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


//Создание Карточек
const createCard = ({name, link}) => {
    const elementCardAdd = card.querySelector(obj.element).cloneNode(true); 
    elementCardAdd.querySelector(obj.elementText).textContent = name;
    const cardImage =  elementCardAdd.querySelector(obj.elementImage);
    cardImage.src = link; 
    cardImage.alt = name;
    
    //Лайк Карточки
    const buttonLike = elementCardAdd.querySelector(obj.elementLike);
    buttonLike.addEventListener('click', () => {
        buttonLike.classList.toggle(obj.activeElementLike);
    });

    //Открытие Попапа Просмотра Картинки
    const buttonOpenImage = elementCardAdd.querySelector(obj.popupElement);
    buttonOpenImage.addEventListener('click', () => {
        popupImage.src = elementCardAdd.querySelector(obj.elementImage).src; 
        popupImage.alt = elementCardAdd.querySelector(obj.elementText).textContent; 
        popupText.textContent = elementCardAdd.querySelector(obj.elementText).textContent;
        openPopup(imagePopup);
    });

    //Удаление Карточки 
    const buttonDelete = elementCardAdd.querySelector(obj.elementDelete);
    buttonDelete.addEventListener('click', () => {
        const elementDelete = buttonDelete.closest(obj.element);
        elementDelete.remove();
    });
    return elementCardAdd;
};


//Добавление карточки в DOM
const addCard = (item)=> {
    elements.prepend(item);
}


//Добавление Дефолтных Карточек
const addInitialCards = initialCards.forEach((item) => {
    createCard(item);
    addCard(createCard(item));
});


//Добавление Новой Карточки
function handleFormSubmitAddNewCard (evt) {  
    evt.preventDefault(); 
    const newCard = createCard({name: namedInput.value, link: linkInput.value});
    addCard(newCard);
    buttonForm = evt.submitter;
    buttonForm.classList.add(obj.inactiveButtonClass);
    closePopup(popupAdd);
};


//Колбеки
formElementAdd.addEventListener('submit', handleFormSubmitAddNewCard);
formElementEdit.addEventListener('submit', handleFormSubmitEdit);
buttonOpenAdded.addEventListener('click', () => openPopup(popupAdd));
buttonEdit.addEventListener('click', openPopupProfile); 
popupProfileClose.addEventListener('click', () => closePopup(popupEdit));
popupAddClose.addEventListener('click', () => closePopup(popupAdd));
popupImageClose.addEventListener('click', () => closePopup(imagePopup));