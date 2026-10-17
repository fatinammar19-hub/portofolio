const nav = document.getElementById('hamburger');
nav.addEventListener('click',() => {
    const listNav = document.querySelector('.list-nav');
    const hamburger = document.querySelectorAll('label[for="hamburger"] span');
    const Popnav = document.querySelector('.list-nav ul');

    

    // navigasi-icon
    let atas = hamburger[0];
    let tengah = hamburger[1];
    let bawah = hamburger[2];

        ["translate-y-1", "rotate-45","-translate-y-0.5"].forEach(className => {
        atas.classList.toggle(className);
        });

        ["opacity-0","opacity-100"].forEach(className => {
        tengah.classList.toggle(className);
        });

        ["-translate-y-1","-rotate-45","translate-y-0.5"].forEach(className => {
        bawah.classList.toggle(className);
        });

    // pop up nav
    ["opacity-0","opacity-100", "-translate-y-0.5","translate-x-96"].forEach(className => {
        Popnav.classList.toggle(className);
        });
});

// navigasi-bar
let barNav = document.querySelector('.content-nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        ["shadow-lg"].forEach(className => {
        barNav.classList.add(className);
        });
        }else{
        ["shadow-lg"].forEach(className => {
        barNav.classList.remove(className);
        })};
    });



const KeahlianBahasa = document.querySelectorAll("#KeahlianBahasa");

KeahlianBahasa.forEach((xs) => {
    xs.addEventListener("click", () => {
        const kontainer = xs.querySelector("div");

        kontainer.classList.toggle("max-w-0");
        kontainer.classList.toggle("max-w-xs");

        kontainer.classList.toggle("opacity-0");
        kontainer.classList.toggle("opacity-100");

        xs.classList.toggle("w-40");
        xs.classList.toggle("h-fit");
        xs.classList.toggle("w-[500px]");
    });
});