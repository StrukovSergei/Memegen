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
    setImgIdx(idx)
    hideImgs()
    showCanvas()
    showMemeMaker()
}

function implementText() {
    gCtx.lineWidth = 2
    gCtx.textAlign = 'center'
    gCtx.strokeStyle = 'black'
    gCtx.font = gMeme.lines[0].size + "px Arial"
    gCtx.fillStyle = gMeme.lines[0].color
    gCtx.fillText(gMeme.lines[0].txt, gElCanvas.width / 2, 50)
    gCtx.strokeText(gMeme.lines[0].txt, gElCanvas.width / 2, 50)
}