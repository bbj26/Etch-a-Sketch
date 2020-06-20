const divContainer = document.querySelector('#container');



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
}
function colorCell(){
    divContainer.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = "blue";
    })
}