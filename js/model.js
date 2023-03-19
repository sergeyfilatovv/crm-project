 const requests = loadRequests();
 
 
 class Request{
    constructor(id, name, phone, email, product){
        this.id = id,
        this.name = name,
        this.phone = phone,
        this.email = email,
        this.product = product,
        this.date = new Date().toISOString(),
        this.status = "new"
    }
}

// Создаем объект, для того чтобы корректно отображать продукты
const products = {
    "course-html": "Курс по верстке",
    "course-js": "Курс по JavaScript",
    "course-php": "Курс по PHP",
    "course-wordpress": "Курс по WordPress",
    "course-vue": "Курс по VUE JS"

}
// Создаем объект, для того чтобы корректно отображать статусы
const statuses = {
    "new": "Новая",
    "inwork": "В работе",
    "complete": "Выполнена"

}

//Объект со значениями фильтров
const filter = loadFilter();
// Функция, которая смотрит есть есть ли отфильтрованные заявки в localStorage
function loadFilter(){
    let filter = {
        products: 'all',
        status: 'all'
    }
    if(localStorage.getItem('filter')){
        filter= JSON.parse(localStorage.getItem('filter'))
    }

    return filter;
}
// Функция, которая формирует фильтр по продукту и статусу
function changeFilter (prop, value){
    filter[prop] = value;
    // Сохранение фильтра в localStorage
    localStorage.setItem('filter', JSON.stringify(filter))

    return filter;
}


// Функция фильтрации заявок по продукту и статусу
function filterRequests (filter){
    let filteredRequests;

    if (filter.products !== 'all') {
        filteredRequests = requests.filter((request) => request.product === filter.products)
        
    }else{
        filteredRequests = [...requests];
    }

    if (filter.status !== 'all') {
        filteredRequests = filteredRequests.filter((request) => request.status === filter.status)
        
    }
   

    // Подготавливаем заявки и пропускаем через функцию prepareRequests
    return prepareRequests(filteredRequests);
}

// Возврат отформатированного массива 
function getRequest(){
    return filterRequests(filter)
}

// Функция, которая определяет количество новых заявок
function countNewRequests(){
    const newRequests = requests.filter((el) => el.status === "new")
    return newRequests.length
}

function addRequest(formData){
    // Определяем ID
    const id = requests.length > 0 ? requests[requests.length - 1]['id'] + 1 : 1;

    // Создаем заявку
    const request = new Request(id, formData.name.value, formData.phone.value, formData.email.value, formData.product.value )
    // Записываем в вышесозданный массив requests созданные заявки request
    requests.push(request)
    saveRequest()
    return requests;
    
    
   
}
// Функция, которая добавляет массив requests в localStorage
function saveRequest(){
    localStorage.setItem('requests', JSON.stringify(requests));
}

// Проверка наличия заявок в localStorage
function loadRequests(){
    // Делаем проверку есть ли в localStorage объекты с заявками, если да, то парсим то, что там записано и возвращаем, если нет возвращаем пустой массив 
    return localStorage.getItem('requests') ? JSON.parse(localStorage.getItem('requests')) : [];

}


// Функция форматирования даты
function prepareRequests(requests){
    return requests.map((item)=>{
        return{
            ...item,
            dateToDisplay: new Date(item.date).toLocaleDateString(),
            // Использую ключ объекта products подставляем нужное нам значение
            productName: products[item.product],
            // Использую ключ объекта statuses подставляем нужное нам значение
            statusName: statuses[item.status]
        }
    })
}


// Выбираем заявку по которой кликнули, создаем в объекте 2 свойства dateDate и dateTime
function getRequestById (id) {
    const request = requests.find((item) => item.id == id)
    request.dateDate = new Date(request.date).toLocaleDateString()
    request.dateTime = new Date(request.date).toLocaleTimeString()
    return request
}
// Обновляем отредактированные данные 
function updateRequest (formData){
    const request = getRequestById(formData.get('id'))
    request.name = formData.get('name')
    request.email = formData.get('email')
    request.phone = formData.get('phone')
    request.product = formData.get('product')
    request.status = formData.get('status')
    saveRequest()
}

function getFilter(){
    return {...filter}
}




export{addRequest, requests, getRequest, getRequestById, updateRequest, changeFilter, filterRequests, countNewRequests, getFilter}