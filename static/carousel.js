document.querySelectorAll('.carousel').forEach(carousel => {
    const scroller = carousel.querySelector('.scroller');
    const next = carousel.querySelector('.control.next');
    const prev = carousel.querySelector('.control.prev');
    const itemWidth = carousel.querySelector('.item').clientWidth;
    
    next.addEventListener('click', function() {
        scroller.scrollBy({ left: itemWidth, top: 0, behavior: 'smooth' });
    });
    prev.addEventListener('click', function() {
        scroller.scrollBy({ left: -itemWidth, top: 0, behavior: 'smooth' });
    });
});
