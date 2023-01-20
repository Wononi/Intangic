const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('element__show')
        }
    });
});

let animateBlock = document.querySelectorAll('.animate__block')

animateBlock.forEach(e => observer.observe(e))