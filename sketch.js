
const container = document.querySelector("#container");
const btn = document.querySelector("button");

let numberOfGrid = 100;
let opacity = 0;
let hue = 0; 


function createSingleGrid()
{   
    // ensures the overall grid size of 960px no mannter the grid numbers
    let gridSize = 960/numberOfGrid +"px";

    const singleGrid = document.createElement("div");
    singleGrid.classList.add("singleGrid");
    singleGrid.style.width = gridSize;
    singleGrid.style.height = gridSize;
    
    container.appendChild(singleGrid);

    //this handles the behaviour of the grid 
    gridAction(singleGrid);
    
    
    
}

function createGrid(gridNum){

    /// creates whole set of grids using nested loop
    for(let i =0; i < numberOfGrid; i ++){

        for(let j = 0; j <numberOfGrid; j++){

            createSingleGrid()
        }
    }
}

function gridAction(grid){

    grid.addEventListener("mouseover",(event)=>{

        // console.log("click");
        event.target.style.background="cyan";
        //changes hue and opacity on every mouseover event
        event.target.style.filter = `hue-rotate(${hue}deg)`;
        event.target.style.opacity= opacity + "%";
        opacity += 10;


        //somewhat randomise the hue value
        hue += Math.floor((Math.random() * 30));


        if(opacity ==100){

            opacity =0; 
        }

        if(hue > 360)
        {
            hue = 0;
        }

    })    
    
}


function buttonAction(button){

    button.addEventListener("click",(e) =>{

        //preventing grid size bigger than 100 grid wide
        do {
            
            numberOfGrid= prompt("grid size:(need to be less than 100)");

        } while (numberOfGrid >100);
        

        //selecting all the grids to delete them. 
        const grids = document.querySelectorAll(".singleGrid")
        //delete all the currunt grids
        grids.forEach((button)=>{

            button.remove();
        })

        //recreate the grid 
        createGrid(numberOfGrid);
    })
}


createGrid(numberOfGrid);
buttonAction(btn);

    