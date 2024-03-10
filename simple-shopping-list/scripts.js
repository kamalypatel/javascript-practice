const button = document.querySelector('#submit');

const list = document.querySelector('ul');

let i = 0;

button.addEventListener('click', () => {
    let listItem = document.getElementById('name').value;
    document.getElementById('name').value = '';
    
    const itemOnList = document.createElement('li');
    itemOnList.textContent = listItem;
    itemOnList.setAttribute('id', i);
    itemOnList.setAttribute('class', 'listItems');

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('type', 'button');
    deleteButton.setAttribute('id', i);
    deleteButton.setAttribute('class', 'listItems')
    deleteButton.textContent = 'Delete';
    i++;

    deleteButton.addEventListener('click', function() {
        itemOnList.remove();
        this.remove();
    })

    itemOnList.appendChild(deleteButton);
    list.appendChild(itemOnList);

    
});


