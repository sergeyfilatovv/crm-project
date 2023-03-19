import * as model  from '../model.js'
import * as view  from './edit.view.js'

function init(){
    const id = getRequestId()
    const request = model.getRequestById(id)
    view.renderRequestEdit(request);
    setupEventListener()
    
}
function setupEventListener(){
    view.elements.form.addEventListener('submit', function(e){
        e.preventDefault();
        const formData = view.getFormInput()
        model.updateRequest(formData)
        window.location = './table.html'
        
    })
}



// Функция, которая получает id  заявки из адресной строки
function getRequestId(){
    const params = new URLSearchParams(window.location.search)
     return params.get('id')
    
}

init();