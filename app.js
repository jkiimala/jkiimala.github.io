function navigateToBlogs(event) {
    event.preventDefault();  // Estää oletustoiminnon
    window.scrollTo(0, 0);   // Vieritä ylös

    // Vieritä haluttuun osioon
    const blogsSection = document.getElementById('blogs');
    blogsSection.scrollIntoView({ behavior: 'smooth' });

    // Lisävarmistus, että vieritys pysyy ylhäällä
    setTimeout(() => window.scrollTo(0, 0), 100);
  }



(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();





// SKILLS KARUSELLI
const carouselContainer = document.getElementById('carouselContainer');

// Kloonaa karusellin sisältö jatkuvan silmukan luomiseksi
const carouselItems = carouselContainer.innerHTML;
carouselContainer.innerHTML += carouselItems;

// Animaation asetukset
let scrollLeft = 0;
const normalSpeed = 5; // Normaali vieritysnopeus
const hoverSpeed = 20; // Vieritysnopeus hoverilla
let scrollSpeed = normalSpeed;

// Muuttujat skew-efektille
let skew = 0;
let targetSkew = 0;

// Muuttujat motion blur -efektille
let blurValue = 0;
const maxBlur = 3; // Maksimisumennus pikseleinä (säädä tarvittaessa)
let targetBlur = 0;

// Yhteinen pehmennyskerroin efekteille
const effectFactor = 0.1;

// Hover-toiminnallisuus
carouselContainer.addEventListener('mouseover', () => {
    scrollSpeed = hoverSpeed;
    targetSkew = -20;
    targetBlur = 1.5; // Aseta tavoitesumennus maksimiin hoverilla
});

carouselContainer.addEventListener('mouseout', () => {
    scrollSpeed = normalSpeed;
    targetSkew = 0;
    targetBlur = 0; // Palauta tavoitesumennus nollaan
});



// Animoi karuselli
function animateCarousel(timestamp) {
    if (!lastTimestamp) {
        lastTimestamp = timestamp;
    }

    const deltaTime = timestamp - lastTimestamp;
    lastTimestamp = timestamp;

    scrollLeft += scrollSpeed * deltaTime / 100; // Normalisoi nopeus
    if (scrollLeft >= carouselContainer.scrollWidth / 2) {
        scrollLeft = 0;
    }

    // Lasketaan nykyinen skew-arvo pehmeästi
    const skewDifference = targetSkew - skew;
    skew += skewDifference * effectFactor;

    // Lasketaan nykyinen blur-arvo pehmeästi
    const blurDifference = targetBlur - blurValue;
    blurValue += blurDifference * effectFactor;

    // Asetetaan transform- ja filter-ominaisuudet
    carouselContainer.style.transform = `translateX(-${scrollLeft}px) skewX(${skew}deg)`;
    carouselContainer.style.filter = `blur(${blurValue}px)`;


    requestAnimationFrame(animateCarousel);
}

let lastTimestamp = null;
requestAnimationFrame(animateCarousel);


// etusivun teksti //

document.addEventListener("DOMContentLoaded", function() {
    const texts = [
      "Continuous Improvement",
      "Nordic Flavors",
      "Untamed and True",
      "Creative Mindset",
      "From Wilderness to Plate",
      "Soulful Cuisine",
      "Timeless Taste",
    ];
    
    let currentIndex = 0;
    const animatedText = document.getElementById("animatedText");
  
    function showNextText() {
      // Lisää bounceOutDown-animaatio
      animatedText.style.animation = "bounceOutDown 0.8s forwards";
      
      // Vaihtaa tekstin x sekunnin kuluttua ja aloittaa bounceInDown-animaation
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % texts.length;
        animatedText.textContent = texts[currentIndex];
        animatedText.style.animation = "bounceInDown 0.4s forwards";
      }, 500); // odotusaika ennen uuden tekstin näyttämistä
    }
  
    // Aloita tekstin vaihtaminen 3 sekunnin välein
    setInterval(showNextText, 2200);
  });
