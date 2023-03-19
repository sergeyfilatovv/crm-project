// Получаем элементы DOM
const elements = {
    form: document.querySelector("#form"),
    name: document.querySelector("#name"),
    phone: document.querySelector("#phone"),
    email: document.querySelector("#email"),
    product: document.querySelector("#product"),
}
// Запускаем функцию, которая отображает тестовые данные
function renderTestRequest(testobj){
    elements.name.value = testobj.name;
    elements.phone.value = testobj.phone;
    elements.email.value = testobj.email;
    elements.product.value = testobj.product
    
}
// Функция которая возвращает объект elements 
function getElementsDOM(){
    return elements;
}
// Функция очистки полей формы после добавления заявки
function clearForm(){
    elements.form.reset()
}







export{elements, renderTestRequest, getElementsDOM,clearForm }