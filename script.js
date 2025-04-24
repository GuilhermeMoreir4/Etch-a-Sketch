const drawing_area = document.querySelector("#sketch-drawing-area");


let drawingAreaPixelSize = 32;
let squareSize = 10;
let colorToPaint = "black";

function drawCanvaSize(squareSize){
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
}

function eraseOldCanvaSize(){
    const sketchDrawingArea = document.querySelector("#sketch-drawing-area");
    while(sketchDrawingArea.firstChild){
        sketchDrawingArea.removeChild(sketchDrawingArea.lastChild);
    }
}


function pickColor(){

    const image = document.getElementById("setting-change-color");
    const colorPicker = document.getElementById("color-input");

        image.addEventListener("click", () => {
          colorPicker.click();
        });
    
        document.addEventListener("click", (e) => {
          if (!colorPicker.contains(e.target) && !image.contains(e.target)) {
            colorPicker.style.display = "none";
          }
        });
    
        colorPicker.addEventListener("input",(e)=> {
            colorToPaint = e.target.value; 
        });
}




function draw(){
    let pixels = document.querySelectorAll(".pixel");
    pixels.forEach((pixel) => {
        pixel.addEventListener("click", function(e){
            pixel.style.cssText += "background: "+ colorToPaint+";";
        });
    });

}

function erase(){
    const erase = document.querySelector("#erase");
    erase.addEventListener("click",(e)=>{
        colorToPaint = "white";
    });
}

function selectedSetting(){
    const settings = document.querySelectorAll(".options-icons");
    let lastSetting = null;
    settings.forEach((setting) =>{        
        setting.addEventListener("click",function(e){
            if(lastSetting != null){
                lastSetting.style.cssText += "background-color: white;"; 
            }
            
            setting.style.cssText += "background-color: blue;";
            lastSetting = setting;
        });
    });
}

function resize(){
    const resizeSetting = document.querySelector("#setting-resize");
    resizeSetting.addEventListener("click",(e)=>{
      const sizeValue = parseInt(prompt("Resize the canvas 1-100"));
      if(sizeValue < 1 || sizeValue > 100){
        alert("Need to be more than 0 and lass then 100");
      }else{
        eraseOldCanvaSize();
        drawCanvaSize(sizeValue);
        draw();
      }
    })

};

function clear(){
    const clearBtn = document.querySelector("#button-clear");
    clearBtn.addEventListener("click",(e)=>{
        eraseOldCanvaSize();
        drawCanvaSize(squareSize);
        draw();
    });
}

drawCanvaSize(squareSize);
pickColor();
erase();
selectedSetting();
resize();
draw();
clear();