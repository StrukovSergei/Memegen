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
        renderSelectedLineFrame()
    }
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
    gCtx.fillText(gMeme.lines[1].txt, gElCanvas.width / 2, 370)
    gCtx.strokeText(gMeme.lines[1].txt, gElCanvas.width / 2, 370)
}

// function renderSelectedLineFrame() {
//     const selectedLine = gMeme.lines[gMeme.selectedLineIndex]
  
//     gCtx.strokeStyle = 'black'
//     gCtx.lineWidth = 2
//     gCtx.font = selectedLine.size + 'px Impact'
//     const textMetrics = gCtx.measureText(selectedLine.txt)
  
//     const x = gElCanvas.width / 2 - textMetrics.width / 2 - 10
//     const y = selectedLine.size * gMeme.selectedLineIndex - selectedLine.size - 5
//     const width = textMetrics.width + 20
//     const height = selectedLine.size + 10
  
//     // Draw the border box
//     gCtx.beginPath()
//     gCtx.fillStyle = 'rgba(0, 0, 0, 0.2)'
//     gCtx.fillRect(x, y + 60, width, 50)
//     gCtx.stroke()
//   }
  
  
  
  
  
  
  
  