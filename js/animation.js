// Select all memory sections

particlesJS.load('particle-background', 'js/particles-config.json', function () {
    console.log('Particles.js config loaded.');
  });

const memorySections = document.querySelectorAll('.memory');

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Unobserve to prevent repeated animations
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

memorySections.forEach((section) => observer.observe(section));

document.getElementById('yes-button').addEventListener('click', function () {
    window.location.href = 'thankyou.html';
  });
  
  document.getElementById('no-button').addEventListener('click', function () {
    alert("Oh no! You're breaking my heart! 💔");
  });


  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "🌹";
    document.getElementById("floating-hearts").appendChild(heart);
  
    const size = Math.random() * 20 + 10; 
    heart.style.fontSize = `${size}px`;
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s"; 
  
    setTimeout(() => {
      heart.remove(); // Remove heart after animation
    }, 5000);
  }
  
  // make new heart every 500ms, 500 looks best so far
  setInterval(createHeart, 500);









  


