'use strict'

let gMeme = {
    selectedImage: null,
    lines: [
        {
            txt: '',
            size: "40",
            color: 'white',
            isDrag: false
        },
        {
            txt: '',
            size: "40",
            color: 'white',
            isDrag: false
        }
    ],
    selectedLineIndex: 0
}

function setImgIdx(idx) {
    gMeme.selectedImage = idx
}

function hideImgs() {
    const elImgs = document.querySelector('.imgs-container')
    const elBtn = document.querySelector('.buttons')
    const elRandomBtn = document.querySelector('.random-meme')
    const elTitle = document.querySelector('h1')
    elImgs.classList.add('hidden')
    elTitle.classList.add('hidden')
    elRandomBtn.style.display = 'none'
    elBtn.style.display = 'block'
}

function showCanvas() {
    const elCanvas = document.querySelector('.canvas-container')
    elCanvas.removeAttribute('hidden')
    elCanvas.classList.remove('hidden')
}

function showMemeMaker() {
    const elMemeMaker = document.querySelector('.meme-maker')
    elMemeMaker.removeAttribute('hidden')
    elMemeMaker.classList.remove('hidden')
}

function showGallery() {
    const elBtn = document.querySelector('.buttons')
    const elTitle = document.querySelector('h1')
    const elMemeMaker = document.querySelector('.meme-maker')
    const elImgs = document.querySelector('.imgs-container')
    const elCanvas = document.querySelector('.canvas-container')
    const elRandomBtn = document.querySelector('.random-meme')
    const elSaved = document.querySelector('.saved-memes-container')
    elRandomBtn.style.display = 'flex'
    
    elTitle.classList.remove('hidden')
    elMemeMaker.classList.add('hidden')
    elCanvas.classList.add('hidden')
    elImgs.classList.remove('hidden')
    elBtn.style.display = 'none'
    elSaved.style.display = 'none'
}

function setColor(color) {
    gMeme.lines[gMeme.selectedLineIndex].color = color
    renderMeme()
}

function setText(txt) {
    gMeme.lines[gMeme.selectedLineIndex].txt = txt
    renderMeme()
}

function setSize(size) {
    // const sizeNum = parseInt(size)
    var num = parseInt(gMeme.lines[gMeme.selectedLineIndex].size) + size
    gMeme.lines[gMeme.selectedLineIndex].size = num.toString()
    renderMeme()
}


function hideGeneral(){
    const elGeneral = document.querySelector('.general-meme')
    elGeneral.style.display = 'none'
}