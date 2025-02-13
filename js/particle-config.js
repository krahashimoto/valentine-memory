particlesJS("particle-background", {
    particles: {
      number: { value: 100 },
      color: { value: "#ff69b4" }, // Hot pink color for Valentine's vibe
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: 3 },
      move: { enable: true, speed: 1 }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "repulse" }
      }
    }
  });