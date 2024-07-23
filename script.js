let numOfCubes = 64;


const main = document.querySelector("main")







for(let i = 0; i < numOfCubes; i++){
    const cubeSet = document.createElement("div");
    cubeSet.setAttribute("style",`width: 500px; height: ${500/numOfCubes}px; display: flex; `);
    cubeSet.className = `cubeSet ${i+1}`;
    addCubesToSet(cubeSet);
    main.appendChild(cubeSet);
    
}




function addCubesToSet(set){

    for(let i = 0; i < numOfCubes; i++){
        const cube = document.createElement("button");
        cube.setAttribute("style",`width:${500/numOfCubes}px; height:${500/numOfCubes}px; border-style: solid; border-color:black; border-width: 1px`);
        cube.className = `cube ${i + 1}`;
        set.appendChild(cube);

        
        cube.addEventListener("mouseover",(e) => {
            if(e.buttons == 1){
                cube.style.backgroundColor = "red";
            }
            
        });

        cube.addEventListener("mousedown",() => {
            cube.style.backgroundColor = "red";
            
        });
    }


}





