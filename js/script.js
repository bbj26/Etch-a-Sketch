const divContainer = document.querySelector('#container');
const resetBtn = document.querySelector('#reset');
let gridOnOff = 1;
let randomColorOnOff = 1;

function createGrid(dim){
    let dimension = dim;
    divContainer.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;
    divContainer.style.gridTemplateRows = `repeat(${dimension}, 1fr)`;
    for (let i = 0; i < dimension*dimension; i++){
        let gridCell = document.createElement('div');
        gridCell.style.border = ".1px solid black";
        gridCell.style.margin = "0px";
        gridCell.classList.add("cell");
        divContainer.appendChild(gridCell);
    }   
    colorCell();

    resetBtn.addEventListener('click', function resetGrid() {
        let cells = divContainer.querySelectorAll('.cell');
        let input = document.querySelector('#gridDimensionInput');
        let newDim = input.value;
        cells.forEach(element => {
            element.style.setProperty('--gridColor', "white");
            element.remove();
        });
        
        createGrid(newDim);
    })
}

function colorCell(){
    divContainer.addEventListener('mouseover', (e) => {
        if (randomColorOnOff == 1) {
            let color = randomColor();
            e.target.classList.add("gridColor");
            e.target.style.setProperty('--gridColor', color);
        }
        else if (randomColorOnOff == 2) {
            let color = "blue";
            e.target.classList.add("gridColor");
            e.target.style.setProperty('--gridColor', color);
        }
        else if (randomColorOnOff == 3) {
            let color = "red";
            e.target.classList.add("gridColor");
            e.target.style.setProperty('--gridColor', color);
        }
        else if (randomColorOnOff == 4) {
            let color = "green";
            e.target.classList.add("gridColor");
            e.target.style.setProperty('--gridColor', color);
        }
        else if (randomColorOnOff == 5) {
            let color = "yellow";
            e.target.classList.add("gridColor");
            e.target.style.setProperty('--gridColor', color);
        }
      
    });
}

function colorBlue() {
    randomColorOnOff = 2;
}

function colorRed() {
    randomColorOnOff = 3;
}

function colorGreen() {
    randomColorOnOff = 4;
}

function colorYellow() {
    randomColorOnOff = 5;
}

function colorRandom() {
    randomColorOnOff = 1;
}

let buttons = document.querySelectorAll('.colorBtn');
buttons.forEach(element => {
    console.log(element.style.setProperty('--backgroundColor', element.innerText)
)});



function randomColor() {
    let hue = Math.floor(Math.random() * 250); //356);
    let saturation = Math.floor(Math.random() * 250); //80 + 20);
    let lightnes = Math.floor(Math.random() * 250);//92 + 8);
    let hslColor = "rgb(" + hue + ", " + saturation + ", " + lightnes + ")";
    return hslColor;
}



function toggleGrid() {
    let cells = document.querySelectorAll('.cell');
    if (gridOnOff == 1) {
    cells.forEach(element => {
        element.style.border = "none";
        gridOnOff = 0;
    })} else {
        cells.forEach(element => {
            element.style.border = ".1px solid black";
            gridOnOff = 1;
        })
    };

    
}



