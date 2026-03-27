gsap.registerPlugin(ScrollTrigger);

// HERO animation
gsap.from(".hero-text", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.3
});

// IMAGE animation
gsap.from(".hero-right img", {
  x: 100,
  opacity: 0,
  duration: 1
});

// CARDS animation
gsap.from(".card", {
  scrollTrigger: ".card",
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.2
});

// EDUCATION animation
gsap.from(".edu-box", {
  scrollTrigger: ".edu-box",
  y: 100,
  opacity: 0,
  duration: 1
});

// Animate project images on scroll
gsap.utils.toArray(".project-image-container img").forEach((img) => {
  gsap.from(img, {
    scrollTrigger: {
      trigger: img,
      start: "top 85%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    scale: 0.9,
    y: 30,
    duration: 1,
    ease: "power2.out"
  });
});



gsap.registerPlugin(ScrollTrigger);

// Animate project images on scroll
gsap.utils.toArray(".project-image-container").forEach(container => {
  const img = container.querySelector("img");
  const overlay = container.querySelector(".overlay-btn");

  // Fade + scale animation on scroll
  gsap.from(img, {
    scrollTrigger: {
      trigger: container,
      start: "top 85%"
    },
    opacity: 0,
    scale: 0.9,
    y: 30,
    duration: 1,
    ease: "power2.out"
  });

  // Fade overlay button on scroll
  if (overlay) {
    gsap.from(overlay, {
      scrollTrigger: {
        trigger: container,
        start: "top 85%"
      },
      opacity: 0,
      duration: 1,
      delay: 0.3
    });
  }

  // Hover zoom + overlay fade
  container.addEventListener("mouseenter", () => {
    gsap.to(img, { scale: 1.05, duration: 0.3 });
    if (overlay) gsap.to(overlay, { opacity: 1, duration: 0.3 });
  });

  container.addEventListener("mouseleave", () => {
    gsap.to(img, { scale: 1, duration: 0.3 });
    if (overlay) gsap.to(overlay, { opacity: 0, duration: 0.3 });
  });
});

