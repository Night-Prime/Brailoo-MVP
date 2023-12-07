gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  const navbar = document.querySelector(".navbar");
  console.log("mounted!", navbar);

  gsap.to(".main", {
    scrollTrigger: {
      trigger: ".navbar",
      start: "700 10%",
      end: "4400 20%",
      toggleClass: "navbar-bg",
      markers: true,
      onEnter: () => {
        console.log("Entered!");
      },
    },
  });

  // Horizontal-scroll
  const sections = gsap.utils.toArray(".scroll");
  // setting up a horizontal-scroll
  let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      // scroller: ".main",
      trigger: ".main",
      pin: true,
      scrub: 1,
      end: `+=3200`,
      snap: 1 / (sections.length - 1),
    },
  });

  gsap.fromTo(
    ".hero-title",
    {
      // opacity: 0,
      scale: 0.5,
    },
    {
      // opacity: 1,
      scrollTrigger: {
        trigger: ".hero-inner",
        start: "20% 30%",
        end: "75% center",
        // markers: true,
        scrub: true,
      },
      ease: "linear",
      scale: 1.5,
    }
  );

  // Mission Section
  gsap;
});
