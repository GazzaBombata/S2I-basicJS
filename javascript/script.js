

const buttonPlusOne = document.getElementById('plus-one')
const buttonMinusOne = document.getElementById('minus-one')
const input = document.getElementById('number-input')

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
const catsContainer = document.getElementById('cats-container');
const alertsContainer = document.getElementById('alerts-container');

function addCatImage() {
    if (input.value > 0) {
        const imgIndex = Math.floor(Math.random() * catImages.length);
        const newImg = document.createElement('img');
        newImg.src = `images/${catImages[imgIndex]}`;
        newImg.className = 'cat-image'; 
        catsContainer.appendChild(newImg);
        
        const newAlert = document.createElement('div')
        newAlert.classList.add('alert', 'alert-primary', 'alert-custom')
        newAlert.innerHTML = catMessages[imgIndex]
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
}

function removeCatImage() {
    if (catsContainer.children.length > 0) {
        catsContainer.removeChild(catsContainer.lastChild);

        const imgIndex = Math.floor(Math.random() * catMessagesRemove.length);

        const newAlert = document.createElement('div')
        newAlert.classList.add('alert', 'alert-primary', 'alert-custom-remove')
        newAlert.innerHTML = catMessagesRemove[imgIndex];
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