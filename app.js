const allAnimatedTeasers = document.querySelectorAll(".section-animation");
console.log(allAnimatedTeasers);

gsap.registerPlugin(ScrollTrigger);

if (allAnimatedTeasers) {
  gsap.utils.toArray(allAnimatedTeasers).forEach((animatedTeaser) => {
    let size = window.innerWidth;
    let wrapper = animatedTeaser.querySelector(".teaser-wrapper");
    let wrapperImg = animatedTeaser.querySelector(".teaser-wrapper img");
    let wrapperText = animatedTeaser.querySelector(".teaser-wrapper__text");
    console.log(wrapperText);

    if (wrapper && size > 600) {
      gsap.to(wrapper, {
        scrollTrigger: {
          trigger: animatedTeaser,
          scrub: 0.5,
          pin: true,
          start: "center center",
          end: "bottom -100%",
          toggleClass: "active",
          ease: "power2",
        },
        width: "100vw",
        scale: 1,
      });

      if (wrapperImg) {
        gsap.to(wrapperImg, {
          scrollTrigger: {
            trigger: animatedTeaser,
            scrub: 0.5,
            start: "top bottom",
            end: "bottom 0",
            ease: "power2",
          },
          y: "-30%",
        });
      }

      // Second part of the animation should increase the container to 130vh or 150vh

      //   Third part of the animation
      if (wrapperText) {
        gsap.to(wrapperText, {
          scrollTrigger: {
            trigger: animatedTeaser,
            scrub: 0.5,
            start: "top bottom",
            end: "bottom 0",
            ease: "power2",
          },
          y: "0",
        });
      }
    }
  });
}
