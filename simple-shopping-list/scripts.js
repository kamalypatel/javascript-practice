const button = document.querySelector('#submit');

const list = document.querySelector('ul')

let i = 0

button.addEventListener('click', () => {
    let listItem = document.getElementById('name').value;
    
    const itemOne = document.createElement('li')
    itemOne.textContent = listItem
    itemOne.setAttribute('id', i)
    itemOne.setAttribute('class', 'listItems')

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('type', 'button')
    deleteButton.setAttribute('id', i)
    deleteButton.setAttribute('class', 'listItems')
    deleteButton.textContent = 'Delete'
    i++

    deleteButton.addEventListener('click', function() {
        itemOne.remove();
        this.remove();
    })

    itemOne.appendChild(deleteButton)
    list.appendChild(itemOne)

    
});


