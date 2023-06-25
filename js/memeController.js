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

// function implementText() {
//     gCtx.lineWidth = 2
//     gCtx.textAlign = 'center'

//     // First Line
//     gCtx.strokeStyle = 'black'
//     gCtx.font = gMeme.lines[0].size + "px Impact"
//     gCtx.fillStyle = gMeme.lines[0].color
//     gCtx.fillText(gMeme.lines[0].txt, gElCanvas.width / 2, 50)
//     gCtx.strokeText(gMeme.lines[0].txt, gElCanvas.width / 2, 50)

//     // Second Line
//     gCtx.strokeStyle = 'black'
//     gCtx.font = gMeme.lines[1].size + "px Impact"
//     gCtx.fillStyle = gMeme.lines[1].color
//     gCtx.fillText(gMeme.lines[1].txt, gElCanvas.width / 2, 370)
//     gCtx.strokeText(gMeme.lines[1].txt, gElCanvas.width / 2, 370)
// }



function implementText() {
    gCtx.lineWidth = 2
    gCtx.textAlign = 'center'

    for (let i = 0; i < gMeme.lines.length; i++) {
        const line = gMeme.lines[i]
        gCtx.strokeStyle = 'black'
        gCtx.font = line.size + 'px Impact'
        gCtx.fillStyle = line.color
        const width = gCtx.measureText(line.txt).width
        const height = parseInt(line.size)
        const x = gElCanvas.width / 2
        const y = (i === 0) ? 50 : gElCanvas.height - 10
        line.rect = { x: x - width / 2, y, width, height }
        gCtx.fillText(line.txt, x, y)
        gCtx.strokeText(line.txt, x, y)
    }
}



