//Отображение ошибки при введении данных
const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(validationParameters.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validationParameters.errorClass);
};


//Скрытие ошибки
const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(validationParameters.inputErrorClass);
    errorElement.classList.remove(validationParameters.errorClass);
    errorElement.textContent = '';
}; 


//Блокировка кнопки отправки
function disableSubmitButton(form) {
    const buttonSubmitter = form.querySelector(validationParameters.submitButtonSelector);
    buttonSubmitter.classList.add(validationParameters.inactiveButtonClass);
}


//Проверка поля ввода формы на валидность
const isValid = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
}; 


//Установка обработчика события 'input' полям ввода
const setEventListeners = (formElement, validationParameters) => {
    const inputList = Array.from(formElement.querySelectorAll(validationParameters.inputSelector));
    const buttonElement = formElement.querySelector(validationParameters.submitButtonSelector);
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
        buttonElement.classList.add(validationParameters.inactiveButtonClass);
    } else {
        buttonElement.classList.remove(validationParameters.inactiveButtonClass);
    }
}; 

//Установка функции 'setEventListeners' на все формы проекта и запуск валидации
const enableValidation = (validationParameters) => {
    const formList = Array.from(document.querySelectorAll(validationParameters.formSelector));
        formList.forEach((formElement) => {
            setEventListeners(formElement, validationParameters);
        });
};
enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
  });