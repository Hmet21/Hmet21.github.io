// Cara mengatasi lubang yg kosong di belakang gambar menu kitta
function initCarousel () {
    // for Coffe
    const coffe = document.querySelector(".coffe-carousel");
    // for Non-Coffe
    const nonCoffe = document.querySelector(".non-coffe-carousel");
    // for Purin
    const purin = document.querySelector(".purin-carousel");
    // for Lemon
    const lemon = document.querySelector(".lemon-carousel");


    for (let i = 0; i < 5; i++) {
        // mengklone for Coffe
        const coffeCarousel = document.querySelector(".coffe-carousel-slide").cloneNode(true);
        // mengklone for Non-Coffe
        const nonCoffeCarousel = document.querySelector(".non-coffe-carousel-slide").cloneNode(true);
        // mengklone for Purin
        const purinCarousel = document.querySelector(".purin-carousel-slide").cloneNode(true);
        // mengklone for Lemon
        const lemonCarousel = document.querySelector(".lemon-carousel-slide").cloneNode(true);


        // for Coffe
        coffe.appendChild(coffeCarousel); 
        // for Non-Coffe
        nonCoffe.appendChild(nonCoffeCarousel);
        // for Purin
        purin.appendChild(purinCarousel);
        // for Lemon
        lemon.appendChild(lemonCarousel);
    }
}
initCarousel();


// Form Reservation
const form = document.querySelector("#reservation-item-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const tableName = document.querySelector("#table_name").value;
    const tableSize = document.querySelector("#table_capacity").value;
    const date = document.querySelector("#order_date").value;
    const order = document.querySelector("#order").value;

    const orderText = `Halo, Saya ingin reservasi meja untuk ${tableSize} orang, atas nama ${tableName} pada tanggal/waktu ${date}
    
    Order:
    ${order || "Pesan ditempat"}
    `;

    window.location.replace(`https://wa.me/+6285756690389?text=${orderText}`);
});
// End of Form Reservation


// Responsive
// for hamburger
const hamburger = document.querySelector("#burger-navigation");
// for Mobile Navigation
const mobileNavigation = document.querySelector(".nav-mobile-main");


hamburger.addEventListener("click", function() {
    // for hamburger
    hamburger.classList.toggle("open");
    // for Mobile Navigation
    mobileNavigation.classList.toggle("menu-active");
});
// End of Responsive