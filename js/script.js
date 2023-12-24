
const main = document.querySelector('.root');

function createAndAppendElement(elementType, parentElement, classList) {
    const element = document.createElement(elementType);
    classList.forEach(classItem => element.classList.add(classItem));
    parentElement.appendChild(element);
    return element;
}


const aside = createAndAppendElement('aside', main, ['relative-div']);
const alertsContainer = createAndAppendElement('div', aside, ['alerts-container']);

const section = createAndAppendElement('section', main, ['flex-column', 'text-center', 'pt-5']);
createAndAppendElement('h1', section, []).innerText = 'Welcome to the cat generator!';
const input = createAndAppendElement('input', section, ['input', 'my-3']);
input.value = 0;

const buttonContainer = createAndAppendElement('div', section, []);
const buttonPlusOne = createAndAppendElement('button', buttonContainer, ['button']);
buttonPlusOne.innerText = '+'
const buttonMinusOne = createAndAppendElement('button', buttonContainer, ['button']);
buttonMinusOne.innerText = '-'
const catsContainer = createAndAppendElement('div', section, ['cats-container', 'pt-5']);


const catImages = ['cat1.png', 'cat2.png', 'cat3.png', 'cat4.png', 'cat5.png'];
const catMessages = [
    'Purrfect!',
    'Hello sir, how would you like your irish coffee to be served?',
    'Hello Hooman',
    'Grumpy cat',
    'Scary cat'
];
const catMessagesRemove = [
    'Meow you!',
    'I will take the leave, gentlemen.',
    'Why hooman?! I trusted you.',
    'Thanks',
    'That was unnecessary'
];

function addAlert(alertClass, index) {
    const newAlert = document.createElement('div')
        newAlert.classList.add('alert', 'alert-primary', alertClass)
        newAlert.innerHTML = catMessages[index]
        alertsContainer.appendChild(newAlert);
        
        setTimeout(() => {
            newAlert.style.opacity = 1;
        }, 10);

        setTimeout(() => {
            newAlert.style.opacity = 0;
            setTimeout(() => {
                alertsContainer.removeChild(newAlert);
            }, 500);
        }, 3000);

}


function addCatImage() {
    if (input.value > 0) {
        const imgIndex = Math.floor(Math.random() * catImages.length);
        const newImg = document.createElement('img');
        newImg.src = `images/${catImages[imgIndex]}`;
        newImg.className = 'cat-image'; 
        newImg.alt = 'cat-image'
        catsContainer.appendChild(newImg);
        
        addAlert('alert-custom',imgIndex)
    }
}

function removeCatImage() {
    if (catsContainer.children.length > 0) {
        catsContainer.removeChild(catsContainer.lastChild);

        const imgIndex = Math.floor(Math.random() * catMessagesRemove.length);

        addAlert('alert-custom-remove',imgIndex)
    }
}


function updateCounter (number,input) {
    input.value = number
 }

function editNumber(inputElement, change) {
    let number = Number(inputElement.value);
    number += change;
    updateCounter(number, inputElement);

    if (change > 0) {
        addCatImage();
    }
    if (change < 0) {
        removeCatImage();
    }
}
buttonPlusOne.addEventListener('click', () => editNumber(input,+1)) 

buttonMinusOne.addEventListener('click', () => editNumber(input,-1))