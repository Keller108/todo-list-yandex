const TODO_LIST = [
    { title: 'Съесть печеньку 🍪' },
    { title: 'Изучить React ⚛️' },
    { title: 'Полить цветы 🌸' },
    { title: 'Сделать свой сайт 👨‍💻' },
    { title: 'Погулять в парке 🌳' },
];

const container = document.querySelector('.todo__list');
const todoForm = document.querySelector('.todo__form');

function createTaskMarkUp(item) {
    const markUp = `
		<li class="todo__item task">
			<div class="task__info">
				<p class="task__name"></p>
			</div>
			<div class="task__controls">
				<button class="task__btn task__btn_copy" type="button"><img src="./images/duplicate-icon.svg" width="25" height="25" alt="Копировать"></button>
				<button class="task__btn task__btn_delete" type="button"><img src="./images/delete-icon.svg" width="18" height="17" alt="Удалить"></button>
			</div>
		</li>
	`;

    const tempContainer = document.createElement('div');
    tempContainer.insertAdjacentHTML('afterbegin', markUp);

    const newTaskNode = tempContainer.firstElementChild;
    newTaskNode.querySelector('.task__name').textContent = item.title;

    return newTaskNode;
}



function renderList() {
    const result = TODO_LIST.map(createTaskMarkUp)

    container.append(...result);
}

function addTaskForListener() {

}

function addTaskForListener(evt) {
    evt.preventDefault();
    const input = document.querySelector('.todo__input');
    const inputTitle = input.value;

    const newTask = createTaskMarkUp({ title: inputTitle });
    container.prepend(newTask);

    input.value = '';
}

renderList();
todoForm.addEventListener('submit', addTaskForListener);