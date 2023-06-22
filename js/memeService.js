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
    const elGalleryBtn = document.querySelector('.btn-gallery')
    const elTitle = document.querySelector('h1')
    elImgs.classList.add('hidden')
    elTitle.classList.add('hidden')
    elBtn.style.display = 'block'
    elGalleryBtn.style.display = 'block'
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
    const elGalleryBtn = document.querySelector('.buttons')
    const elTitle = document.querySelector('h1')
    const elMemeMaker = document.querySelector('.meme-maker')
    const elImgs = document.querySelector('.imgs-container')
    const elCanvas = document.querySelector('.canvas-container')
    elTitle.classList.remove('hidden')
    elMemeMaker.classList.add('hidden')
    elCanvas.classList.add('hidden')
    elImgs.classList.remove('hidden')
    elGalleryBtn.style.display = 'none'
}

function setColor(color) {
    gMeme.lines[0].color = color
    renderMeme()
}

function setText(txt) {
    gMeme.lines[gMeme.selectedLineIndex].txt = txt
    renderMeme()
}

function setSize(size) {
    // const sizeNum = parseInt(size)
    var num = parseInt(gMeme.lines[0].size) + size
    gMeme.lines[0].size = num.toString()
    renderMeme()
}


