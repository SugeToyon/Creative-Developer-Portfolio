const words = ["DEVELOPER", "DESIGNER", "ART DIRECTOR", "CODER"];
let currentIndex = 0;
const dynamicText = document.getElementById("dynamic-text");

if (dynamicText) {
    setInterval(() => {
        dynamicText.style.opacity = 0;
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % words.length;
            dynamicText.textContent = words[currentIndex];
            dynamicText.style.opacity = 1;
        }, 500); 
    }, 3000);
}

gsap.registerPlugin(ScrollTrigger);


let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".pin-master",
    start: "top top", 
    end: "+=200%", 
    scrub: 1, 
    pin: true, 
  }
});


tl.to(".dark-panel", {
  clipPath: "circle(150% at 50% 50%)",
  webkitClipPath: "circle(150% at 50% 50%)",
  duration: 2,
  ease: "none"
})

.to(".about-container", {
  opacity: 1,
  y: 0,
  duration: 1,
  ease: "power2.out"
});
const items = document.querySelectorAll('.project-item');
const fixedTitle = document.querySelector('.fixed-title');

items.forEach(item => {
  item.addEventListener('mouseenter', () => {
    fixedTitle.textContent = item.getAttribute('data-text');
    fixedTitle.style.opacity = 1;
  });

  item.addEventListener('mouseleave', () => {
    fixedTitle.style.opacity = 0;
  });
});

gsap.to(".gallery-inner", {
  x: () => -(document.querySelector(".gallery-inner").scrollWidth - window.innerWidth),
  ease: "power2.inOut", 
  scrollTrigger: {
    trigger: ".horizontal-scroll-section",
    start: "top top",
    end: "+=4000", 
    scrub: 1.5, 
    pin: true,
  }
});

gsap.to(".skills-bg-text", {
  x: "-50vw", 
  y: "60vh",  
  ease: "none", 
  scrollTrigger: {
    trigger: ".skills-section",
    start: "top bottom", 
    end: "bottom top",   
    scrub: 1.5,          
  }
});
gsap.to(".awards-marquee", {
  x: "-50%",
  ease: "none",
  scrollTrigger: {
    trigger: ".awards-section",
    start: "top bottom",
    end: "bottom top",
    scrub: 2
  }
});