document.querySelectorAll('.carousel').forEach(carousel => {
    const scroller = carousel.querySelector('.scroller');
    const next = carousel.querySelector('.control.next');
    const prev = carousel.querySelector('.control.prev');
    const item = carousel.querySelector('.item');

    scroller.appendChild(scroller.firstElementChild.cloneNode(true));

    next.addEventListener('click', function() {
        if (scroller.scrollLeft + item.clientWidth >= scroller.scrollWidth) {
            scroller.scrollBy({ left: -scroller.scrollWidth, top: 0 });
        }
        scroller.scrollBy({ left: item.clientWidth, top: 0, behavior: 'smooth' });
    });
    prev.addEventListener('click', function() {
        if (scroller.scrollLeft == 0) {
            scroller.scrollBy({ left: scroller.scrollWidth, top: 0 });
        }
        scroller.scrollBy({ left: -item.clientWidth, top: 0, behavior: 'smooth' });    });
});

document.querySelectorAll('.scroll_indicator').forEach(scrollIndicator => {
    document.addEventListener('scroll', scroll);
    document.addEventListener('touchmove', scroll);
    document.addEventListener('gesturechange', scroll);

    function scroll() {
        var top = window.pageYOffset || document.documentElement.scrollTop;
        if (top > 10) {
            scrollIndicator.classList.add("hidden");
        } else {
            scrollIndicator.classList.remove("hidden");
        }
    }
});

const serverStatus = document.querySelector("#serverStatus");

const statusRequest = new XMLHttpRequest();
statusRequest.onreadystatechange = function() { 
    if (statusRequest.readyState == 4) {
        if (statusRequest.status == 200) {
            const json = JSON.parse(statusRequest.responseText);
            const gameVersion = json.game_version;
            const playerCount = json.players.length;
    
            var content = "You can join us";
            if (playerCount > 2) {
                content = "You can join " + playerCount + " other players";
            } else if (playerCount == 1) {
                content = "You can join 1 other player";
            }

            if (gameVersion != "") {
                content += " with <b>Minecraft " + gameVersion + "</b> ";
            }
            
            content += "at: <code>nucleoid.xyz</code>"

            serverStatus.innerHTML = content;
        }

        serverStatus.classList.remove("hidden");
    }
}
statusRequest.open("GET", "https://api.nucleoid.xyz/status/play/", true);
statusRequest.send(null);
