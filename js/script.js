const divContainer = document.querySelector('#container');
const resetBtn = document.querySelector('#reset');

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
        cells.forEach(element => {
            element.style.setProperty('--gridColor', "white");
        });
    })
}

function colorCell(){
    divContainer.addEventListener('mouseover', (e) => {
        let color = randomColor();
        e.target.classList.add("gridColor");
        e.target.style.setProperty('--gridColor', color);
    })
}

function randomColor() {
    let hue = Math.floor(Math.random() * 250); //356);
    let saturation = Math.floor(Math.random() * 250); //80 + 20);
    let lightnes = Math.floor(Math.random() * 250);//92 + 8);
    let hslColor = "rgb(" + hue + ", " + saturation + ", " + lightnes + ")";
    return hslColor;
}





