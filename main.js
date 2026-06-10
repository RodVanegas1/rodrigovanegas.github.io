// Animación suave al cargar

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// Revelar elementos al hacer scroll

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(
    ".section, .stat-card, .tech-card, .card, .project-card"
).forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});

// Botón volver arriba

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){
        topButton.classList.add("active");
    }else{
        topButton.classList.remove("active");
    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

// Contadores animados

const counters = document.querySelectorAll(".stat-card h3");

let counterStarted = false;

window.addEventListener("scroll", () => {

    const stats = document.querySelector(".stats");

    if(!stats) return;

    const statsTop = stats.getBoundingClientRect().top;

    if(statsTop < window.innerHeight && !counterStarted){

        counterStarted = true;

        counters.forEach(counter => {

            const target = parseInt(counter.innerText);

            let count = 0;

            const updateCounter = () => {

                if(count < target){

                    count++;

                    counter.innerText =
                        count + (counter.innerText.includes("+") ? "+" : "");

                    setTimeout(updateCounter,80);

                }

            };

            updateCounter();

        });

    }

});