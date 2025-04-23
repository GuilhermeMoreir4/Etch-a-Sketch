const drawing_area = document.querySelector("#sketch-drawing-area");


let drawingAreaPixelSize = 32;
let squareSize = 5;
let squareRenderSize = drawingAreaPixelSize / squareSize;

for(let i = 0;i < squareSize;i++){
    const row = document.createElement("div");
    row.className = "row";
    for(let j = 0; j < squareSize;j++){
        const pixel = document.createElement("div");
        pixel.className = "pixel";
        pixel.style.cssText = "width:" + squareRenderSize + "rem; height: "+squareRenderSize +"rem;";
        row.appendChild(pixel);
    }
    drawing_area.appendChild(row);
}



function handleEvents(){
    let pixels = document.querySelectorAll(".pixel");

    pixels.forEach((pixel) => {
        pixel.addEventListener("click", function(e){
            pixel.style.cssText += "background: black;";
        });
    });

}

handleEvents();