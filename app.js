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
const starAnimation = document.querySelector('.star-animation');

function createStar() {
  const star = document.createElement('div');
  star.classList.add('star');
  
  // Satunnainen sijainti vaakasuunnassa
  star.style.left = `${Math.random() * 100}vw`;
  
  // Satunnainen animaation kesto
  const duration = Math.random() * 5 + 3; // 3-8 sekuntia
  star.style.animationDuration = `${duration}s`;

  // Satunnainen koko
  const size = Math.random() * 2 + 1; // 1-3px
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;

  // Lisää tähti tähtianimaatio-elementtiin
  starAnimation.appendChild(star);

  // Poista tähti, kun animaatio on valmis
  setTimeout(() => {
    star.remove();
  }, duration * 1000);
}

// Luo tähtiä jatkuvasti
setInterval(createStar, 100);



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
      "Data Acquisition",
      "Plan-Do-Check-Act",
      "Lean Thinking",
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
