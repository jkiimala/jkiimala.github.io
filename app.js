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

  function createDollarSign() {
      if (!starAnimation) return;

      const dollar = document.createElement('div');
      dollar.classList.add('star');
      dollar.textContent = '€';

      // Satunnainen sijainti vaakasuunnassa
      dollar.style.left = `${Math.random() * 100}vw`;

      // Satunnainen syvyys z-akselilla
      const zDepth = Math.random() * 200 - 100;
      dollar.style.setProperty('--z-depth', `${zDepth}px`);

      // Satunnainen koko
      const size = `${Math.random() * 20 + 5}px`; // 10-50px
      dollar.style.setProperty('--size', size);

      // Satunnainen skaalaus
      const scale = Math.random() * 0.8 + 0.4; // 0.4 - 1
      dollar.style.setProperty('--scale', scale);

      // Satunnainen kääntyminen (luo elävyyttä)
      const rotate = `${Math.random() * 360}deg`;
      dollar.style.setProperty('--rotate', rotate);

      // Satunnainen animaation kesto
      const duration = Math.random() * 5 + 3; // 3-8 sekuntia
      dollar.style.animationDuration = `${duration}s`;

      // Lisää elementti animaatioon
      starAnimation.appendChild(dollar);

      // Poista, kun animaatio on valmis
      setTimeout(() => {
          dollar.remove();
      }, duration * 1000);
  }

  // Luo jatkuvasti uusia dollarimerkkejä
  setInterval(createDollarSign, 150); // Pienempi arvo = enemmän dollareita
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
