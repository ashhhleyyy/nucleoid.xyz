document.querySelectorAll('.carousel').forEach(carousel => {
    const scroller = carousel.querySelector('.scroller');
    const next = carousel.querySelector('.control.next');
    const prev = carousel.querySelector('.control.prev');
    const item = carousel.querySelector('.item');
    
    next.addEventListener('click', function() {
        scroller.scrollBy({ left: item.clientWidth, top: 0, behavior: 'smooth' });
    });
    prev.addEventListener('click', function() {
        scroller.scrollBy({ left: -item.clientWidth, top: 0, behavior: 'smooth' });
    });
});

document.querySelectorAll('.scroll_indicator').forEach(scrollIndicator => {
    document.addEventListener('scroll', scroll);
    document.addEventListener('touchmove', scroll);
    document.addEventListener('gesturechange', scroll);

    function scroll() {
        var top = window.pageYOffset || document.documentElement.scrollTop;
        if (top > 10) {
            scrollIndicator.classList.add("scrolled");
        } else {
            scrollIndicator.classList.remove("scrolled");
        }
    }
});
