const mole = document.querySelectorAll(".container > *");
const startGame = document.querySelector(".startGame");
const score = document.querySelector(".score"); 
let counter = 0; 
let timeElapsed = 60; 

function displayMole(){    
    mole.forEach(element => {
        element.setAttribute("data-active", "false"); 
    });
        
    const position = Math.floor(Math.random() * 9); 
    
    mole[position].setAttribute("data-active", "true");
    
    mole[position].addEventListener("click", () => { 
        const touchedMole = mole[position].getAttribute("data-active"); 
        console.log(touchedMole);
        if(touchedMole === "true"){counter++}; 
        mole[position].setAttribute("data-active", "false"); 
        score.textContent = `Score: ${counter}`; 
    });

    timeElapsed--; 
}
                        
function gameTimer(){
    const clock = document.querySelector(".startGame[data-start='true']")
    let gameFunction = setInterval(() => {
        if(timeElapsed === 0){
            mole.forEach(element => {
                element.disabled = true; 
            });
            clearInterval(gameFunction); 
        }
        clock.textContent = `Timer: ${timeElapsed--}`;
        displayMole(); 
    }, 1000);

}

startGame.addEventListener("click", () => {
    startGame.setAttribute("data-start", "true"); 
    startGame.disabled = true;
    gameTimer();
});



