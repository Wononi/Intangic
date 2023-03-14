import { TweenMax } from 'gsap';
import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'
import './animate-block'
import '../style/style.scss'


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

// анимация второго блока на главной странице
if (document.querySelector('#trigger')) {
    debugger
    const controller = new ScrollMagic.Controller();


// build tween
    var tween = TweenMax.from("#animate", 1, {opacity: 0.05});
    var tween2 = TweenMax.from("#animateBGOne", 1, {opacity: 0});
    var tween3 = TweenMax.from("#animateBGTwo", 1, {opacity: 0});

// build scene and set duration to window height
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger2", duration: "50%"})
      .setTween(tween)
      .addTo(controller);

    var scene2 = new ScrollMagic.Scene({triggerElement: "#trigger", duration: "50%"})
      .setTween(tween2)
      .addTo(controller);

    var scene3 = new ScrollMagic.Scene({triggerElement: "#trigger", duration: "50%"})
      .setTween(tween3)
      .addTo(controller);
}


