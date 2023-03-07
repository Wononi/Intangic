import { TimelineMax, TweenMax, Linear } from 'gsap';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'
import './animate-block'
import '../style/style.scss'

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

// build tween
var tween1 = TweenMax.from("#animate", 0.5, {opacity: 0});
var tween2 = TweenMax.from("#animateBGOne", 0.5, {opacity: 0});
var tween3 = TweenMax.from("#animateBGTwo", 0.5, {opacity: 0});

// build scene and set duration to window height
var scene1 = new ScrollMagic.Scene({triggerElement: "#trigger", duration: "80%"})
  .setTween(tween1)
  .addIndicators()
  .addTo(controller);

var scene2 = new ScrollMagic.Scene({triggerElement: "#trigger", duration: "80%"})
  .setTween(tween2)
  .addIndicators()
  .addTo(controller);
var scene3 = new ScrollMagic.Scene({triggerElement: "#trigger", duration: "80%"})
  .setTween(tween3)
  .addIndicators()
  .addTo(controller);

