const window_el = document.getElementById('window')


function makeDraggable(element) {
    element.addEventListener('mousedown', function(e) {
        if (!element.classList.contains('show')) return
        startx = e.clientX
        starty = e.clientY
        document.addEventListener("mousemove", mouseMove)
        document.addEventListener('mouseup', mouseUp)


        function mouseMove(e){
            newX = startx - e.clientX
            newY = starty - e.clientY
            startx = e.clientX
            starty = e.clientY
            element.style.left = (element.offsetLeft - newX) + 'px'
            element.style.top = (element.offsetTop - newY) + 'px'
            element.style.transform = 'none'
        }
        function mouseUp(){
            document.removeEventListener('mousemove', mouseMove)
            document.removeEventListener('mouseup', mouseUp)
        }
    })
}

makeDraggable(document.getElementById('window'))
makeDraggable(document.getElementById('aboutme-window'))
makeDraggable(document.getElementById('contact-window'))


document.getElementById('aboutme-btn').addEventListener('click', function() {
    const modal = document.getElementById('aboutme-window')
    document.getElementById('welcome-text').style.opacity = '0'


    if (modal.classList.contains('show')) {
        modal.classList.remove('show')
    } else {
        modal.classList.add('show')
    }
})

document.getElementById('searchbtn').addEventListener('click', function() {
    const modalwindow = document.getElementById('window')
    document.getElementById('welcome-text').style.opacity = '0'

    if (modalwindow.classList.contains('show')) {
        modalwindow.classList.remove('show')
    } else {
        modalwindow.classList.add('show')
    }
})

document.getElementById('contact-btn').addEventListener('click', function() {
    const modalwindow = document.getElementById('contact-window')
    document.getElementById('welcome-text').style.opacity = '0'

    if (modalwindow.classList.contains('show')) {
        modalwindow.classList.remove('show')
    } else {
        modalwindow.classList.add('show')
    }
})

document.getElementById('copy-email').addEventListener('click', function (){
    navigator.clipboard.writeText('ragingburger668@gmail.com')
    this.textContent = 'Copied!'
    setTimeout(() => this.textContent = 'Copy', 2000)
})