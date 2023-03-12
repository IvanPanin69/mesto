//Закртыие Попапов по средству нажатия на 'Esc'
function closeByEsc(evt)  {
    if (evt.keyCode === escape) {
            popups.forEach((popup) => {
                closePopup(popup);
            })
    };
}


//Открытие Попапов
function openPopup(popup) {
    popup.classList.add(selectors.openedPopup);
    document.addEventListener('keyup', closeByEsc);
};


//Закрытие Попапов
function closePopup(popup) {
    popup.classList.remove(selectors.openedPopup);
    document.removeEventListener('keyup', closeByEsc);
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
    disableSubmitButton(formElementEdit);
    formElementEdit.reset();
    closePopup(popupEdit);
};


//Создание Карточек
const createCard = ({name, link}) => {
    const elementCardAdd = card.querySelector(selectors.element).cloneNode(true); 
    elementCardAdd.querySelector(selectors.elementText).textContent = name;
    const cardImage =  elementCardAdd.querySelector(selectors.elementImage);
    cardImage.src = link; 
    cardImage.alt = name;
    
    //Лайк Карточки
    const buttonLike = elementCardAdd.querySelector(selectors.elementLike);
    buttonLike.addEventListener('click', () => {
        buttonLike.classList.toggle(selectors.activeElementLike);
    });

    //Открытие Попапа Просмотра Картинки
    const buttonOpenImage = elementCardAdd.querySelector(selectors.popupElement);
    buttonOpenImage.addEventListener('click', () => {
        popupImage.src = elementCardAdd.querySelector(selectors.elementImage).src; 
        popupImage.alt = elementCardAdd.querySelector(selectors.elementText).textContent; 
        popupText.textContent = elementCardAdd.querySelector(selectors.elementText).textContent;
        openPopup(imagePopup);
    });

    //Удаление Карточки 
    const buttonDelete = elementCardAdd.querySelector(selectors.elementDelete);
    buttonDelete.addEventListener('click', () => {
        const elementDelete = buttonDelete.closest(selectors.element);
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
    disableSubmitButton(formElementAdd);
    formElementAdd.reset();
    closePopup(popupAdd);
};


//Колбеки
formElementAdd.addEventListener('submit', handleFormSubmitAddNewCard);
formElementEdit.addEventListener('submit', handleFormSubmitEdit);
buttonOpenAdded.addEventListener('click', () => {
    openPopup(popupAdd);
    const form = popupAdd.querySelector(selectors.formSelector); 
    disableSubmitButton(popupAdd); 
    form.reset();
});
buttonEdit.addEventListener('click', () => {
    const form = popupEdit.querySelector(selectors.formSelector); 
    disableSubmitButton(popupEdit); 
    form.reset();
    openPopupProfile();
}); 
popupProfileClose.addEventListener('click', () => closePopup(popupEdit));
popupAddClose.addEventListener('click', () => closePopup(popupAdd));
popupImageClose.addEventListener('click', () => closePopup(imagePopup));
popups.forEach((item) => {
    item.addEventListener('click', (evt)=>{
        if (evt.currentTarget === evt.target) {
            closePopup(item);
        }
    })
})