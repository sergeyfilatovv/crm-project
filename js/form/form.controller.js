import * as model from '../model.js'
import getTestData from './form.test-data.js'
import * as view  from './form.view.js'




function setupEventListener(){
    // Получаем элементы из view
    const elementsDOM = view.getElementsDOM();
    // Запускаем обработчик событий по submit
    elementsDOM.form.addEventListener('submit', function(e){
        e.preventDefault();
        model.addRequest(elementsDOM);
        view.clearForm();
        renderTestData();


    })
}

setupEventListener();


function renderTestData(){
    // Получение данных из модели
    const randomData = getTestData();
    // Выводим полученные данные в форму на отображение
    view.renderTestRequest(randomData);
    
}

renderTestData()

