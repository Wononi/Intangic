const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('element__show'), 500)
        }
    });
});
observer.observe(document.querySelector('.second__content__block'));