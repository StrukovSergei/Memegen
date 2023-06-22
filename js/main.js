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
    // addListeners()
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

function getSize(size) {
    setSize(size)
}

function renderMeme() {
    drawImg(gMeme.selectedImage)
}

function downloadImg(elLink) {
    const imgContent = gElCanvas.toDataURL('image/jpeg') // image/jpeg the default format
    elLink.href = imgContent
}

function switchLine() {
    gMeme.selectedLineIndex = (gMeme.selectedLineIndex + 1) % gMeme.lines.length
    renderMeme();
}