const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() =>entry.target.classList.add('element__show'), 0)
        }
    });
});

let animateBlock = document.querySelectorAll('.animate__block')

animateBlock.forEach(e => observer.observe(e))