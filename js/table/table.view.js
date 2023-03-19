// Получаем элементы DOM
const elements = {
    table: document.querySelector("#tbody"),
    product: document.querySelector("#productSelect"),
    topStatusBar: document.querySelector("#topStatusBar"),
    leftStatusLinks: document.querySelectorAll("[data-role='left-status']"),
    leftPanelNav: document.querySelector(".left-panel__navigation"),
    badgeNew: document.querySelector("#badge-new")
    
}

// Функция, которая рендерит собранные данные из полей формы в таблицу
function renderFormRequest(objRequests){
    // Чистим таблицу для корректной работы фильтра
    elements.table.innerHTML = '';
    // Создаем объект, для того чтобы корректно отображать декоративный вид статусов
    const badges = {
        new: "badge-danger",
        inwork: "badge-warning",
        complete: "badge-success"
    }
// Обходим каждую заявку и рендерим полученные данные из модели
    objRequests.forEach(function(item){
        // Формируем HTML разметку
        const html = `  <tr>
                            <th scope="row">${item.id}</th>
                            <td>${item.dateToDisplay}</td>
                            <td>${item.productName}</td>
                            <td>${item.name}</td>
                            <td>${item.email}</td>
                            <td>${item.phone}</td>
                            <td>
                                <div class="badge badge-pill ${badges[item.status]}">${item.statusName}</div>
                            </td>
                            <td>
                                <a id="table__button" href="edit.html?id=${item.id}">Редактировать</a>
                            </td>
                        </tr>` 
        // С помощью метода insertAdjacentHTML вставляем HTML разметку в конец таблицы
        elements.table.insertAdjacentHTML("beforeend", html);
    })       
}
// Обновляем активный класс у topstatusBar и leftSaidBar
function updateStatusLinks(value){
    // Обновляем активный класс у topstatusBar
    elements.topStatusBar.querySelectorAll('a').forEach((link)=> link.classList.remove('active'));
    elements.topStatusBar.querySelector(`a[data-value="${value}"]`).classList.add('active');
    // Обновляем активный класс у leftSaidBar
    elements.leftStatusLinks.forEach((link)=> link.classList.remove('active'));
    elements.leftPanelNav.querySelector(`a[data-value="${value}"]`).classList.add('active');
    
}
// Отображаем количество новых заявок в leftSaidBar на бейдже
function renderBageNew(count){
    elements.badgeNew.innerText = `${count}`;
    // Проверяем, если приходит ноль мы скрываем этот бейдж с количеством новых заявок, иначе показываем
    count === 0 ? elements.badgeNew.classList.add("none") : elements.badgeNew.classList.remove("none");
}

function updateFilter(filter){
    // select products
    elements.product.value = filter.products;

    // top statusBar
    elements.topStatusBar.querySelectorAll('a').forEach((link)=> link.classList.remove('active'));
    elements.topStatusBar.querySelector(`a[data-value="${filter.status}"]`).classList.add('active');

    // left saidbar
    elements.leftStatusLinks.forEach((link)=> link.classList.remove('active'));
    elements.leftPanelNav.querySelector(`a[data-value="${filter.status}"]`).classList.add('active');
}




export{elements, renderFormRequest, updateStatusLinks, renderBageNew, updateFilter}