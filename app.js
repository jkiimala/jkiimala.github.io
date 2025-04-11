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


// tähtianimaatio //
document.addEventListener("DOMContentLoaded", () => {
    const starAnimation = document.querySelector('.star-animation');
  
    function createSymbol() {
        if (!starAnimation) return;
  
        const symbol = document.createElement('div');
        symbol.classList.add('star');
  
        // Satunnaisesti joko $ tai €
        symbol.textContent = Math.random() < 0.5 ? '€' : '$';
  
        // Satunnainen sijainti vaakasuunnassa
        symbol.style.left = `${Math.random() * 100}vw`;
  
        // Satunnainen syvyys z-akselilla
        const zDepth = Math.random() * 700 - 100;
        symbol.style.setProperty('--z-depth', `${zDepth}px`);
  
        // Satunnainen koko
        const size = `${Math.random() * 40 + 15}px`; // 5-45px
        symbol.style.setProperty('--size', size);
  
        // Satunnainen skaalaus
        const scale = Math.random() * 0.9 + 0.2; // 0.4 - 1
        symbol.style.setProperty('--scale', scale);

        const spinDirection = Math.random() < 0.5 ? 360 : -90;
        symbol.style.setProperty('--spin-dir', `${spinDirection}deg`);
  
        // Satunnainen animaation kesto
        const duration = Math.random() * 7 + 4; // 3-8 sekuntia
        symbol.style.animationDuration = `${duration}s`;
  
        // Lisää elementti animaatioon
        starAnimation.appendChild(symbol);
  
        // Poista, kun animaatio on valmis
        setTimeout(() => {
            symbol.remove();
        }, duration * 1000);
    }
  
    // Luo jatkuvasti uusia symboleita ($ tai €)
    setInterval(createSymbol, 200); // Pienempi arvo = enemmän merkkejä
  });
  
// eagle vaihto //
const image = document.getElementById('main-image');  // Haetaan kuvaelementti, jolla on id "main-image"
let isEagle2 = false;  // Seuraa kumpi kuva on esillä

document.querySelector('.theme-btn').addEventListener('click', () => {
    if (!isEagle2) {
        image.src = 'img/eagle2.webp';  // Vaihda kuvan lähteeksi toinen kuva
    } else {
        image.src = 'img/eagle.webp';  // Vaihda takaisin alkuperäiseen kuvaan
    }
    isEagle2 = !isEagle2;  // Vaihda tilaa, jotta seuraavalla painalluksella voidaan vaihtaa kuva uudelleen
});




const carouselContainer = document.getElementById('carouselContainer');

// Clone the carousel content to create a continuous loop
const carouselItems = carouselContainer.innerHTML;
carouselContainer.innerHTML += carouselItems;

// Set up animation
let scrollLeft = 0;
let scrollSpeed = 5; // Adjust the scroll speed as needed

// Hover functionality
carouselContainer.addEventListener('mouseover', () => {
    scrollSpeed = 20; // Increase speed on hover
});

carouselContainer.addEventListener('mouseout', () => {
    scrollSpeed = 5; // Reset speed when hover ends
});

// Animate the carousel
function animateCarousel(timestamp) {
    if (!lastTimestamp) {
        lastTimestamp = timestamp;
    }

    const deltaTime = timestamp - lastTimestamp;
    lastTimestamp = timestamp;

    scrollLeft += scrollSpeed * deltaTime / 60; // Normalize speed
    if (scrollLeft >= carouselContainer.scrollWidth / 2) {
        scrollLeft = 0;
    }
    carouselContainer.style.transform = `translateX(-${scrollLeft}px)`;

    requestAnimationFrame(animateCarousel);
}

let lastTimestamp = null;
requestAnimationFrame(animateCarousel);



// etusivun teksti //

document.addEventListener("DOMContentLoaded", function() {
    const texts = [
      "Continuous Improvement",
      "International Relations",
      "Responsive Web Design",
      "e-Commerce Solutions",
      "Data Acquisition",
      "Plan-Do-Check-Act",
      "Lean Thinking",
      "3D Modeling",
      "Artificial Intelligence"
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
