import './animate-block'
import '../style/style.scss'
import ScrollMagic from 'scrollmagic';

// window.addEventListener('scroll', () => {
//     document.querySelector('.sphere__background').style.transform = `scale(1.${pageYOffset / 100})`
// })

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            document.querySelector('.scroll__nav').classList.add('scroll__nav-show')
        } else {
            document.querySelector('.scroll__nav').classList.remove('scroll__nav-show')
        }
    });
});

observer.observe(document.querySelector('.navigation'))

const imac = document.querySelector('.first__content__block-img picture')
const imacWrapper = document.querySelector('.first__content__block-img')
const getHeightPicture = () => {
    return imac.clientHeight

}
setInterval(() => {
    imacWrapper.setAttribute('style', `height: ${getHeightPicture()}px`)
}, 100)
// анимация второго блока на главной странице
var controller = new ScrollMagic.Controller();

// build scene
new ScrollMagic.Scene({
    triggerElement: "#trigger",
})
  .setClassToggle("#animate", "visible") // add class to reveal
  .addIndicators() // add indicators (requires plugin)
  .addTo(controller);

setTimeout(() => {
    new ScrollMagic.Scene({
        triggerElement: "#trigger",
    })
      .setClassToggle("#animateBGOne", "visible") // add class to reveal
      .addIndicators() // add indicators (requires plugin)
      .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#trigger",
    })
      .setClassToggle("#animateBGTwo", "visible") // add class to reveal
      .addIndicators() // add indicators (requires plugin)
      .addTo(controller);
}, 4000)
