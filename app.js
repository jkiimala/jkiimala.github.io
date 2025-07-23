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
let scrollSpeed = 5; // Säädä vieritysnopeutta tarpeen mukaan

// Lisätään muuttujat skew-efektille
let skew = 0;
let targetSkew = 0;
const skewFactor = 0.1; // Säädä tätä arvoa muuttaaksesi skew-efektin "pehmeyttä"

// Hover-toiminnallisuus
carouselContainer.addEventListener('mouseover', () => {
    scrollSpeed = 20; // Lisää nopeutta hoverilla
    targetSkew = -20; // Aseta skew-arvo, kun hiiri on päällä (esim. 10 astetta)
});

carouselContainer.addEventListener('mouseout', () => {
    scrollSpeed = 5; // Palauta nopeus, kun hover päättyy
    targetSkew = 0; // Palauta skew-arvo nollaan, kun hiiri poistuu
});


// Animoi karuselli
function animateCarousel(timestamp) {
    if (!lastTimestamp) {
        lastTimestamp = timestamp;
    }

    const deltaTime = timestamp - lastTimestamp;
    lastTimestamp = timestamp;

    scrollLeft += scrollSpeed * deltaTime / 60; // Normalisoi nopeus
    if (scrollLeft >= carouselContainer.scrollWidth / 2) {
        scrollLeft = 0;
    }

    // Lasketaan nykyinen skew-arvo pehmeästi
    const skewDifference = targetSkew - skew;
    skew += skewDifference * skewFactor;

    // Yhdistetään translateX ja skewX transform-ominaisuuteen
    carouselContainer.style.transform = `translateX(-${scrollLeft}px) skewX(${skew}deg)`;

    requestAnimationFrame(animateCarousel);
}

let lastTimestamp = null;
requestAnimationFrame(animateCarousel);



// etusivun teksti //

document.addEventListener("DOMContentLoaded", function() {
    const texts = [
      "Continuous Improvement",
      "Artificial Intelligence",
      "Prompt Engineering",
      "Vibe Coding",
      "Data Acquisition",
      "Lean Thinking",
      "Detail Orientation",
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
