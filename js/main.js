'use strict'

let gElCanvas
let gCtx
const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend']
let gIsDragging = false
let gDraggedLineIdx = -1
let gPrevMouseX
let gPrevMouseY


function onInit() {
    gElCanvas = document.querySelector('#my-canvas')
    gCtx = gElCanvas.getContext('2d')

    renderImgs()
    renderCanvas()
    addListeners()
    // resizeCanvas()

    window.addEventListener('resize', () => {
        // resizeCanvas()
    })
}

function renderCanvas() {
    gCtx.fillStyle = '#ede5ff'
    gCtx.fillRect(0, 0, gElCanvas.width, gElCanvas.height)
}

function renderImgs() {
    var strHTML = ''
    for (var i = 1; i <= 18; i++) {
        const className = `img-${i}`
        strHTML += `<img class="${className}" width="220" height="165" src="imgs/${i}.jpg" onclick="drawImg(${i})" >`
    }

    const elContainer = document.querySelector('.imgs-container')
    elContainer.innerHTML = strHTML
}

function getColor() {
    const elColor = document.querySelector('#color')
    setColor(elColor.value)
}

function getText() {
    const elTxt = document.querySelector('#textInput')
    setText(elTxt.value)
}

function getSize() {
    const elSize = document.querySelector('#size')
    setSize(elSize.value)
}

function renderMeme() {
    // drawImg(gMeme.selectedImage)
    gCtx.font = gMeme.lines[0].size + "px Arial"
    gCtx.fillText(gMeme.lines[0].txt, 50, 50)
    gCtx.fillStyle = gMeme.lines[0].color
    console.log(gMeme.lines[0].size)
}


function addListeners() {
    gElCanvas.addEventListener('mousedown', onMouseDown)
    gElCanvas.addEventListener('mousemove', onMouseMove)
    gElCanvas.addEventListener('mouseup', onMouseUp)
}


function onMouseDown(event) {
    const mouseX = event.offsetX;
    const mouseY = event.offsetY;
    for (let i = 0; i < gMeme.lines.length; i++) {
        const line = gMeme.lines[i];
        if (isPointInsideText(mouseX, mouseY, line)) {
            gIsDragging = true;
            gDraggedLineIdx = i;
            gPrevMouseX = mouseX;
            gPrevMouseY = mouseY;
            break;
        }
    }
}

function onMouseMove(event) {
    if (!gIsDragging) return;
    const mouseX = event.offsetX;
    const mouseY = event.offsetY;
    const line = gMeme.lines[gDraggedLineIdx];
    const dx = mouseX - gPrevMouseX;
    const dy = mouseY - gPrevMouseY;
    line.x += dx;
    line.y += dy;
    gPrevMouseX = mouseX;
    gPrevMouseY = mouseY;
    renderMeme();
}

function onMouseUp() {
    gIsDragging = false;
    gDraggedLineIdx = -1;
}

function isPointInsideText(x, y, line) {
    const textWidth = gCtx.measureText(line.txt).width;
    return (
        x >= line.x &&
        x <= line.x + textWidth &&
        y >= line.y - line.size &&
        y <= line.y
    );
}
// function addListeners() {
//     addMouseListeners()
//     addTouchListeners()
// }

// function addMouseListeners() {
//     gElCanvas.addEventListener('mousedown', onDown)
//     gElCanvas.addEventListener('mousemove', onMove)
//     gElCanvas.addEventListener('mouseup', onUp)
// }

// function addTouchListeners() {
//     gElCanvas.addEventListener('touchstart', onDown)
//     gElCanvas.addEventListener('touchmove', onMove)
//     gElCanvas.addEventListener('touchend', onUp)
// }

// function getMeasure() {
//     return gCtx.measureText(gMeme.lines[0].txt).width
// }



// function resizeCanvas() {
//     const elContainer = document.querySelector('.canvas-container')
//     gElCanvas.width = elContainer.offsetWidth
// }