let input = document.querySelector('.entered-list');
let addBtn = document.querySelector('.add-list');
let tasks = document.querySelector('.tasks');

// add button disabled

input.addEventListener('keyup', () => {
  if (input.value.trim() != 0) {
    addBtn.classList.add('active');
  } else {
    addBtn.classList.remove('active');
  }
});

//add item to list

addBtn.addEventListener('click', () => {
  if (input.value.trim() != 0) {
    let newItem = document.createElement('div');
    newItem.classList.add('item');
    newItem.innerHTML = ` <p>${input.value}</p>
          <div class="item-btn">
            <i class="fa-regular fa-pen-to-square"></i>
            <i class="fa-solid fa-trash"></i>
            </div>`;

    tasks.appendChild(newItem);
    input.value = '';
  } else {
    alert('Please enter a new task!!');
  }
});

// delete item

tasks.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-trash')) {
    e.target.parentElement.parentElement.remove();
  }
});

// check item

tasks.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-pen-to-square')) {
    e.target.parentElement.parentElement.classList.toggle('completed');
  }
});
