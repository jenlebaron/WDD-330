const squareElement = document.getElementById('square');
let angle = 0;
function rotate() {
    angle = (angle + 2)%360;
    squareElement.style.transform = `rotate(${angle}deg)`
    window.requestAnimationFrame(rotate);
}
console.log('square');

const circleElement = document.getElementById('circle');
let angle2 = 0;
setInterval( () =>{
    angle2 = (angle2 + 2)%360;
    circleElement.style.transform = `rotate(${angle2}deg)`
}, 1000/60);

console.log('circle');

const id = requestAnimationFrame(rotate);

