'use strict'

let gMeme = {
    selectedImage: null,
    lines: [
        {
            txt: '',
            size: "40",
            color: 'black',
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
    const elGalleryBtn = document.querySelector('.btn-gallery')
    const elTitle = document.querySelector('h1')
    elImgs.classList.add('hidden')
    elTitle.classList.add('hidden')
    elGalleryBtn.style.display = 'block'

}

function showCanvas() {
    const elCanvas = document.querySelector('.canvas-container')
    elCanvas.removeAttribute('hidden')
}

function showMemeMaker() {
    const elCanvas = document.querySelector('.meme-maker')
    elCanvas.removeAttribute('hidden')
}

function showGallery() {
    const elImgs = document.querySelector('.imgs-container')
    const elCanvas = document.querySelector('.canvas-container')
    elCanvas.classList.add('hidden')
    elImgs.classList.remove('hidden')
}

function setColor(color) {
    gMeme.lines[0].color = color
    renderMeme()
}

function setText(txt) {
    gMeme.lines[0].txt = txt
    renderMeme()
}

function setSize(size) {
    gMeme.lines[0].size = size
    renderMeme()
}


// function isTextClicked(clickedPos) {
//     const { pos } = gMeme.lines[0]
//     // Calc the distance between two dots
//     const distance = Math.sqrt((pos.x - clickedPos.x) ** 2 + (pos.y - clickedPos.y) ** 2)
//     // console.log('distance', distance)
//     //If its smaller then the radius of the circle we are inside
//     return distance <= gMeme.lines[0].size
//   }

// function setDrag() {
//     if (gMeme.lines[0].isDrag) {
//         gMeme.lines[0].isDrag = false
//     } else {
//         gMeme.lines[0].isDrag = true
//     }
// }

// function checkDrag() {
//     gMeme.lines[0].isDrag ? true : false
// }


// function moveText(dx, dy) {
//     gMeme.lines[0].pos.x += dx
//     gMeme.lines[0].pos.y += dy
//   }

