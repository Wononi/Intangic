import './animate-block'
import '../style/style.scss'

// window.addEventListener('scroll', () => {
//     document.querySelector('.sphere__background').style.transform = `scale(1.${pageYOffset / 100})`
// })

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log(entry)
        if (!entry.isIntersecting) {
            document.querySelector('.scroll__nav').classList.add('scroll__nav-show')
        } else {
            document.querySelector('.scroll__nav').classList.remove('scroll__nav-show')
        }
    });
});

observer.observe(document.querySelector('.navigation'))