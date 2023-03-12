const validationList = ({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
  });

//Отображение ошибки при введении данных
const showInputError = (formSelector, inputSelector, errorMessage, validationParameters) => {
    const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
    inputSelector.classList.add(validationParameters.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validationParameters.errorClass);
};


//Скрытие ошибки
const hideInputError = (formSelector, inputSelector, validationParameters) => {
    const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
    inputSelector.classList.remove(validationParameters.inputErrorClass);
    errorElement.classList.remove(validationParameters.errorClass);
    errorElement.textContent = '';
}; 


//Блокировка кнопки отправки
function disableSubmitButton(form) {
    const buttonSubmitter = form.querySelector(selectors.submitButtonSelector);
    buttonSubmitter.classList.add(selectors.inactiveButtonClass);
}


//Проверка поля ввода формы на валидность
const isValid = (formSelector, inputSelector, validationParameters) => {
    if (!inputSelector.validity.valid) {
        showInputError(formSelector, inputSelector, inputSelector.validationMessage, validationParameters);
    } else {
        hideInputError(formSelector, inputSelector, validationParameters);
    }
}; 


//Установка обработчика события 'input' полям ввода
const setEventListeners = (formSelector, validationParameters) => {
    const inputList = Array.from(formSelector.querySelectorAll(validationParameters.inputSelector));
    const buttonElement = formSelector.querySelector(validationParameters.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, validationParameters);
    inputList.forEach((inputSelector) => {
        inputSelector.addEventListener('input', () => {
        isValid(formSelector, inputSelector, validationParameters);
        toggleButtonState(inputList, buttonElement, validationParameters);
        });
    });
}; 


//Проверка полей ввода формы на валидность
const hasInvalidInput = (inputList) => {
    return inputList.some((inputSelector) => {
        return !inputSelector.validity.valid;
    })
}; 


//Изменение состояния кнопки отправки формы 
const toggleButtonState = (inputList, buttonElement, validationParameters) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(validationParameters.inactiveButtonClass);
    } else {
        buttonElement.classList.remove(validationParameters.inactiveButtonClass);
    }
}; 

//Установка функции 'setEventListeners' на все формы проекта и запуск валидации
function enableValidation (validationParameters) {
    const formList = Array.from(document.querySelectorAll(validationParameters.formSelector));
        formList.forEach((formSelector) => {
            setEventListeners(formSelector, validationParameters);
        });
};


enableValidation(validationList);