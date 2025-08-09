// document.addEventListener("DOMContentLoaded", () => {
//     const videos = document.querySelectorAll(".autoplay-video");

//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.play();
//             } else {
//                 entry.target.pause();
//             }
//         });
//     }, {
//         threshold: 0.5 // Video must be at least 50% in view
//     });

//     videos.forEach(video => {
//         observer.observe(video);
//     });
// });



document.addEventListener("DOMContentLoaded", () => {
  const colorThief = new ColorThief();

  document.querySelectorAll(".cards").forEach(card => {
    const img = card.querySelector(".card-image");

    // Ensure the image is loaded before extracting colors
    if (img.complete) {
      applyAmbientGlow(card, img);
    } else {
      img.addEventListener("load", () => applyAmbientGlow(card, img));
    }
  });

  function applyAmbientGlow(card, img) {
    const color = colorThief.getColor(img); // [R, G, B]
    const glowColor = `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.4)`;
    card.style.setProperty("--glow-color", glowColor);
    card.querySelector("::before");
    card.style.setProperty("--before-bg", `radial-gradient(circle at center, ${glowColor}, transparent 70%)`);
    card.style.setProperty("--before-color", glowColor);

    // Update CSS ::before dynamically
    const before = document.createElement("style");
    before.innerHTML = `
      .cards::before {
        background: radial-gradient(circle at center, ${glowColor}, transparent 70%) !important;
      }
    `;
    document.head.appendChild(before);
  }
});



window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
