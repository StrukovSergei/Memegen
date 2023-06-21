'use strict'
let gStartPos

function drawImg(idx) {
    const img = new Image()
    img.src = `imgs/${idx}.jpg`
    img.onload = () => {
        gElCanvas.height = (img.naturalHeight / img.naturalWidth) * gElCanvas.width
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    }
    setImgIdx(idx)
    hideImgs()
    showCanvas()
    showMemeMaker()
}

// function onDown(ev) {
//     // Get the ev pos from mouse or touch
//     const pos = getEvPos(ev)
//     // console.log('pos', pos)
//     if (!isTextClicked(pos)) return

//     setDrag()
//     //Save the pos we start from
//     gStartPos = pos
//     document.body.style.cursor = 'grabbing'
// }

// function onMove(ev) {
//     const { isDrag } = gMeme.lines[0]
//     if (!isDrag) return
//     console.log('Moving the Text')

//     const pos = getEvPos(ev)
//     // Calc the delta, the diff we moved
//     const dx = pos.x - gStartPos.x
//     const dy = pos.y - gStartPos.y
//     moveText(dx, dy)
//     // Save the last pos, we remember where we`ve been and move accordingly
//     gStartPos = pos
//     // The canvas is render again after every move
//     renderMeme()
// }

// function onUp() {
//     setDrag()
//     document.body.style.cursor = 'grab'
// }

// function getEvPos(ev) {

//     let pos = {
//         x: ev.offsetX,
//         y: ev.offsetY,
//     }

//     if (TOUCH_EVS.includes(ev.type)) {
//         // Prevent triggering the mouse ev
//         ev.preventDefault()
//         // Gets the first touch point
//         ev = ev.changedTouches[0]
//         // Calc the right pos according to the touch screen
//         pos = {
//             x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
//             y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
//         }
//     }
//     return pos
// }