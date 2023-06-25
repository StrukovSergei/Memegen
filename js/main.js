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

    addListeners()

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
    renderSelectedLineFrame()
}

function downloadImg(elLink) {
    const imgContent = gElCanvas.toDataURL('image/jpeg') // image/jpeg the default format
    elLink.href = imgContent
}

function switchLine() {
    gMeme.selectedLineIndex = (gMeme.selectedLineIndex + 1) % gMeme.lines.length
    renderMeme()
    renderSelectedLineFrame()
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
    elSaved.style.display = 'flex'

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
    hideGeneral()
}

function addListeners() {
    gElCanvas.addEventListener('mousedown', onDown)
    gElCanvas.addEventListener('mousemove', onMove)
    gElCanvas.addEventListener('mouseup', onUp)
    gElCanvas.addEventListener('touchstart', onDown)
    gElCanvas.addEventListener('touchmove', onMove)
    gElCanvas.addEventListener('touchend', onUp)
}

function onDown(ev) {
    const { offsetX, offsetY } = ev
    ev.preventDefault()
    const lineIdx = gMeme.selectedLineIndex
    const line = gMeme.lines[lineIdx]
    if (
        offsetX > line.rect.x &&
        offsetX < line.rect.x + line.rect.width &&
        offsetY > line.rect.y &&
        offsetY < line.rect.y + line.rect.height
    ) {
        gIsDragging = true
        gDraggedLineIdx = lineIdx
        gStartPos = { x: offsetX, y: offsetY }
        document.body.style.cursor = 'grabbing'
    }
}

function onMove(ev) {
    if (!gIsDragging) return
    const { offsetX, offsetY } = ev
    const dx = offsetX - gStartPos.x
    const dy = offsetY - gStartPos.y
    gStartPos = { x: offsetX, y: offsetY }
    moveLine(gDraggedLineIdx, dx, dy)
    renderMeme()
}

function onUp() {
    gIsDragging = false
    gDraggedLineIdx = -1
    document.body.style.cursor = 'default'
}

function getEvPos(ev) {
    const pos = {
        x: ev.clientX,
        y: ev.clientY
    }

    if (ev.type.startsWith('touch')) {
        ev.preventDefault()
        const touch = ev.touches[0] || ev.changedTouches[0]
        pos.x = touch.clientX
        pos.y = touch.clientY
    }

    return pos
}

function getLineIndex(pos) {
    const { lines } = gMeme
    for (let i = 0; i < lines.length; i++) {
        const { x, y, width, height } = lines[i].rect
        if (pos.x >= x && pos.x <= x + width && pos.y >= y && pos.y <= y + height) {
            return i
        }
    }
    return -1
}

function moveLine(lineIdx, dx, dy) {
    const line = gMeme.lines[lineIdx]
    line.rect.x += dx
    line.rect.y += dy
    line.rect.x = Math.max(0, line.rect.x) 
    line.rect.y = Math.max(0, line.rect.y)
}

function renderSelectedLineFrame() {
    const { lines, selectedLineIndex } = gMeme
    const line = lines[selectedLineIndex]

    if (line.rect) {
        gCtx.beginPath()
        gCtx.rect(line.rect.x, line.rect.y - 30, line.rect.width, line.rect.height)
        gCtx.strokeStyle = 'rgba(0, 0, 0, 0.5)'
        gCtx.lineWidth = 2
        gCtx.setLineDash([5, 5])
        gCtx.stroke()
    }
}
