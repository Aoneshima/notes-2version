let items = document.querySelector('.items');
let plusEvent = document.querySelector('.header-plus');
// let itemNumber;

plusEvent.addEventListener('click', function(){
    itemNumber = items.children.length + 1;

    items.insertAdjacentHTML('beforeend', `<div class="item">
                    <div class="item-number">${itemNumber}</div>
                    <textarea name="" id="" class="textArea"></textarea>
                    <button class="delete" data-delete="">Удалить</button>
                </div>`);
})