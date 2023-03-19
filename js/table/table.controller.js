import * as view  from '../table/table.view.js'
import * as model  from '../model.js'


function init(){
    view.renderFormRequest(model.getRequest());
    setupEventListener();

    const newRequestsCount = model.countNewRequests();
    view.renderBageNew(newRequestsCount);
    const filter = model.getFilter();

    view.updateFilter(filter);

}

function setupEventListener(){
    view.elements.product.addEventListener('change', filterProducts);
    view.elements.topStatusBar.addEventListener('click', filterByStatus);
    view.elements.leftStatusLinks.forEach((link)=>{
        link.addEventListener('click', filterByStatus);
    })
    
     
}

function filterProducts(){
    const filter = model.changeFilter('products', this.value);
    console.log(filter.products)
    const filteredRequests = model.filterRequests(filter);
   
    

    view.renderFormRequest(filteredRequests);
}

function filterByStatus(e){
   const filter = model.changeFilter('status', e.target.dataset.value);
   console.log(filter)
   const filteredRequests = model.filterRequests(filter);

   view.renderFormRequest(filteredRequests);
   view.updateStatusLinks(e.target.dataset.value);
}


init()


