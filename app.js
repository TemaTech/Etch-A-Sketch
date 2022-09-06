// By Chernysh Artem

// Range size and currentSize part.

const rangeInp = document.querySelector('.range-inp');
const rangeTxt = document.querySelector('.size-text');
const DEFAULT_AMOUNT = '32';

rangeInp.value = DEFAULT_AMOUNT;
let currentAmount = DEFAULT_AMOUNT;

rangeInp.onchange = () => {
    rangeTxt.textContent = rangeInp.value + " x " + rangeInp.value;
    return currentAmount = rangeInp.value;
}

////////////////////////////////////////////


// buttons selection active and currentMode part.

const DEFAULT_MODE = 'color-mode';

let currentMode = DEFAULT_MODE;


const colorBtn = document.querySelector('.color-mode');
const rainbowBtn = document.querySelector('.rainbow-mode');
const eraserBtn = document.querySelector('.eraser');
const clearBtn = document.querySelector('.clear-all');
const buttons = document.querySelectorAll('.buttons');


colorBtn.classList.add('active');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        colorBtn.classList.remove('active');
        rainbowBtn.classList.remove('active');
        eraserBtn.classList.remove('active');

        e.target.classList.toggle('active');

        return currentMode = e.target.classList[0]
    })
})

////////////////////////////////////////////////////////


// Grid and reset grid part.
const container = document.querySelector(".paint-parent");

let cell;
function makeRows(rows, cols) {
container.style.setProperty('--grid-rows', rows);
container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    };
};

makeRows(currentAmount, currentAmount);

rangeInp.onclick = () => {
    container.innerHTML = '';
    makeRows(currentAmount, currentAmount);
}

///////////////////////////////////////////////////////


// Saving which color is using.

const colorInp = document.querySelector('.color-inp');

const DEFAULT_COLOR = '#004CFF';
let currentColor = DEFAULT_COLOR;

colorInp.onchange = () => {
    return currentColor = colorInp.value;
}

////////////////////////////////////////////////////////


// Painting.

function paint(e) {
    if (currentMode === 'color-mode') {
        e.target.style.backgroundColor = currentColor;
    } else if (currentMode === 'rainbow-mode') {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    } else if (currentMode === 'eraser') {
        e.target.style.backgroundColor = 'white';
    }
}

container.addEventListener('mouseover', paint);


/////////////////////////////////////////////////////////


// Clear All

clearBtn.onclick = () => {
    container.innerHTML = '';
    makeRows(currentAmount, currentAmount);
}

///////////////////////////////
