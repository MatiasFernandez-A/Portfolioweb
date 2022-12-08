const main = document.querySelector('.main')
const cursor = document.getElementById('cursor')

let ancore = document.querySelectorAll('.a')

let clientX = 0;
let clientY = 0;


main.addEventListener('mousemove',mover)

function mover (e) {
    clientX = e.clientX;    
    clientY = e.clientY;
    cursor.style.top = (clientY - 22) + "px";
    cursor.style.left = (clientX - 24)  + "px";
}

ancore.addEventListener('mouseover', mouseIn)
ancore.addEventListener('mouseout', mouseOut)

function mouseIn () {
    cursor.classList.add('mini')
}
function mouseOut () {
    cursor.classList.remove('mini')
}   