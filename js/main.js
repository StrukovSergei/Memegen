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

function getRandomMeme() {
    drawImg(getRandomIntInclusive(100, 110))

}

function saveMeme() {
    const memeData = {
        selectedImage: gMeme.selectedImage,
        lines: gMeme.lines,
        selectedLineIndex: gMeme.selectedLineIndex
    }
    const savedMemes = JSON.parse(localStorage.getItem('savedMemes')) || []
    savedMemes.push(memeData)
    localStorage.setItem('savedMemes', JSON.stringify(savedMemes))
    alert('Meme saved successfully!')
}

function showSavedMemes() {
    const elSaved = document.querySelector('.saved-memes-container')
    elSaved.style.display = 'block'

    const savedMemes = JSON.parse(localStorage.getItem('savedMemes')) || []
    const savedMemesContainer = document.querySelector('.saved-memes-container')
    savedMemesContainer.innerHTML = ''

    savedMemes.forEach((meme, index) => {
        const memeElement = document.createElement('div')
        memeElement.classList.add('saved-meme')
        memeElement.innerHTML = `
        <img class="saved" width="220" height="165" src="imgs/${meme.selectedImage}.jpg" alt="Saved Meme ${index + 1}">
        <div class="meme-details">
          <h3>Meme ${index + 1}</h3>
          <p>Lines: ${meme.lines.length}</p>
        </div>
      `
        savedMemesContainer.appendChild(memeElement)
    })
    hideImgs()
}