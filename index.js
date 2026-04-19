const window_el = document.getElementById('window')

function updateClock(){
    const now = new Date()
    const hours = String(now.getHours()).padStart(2, '0')
    const minutes = String(now.getMinutes()).padStart(2, '0')
    document.getElementById('clock-time').textContent = `${hours}:${minutes}`
}
updateClock()
setInterval(updateClock, 1000)


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
makeDraggable(document.getElementById('spotify-window'))


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
window.addEventListener('load', function() {
    setTimeout(function() {
        const screen = document.getElementById('loading-screen')
        screen.style.transition = 'transform 0.8s cubic-bezier(0.76, 0, 0.24, 1)'
        screen.style.transform = 'translateY(-100%)'
    }, 2000)
})
let dots = ""
setInterval(function (){
    const text = document.getElementById('loading-text')

    if (dots.length >= 3){
        dots = ""
    }else{
        dots += "."
        text.innerHTML = "Booting Burger OS" + dots
    }

}, 100)

document.getElementById('spotify-btn').addEventListener('click', function (){
    const audioplayer = document.getElementById('myAudio')
    const icon = document.getElementById('play-icon')
    audioplayer.volume = 0.3;

    const modal = document.getElementById('spotify-window')
    document.getElementById('welcome-text').style.opacity = '0'


    if (modal.classList.contains('show')) {
        modal.classList.remove('show')
    } else {
        modal.classList.add('show')
    }
    document.getElementById('play-btn').addEventListener('click', function (){
        if (audioplayer.classList.contains('playing')) {
            audioplayer.classList.remove('playing')
            audioplayer.pause();
            icon.textContent = '▶'
        } else {
            audioplayer.classList.add('playing')
            audioplayer.play();
            icon.textContent = '⏸'
        }
    })
})
