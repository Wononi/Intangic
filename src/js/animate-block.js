const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if(entry.target.classList.item(1) == 'second_animate_block'){
                setTimeout(() =>entry.target.classList.add('element__show'), 1000)
            } else {
                setTimeout(() =>entry.target.classList.add('element__show'), 0)
            }
        }
    });
});

let animateBlock = document.querySelectorAll('.animate__block')

animateBlock.forEach(e => observer.observe(e))