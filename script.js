class artGenerator{
    constructor(){
        this.artSize = 0;
        this.artContainer = document.getElementById("theContainer");
        this.openingPrompt = document.getElementById("openingPrompt");
        this.editPrompt = document.getElementById("editPrompt");
    }

    resizeArt(){
        let theWindowY = this.artContainer.offsetHeight;
        this.artContainer.style.width = `${theWindowY}px`;
    }

    changeColor(boxInput){
        boxInput.style.backgroundColor = '#000';
    }

    toggleInterface(){
        this.openingPrompt.classList.toggle("hide");
        this.editPrompt.classList.toggle("hide");
        this.artContainer.innerHTML = "";
    }

    createArt(artSizeInput = 2){
        if(artSizeInput < 2 || artSizeInput > 100){
            alert("Incorrect parameters. Please choose between 2 and 100.");
            return;
        }
        this.toggleInterface();
        let boxWidthAndHeight = 100 / artSizeInput;
        for(let y = 0; y < artSizeInput; y++){
            for(let x = 0; x < artSizeInput; x++){
                let newSquare = document.createElement('div');
                newSquare.className = "boxes";
                newSquare.id = `x${x}y${y}`;
                newSquare.style.flex = `0 0 ${boxWidthAndHeight}%`;
                newSquare.style.height = `${boxWidthAndHeight}%`;
                newSquare.addEventListener("mouseover", (event) => {
                    this.changeColor(event.target);
                });
                this.artContainer.appendChild(newSquare);
            }
        }
        this.resizeArt(artSizeInput)
    }
}

const art = new artGenerator();

const createButton = document.getElementById("numberOfButton");
const editButton = document.getElementById("editPrompt");

createButton.addEventListener("click", () => {
    const numBoxes = document.getElementById("numberOf").value;
    art.createArt(numBoxes);
});

editButton.addEventListener("click", () => {
    art.toggleInterface();
});

window.addEventListener("resize", () => {
    art.resizeArt();
});