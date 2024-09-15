let deleteItem = document.querySelector('.delete');

document.body.addEventListener('click', function(event){
    if(event.target.hasAttribute('data-delete')){
        console.log('deleteItem')

        const eventItemDelete = event.target.closest('.item');
        eventItemDelete.remove();

        recalculateNumber()
    }
})

