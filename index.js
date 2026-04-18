const window_el = document.getElementById('window')

window_el.addEventListener('mousedown', mouseDown)

function mouseDown(e) {
    startx = e.clientX
    starty = e.clientY
    document.addEventListener('mousemove', mouseMove)
    document.addEventListener('mouseup', mouseUp)
}

function mouseMove(e) {
    newX = startx - e.clientX
    newY = starty - e.clientY
    startx = e.clientX
    starty = e.clientY
    window_el.style.left = (window_el.offsetLeft - newX) + 'px'
    window_el.style.top = (window_el.offsetTop - newY) + 'px'
    window_el.style.transform = 'none'
}

function mouseUp() {
    document.removeEventListener('mousemove', mouseMove)
    document.removeEventListener('mouseup', mouseUp)
}