// let itemNumber;
function recalculateNumber(){
    for(let i = 0; i < items.children.length; i++){
        let itemChildren = items.children[i];
        itemNumber = itemChildren.querySelector('.item-number');

        itemNumber.textContent = i + 1;
    }
}