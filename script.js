
let color = "yellow";




const main = document.querySelector("main");
const resetButton = document.querySelector(".reset");
const colorButtons = document.querySelectorAll(".color");
// const slider = document.querySelector(".sliderInput");
const slider = document.getElementById("myRange");
const width = 350;

let numOfCubes = Number(slider.value);


gridCreate(numOfCubes);


slider.oninput = function(){
    removeGrid();
    numOfCubes = Number(slider.value);
    gridCreate(numOfCubes);
}







function gridCreate(numOfCubes){
    for (let i = 0; i < numOfCubes; i++) {
        const cubeSet = document.createElement("div");
        cubeSet.setAttribute("style", `width: ${width}px; height: ${width / numOfCubes}px; display: flex; `);
        cubeSet.className = `cubeSet ${i + 1}`;
        addCubesToSet(cubeSet);
        main.appendChild(cubeSet);
    
    }
}






resetButton.addEventListener("click", () => {
    const cubeSelector = document.querySelectorAll(".cube");
    cubeSelector.forEach(element => {

        element.style.backgroundColor = "white";

    });
})


colorButtons.forEach(element => {
    element.addEventListener("click", () => changeColor(element));    
});




function changeColor(buttonPressed){
    
    console.log("lol");
    newColor = buttonPressed.getAttribute('id');
    elements = document.querySelectorAll(".cube");
    console.log(newColor);
    color = newColor;
    elements.forEach(button => {
        draw(button,color);     
    });
   




}






function addCubesToSet(set) {

    for (let i = 0; i < numOfCubes; i++) {
        const cube = document.createElement("button");
        cube.setAttribute("style", `width:${width / numOfCubes}px; height:${width / numOfCubes}px; `);
        cube.className = `cube ${i + 1}`;
        set.appendChild(cube);
        draw(cube,color);
    }


    

}

function draw(button,color){

    button.addEventListener("mouseover", (e) => {
        if (e.buttons == 1) {
            button.style.backgroundColor = color;
            
        }

    });

    button.addEventListener("mousedown", () => {
        button.style.backgroundColor = color;
        console.log("hello");

    });

}

function removeGrid(){
    let sets = document.querySelectorAll(".cubeSet");
    sets.forEach(element => {
     element.remove();   
    });
}





