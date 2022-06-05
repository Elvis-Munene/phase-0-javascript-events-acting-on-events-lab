// Your code here
// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#000000";

const moveDodgerLeft = () => {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    
    if (left > 0) {
        dodger.style.left = `${left - 5}px`;
    }
}

const moveDodgerRight = () => {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    
    if (left < 360) {
        dodger.style.left = `${left + 5}px`;
    }
}

document.addEventListener("keydown", e => {
    if(e.key === "ArrowLeft"){
        moveDodgerLeft();
    }
    else if(e.key === "ArrowRight"){
        moveDodgerRight();
    }
});