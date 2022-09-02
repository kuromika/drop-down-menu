import './style.css';

const dropDownButton = document.getElementsByClassName('drop-down-button')[0];
const optionsDiv = document.getElementsByClassName('drop-down-options')[0];


Array.from(optionsDiv.getElementsByClassName('item')).forEach(element => {
    element.addEventListener('mouseover', () => {
        dropDownButton.textContent = element.textContent;
    })
    element.addEventListener('click', () => {
        optionsDiv.classList.add('hidden');
    })
});

dropDownButton.addEventListener('click', () => {
    optionsDiv.classList.remove('hidden');
});