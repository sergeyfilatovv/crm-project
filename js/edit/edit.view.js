// Получаем элементы DOM
const elements = {
    form: document.querySelector('#form'),
    number: document.querySelector('#number'),
    id: document.querySelector('#id'),
    date: document.querySelector('#date'),
    product: document.querySelector('#product'),
    name: document.querySelector('#name'),
    email: document.querySelector('#email'),
    phone: document.querySelector('#phone'),
    status: document.querySelector('#status'),
    

}

// Рендерим данные  из выбранной заявки 
function renderRequestEdit(request){
    elements.id.value = request.id;
    elements.number.innerText = request.id;
    elements.date.innerText = `${request.dateDate}, ${request.dateTime}`;
    elements.product.value = request.product;
    elements.name.value = request.name;
    elements.email.value = request.email;
    elements.phone.value = request.phone;
    elements.status.value = request.status;

}
// создаем новый объект в который записываем свойства формы
function getFormInput(){
    return new FormData(elements.form)
}



export{elements, renderRequestEdit, getFormInput}

