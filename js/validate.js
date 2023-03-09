//Отображение ошибки при введении данных
const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('popup__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__input-error_active');
};


//Скрытие ошибки
const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('popup__input_type_error');
    errorElement.classList.remove('popup__input-error_active');
    errorElement.textContent = '';
}; 


//Проверка поля ввода формы на валидность
const isValid = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
}; 


//Установка обработчика события 'input' полям ввода
const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    const buttonElement = formElement.querySelector('.popup__submit-button');
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
        isValid(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
        });
    });
}; 


//Проверка полей ввода формы на валидность
const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
}; 


//Изменение состояния кнопки отправки формы 
const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add('popup__submit-button_disabled');
    } else {
        buttonElement.classList.remove('popup__submit-button_disabled');
    }
}; 


//Установка функции 'setEventListeners' на все формы проекта
const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
        formList.forEach((formElement) => {
            setEventListeners(formElement);
        });
};
  

enableValidation(); 