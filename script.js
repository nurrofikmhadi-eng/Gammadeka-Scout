const faders = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
    const trigger = window.innerHeight * 0.85;

    faders.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if(top < trigger){
            el.classList.add("show");
        }
    });
});