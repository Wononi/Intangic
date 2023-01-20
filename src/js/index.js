import './animation-galaxy-sphere'
import './animate-block'

window.addEventListener('scroll', () => {
    document.querySelector('.sphere__background').style.transform = `scale(1.${pageYOffset / 100})`
})