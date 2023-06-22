'use strict'
let gStartPos


function drawImg(idx) {
    const img = new Image()
    img.src = `imgs/${idx}.jpg`
    img.onload = function () {
        // Draw image on canvas
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        if (gMeme.lines[0].txt) {
            implementText()
        }
    }
    renderSelectedLineFrame()
    setImgIdx(idx)
    hideImgs()
    showCanvas()
    showMemeMaker()
}

function implementText() {
    gCtx.lineWidth = 2
    gCtx.textAlign = 'center'

    // First Line
    gCtx.strokeStyle = 'black'
    gCtx.font = gMeme.lines[0].size + "px Impact"
    gCtx.fillStyle = gMeme.lines[0].color
    gCtx.fillText(gMeme.lines[0].txt, gElCanvas.width / 2, 50)
    gCtx.strokeText(gMeme.lines[0].txt, gElCanvas.width / 2, 50)

    // Second Line
    gCtx.strokeStyle = 'black'
    gCtx.font = gMeme.lines[1].size + "px Impact"
    gCtx.fillStyle = gMeme.lines[1].color
    gCtx.fillText(gMeme.lines[1].txt, gElCanvas.width / 2, 270)
    gCtx.strokeText(gMeme.lines[1].txt, gElCanvas.width / 2, 270)
}

function renderSelectedLineFrame() {
    const selectedLine = gMeme.lines[gMeme.selectedLineIndex]

    gCtx.strokeRect(
        0,
        selectedLine.size * gMeme.selectedLineIndex,
        gElCanvas.width,
        selectedLine.size
    )
}