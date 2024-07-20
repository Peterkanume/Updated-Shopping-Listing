let shoppingList = [];
let showCheckboxes = false;

const itemInput = document.getElementById('itemInput');
const addButton = document.getElementById('addButton');
const clearButton = document.getElementById('clearButton');
const markPurchasedButton = document.getElementById('markPurchasedButton');
const shoppingListElement = document.getElementById('shoppingList');

function addItem() {
    const newItem = itemInput.value.trim();
    if (newItem) {
        shoppingList.push({ name: newItem, purchased: false });
        itemInput.value = '';
        updateList();
    }
}

function updateList() {
    shoppingListElement.innerHTML = '';
    shoppingList.forEach((item, index) => {
        const li = document.createElement('li');
        
        if (showCheckboxes) {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = item.purchased;
            checkbox.addEventListener('change', () => togglePurchased(index));
            li.appendChild(checkbox);
        }
        
        const itemText = document.createElement('span');
        itemText.textContent = item.name;
        if (item.purchased) {
            itemText.style.textDecoration = 'line-through';
        }
        li.appendChild(itemText);
        
        shoppingListElement.appendChild(li);
    });
}

function togglePurchased(index) {
    shoppingList[index].purchased = !shoppingList[index].purchased;
    updateList();
}

function clearList() {
    shoppingList = [];
    updateList();
}

function toggleCheckboxes() {
    showCheckboxes = !showCheckboxes;
    markPurchasedButton.textContent = showCheckboxes ? 'Hide Checkboxes' : 'Mark Purchased';
    updateList();
}

addButton.addEventListener('click', addItem);
clearButton.addEventListener('click', clearList);
markPurchasedButton.addEventListener('click', toggleCheckboxes);