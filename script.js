let numOfCubes = 20;
let color = "white";



const main = document.querySelector("main");
const resetButton = document.querySelector(".reset");
const colorButton = document.querySelector(".color");
const width = 350;


for (let i = 0; i < numOfCubes; i++) {
    const cubeSet = document.createElement("div");
    cubeSet.setAttribute("style", `width: ${width}px; height: ${width / numOfCubes}px; display: flex; `);
    cubeSet.className = `cubeSet ${i + 1}`;
    addCubesToSet(cubeSet);
    main.appendChild(cubeSet);

}

resetButton.addEventListener("click", () => {
    const cubeSelector = document.querySelectorAll(".cube");
    cubeSelector.forEach(element => {

        element.style.backgroundColor = "white";

    });
})


colorButton.addEventListener("click", () => changeColor(colorButton));



function changeColor(buttonPressed){
    
    newColor = buttonPressed.getAttribute('id');
    console.log(newColor);
    color = newColor;

}






function addCubesToSet(set) {

    for (let i = 0; i < numOfCubes; i++) {
        const cube = document.createElement("button");
        cube.setAttribute("style", `width:${width / numOfCubes}px; height:${width / numOfCubes}px; `);
        cube.className = `cube ${i + 1}`;
        set.appendChild(cube);


        cube.addEventListener("mouseover", (e) => {
            if (e.buttons == 1) {
                cube.style.backgroundColor = color;
            }

        });

        cube.addEventListener("mousedown", () => {
            cube.style.backgroundColor = color;

        });
    }


}





