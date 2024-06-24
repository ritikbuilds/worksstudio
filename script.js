const elems = document.querySelectorAll(".elem");
const page2 = document.querySelector(".page-2");
const scrollUpBtn = document.querySelector(".footer-top i");
const scrollUpText = document.querySelector(".footer-top h1");
const scrollDownBtn = document.querySelector(".page-1 .row i");
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-icon");

function loco() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });

  scrollUpBtn.addEventListener("click", () => {
    scroll.scrollTo(0);
  });

  scrollUpText.addEventListener("click", () => {
    scroll.scrollTo(0);
  });

  scrollDownBtn.addEventListener("click", () => {
    scroll.scrollTo(page2);
  });
}

function loaderAnimation() {
  let tl = gsap.timeline();

  tl.to(".yellow1", {
    transform: `translateY(-100%)`,
    ease: "expo.out",
    delay: 0.5,
  });

  tl.from(
    ".yellow2",
    {
      transform: `translateY(100%)`,
      ease: "expo.out",
      delay: 0.5,
    },
    "flag"
  );

  tl.to(
    ".loader h1",
    {
      color: "#000",
      delay: 0.4,
    },
    "flag"
  );

  tl.to(".loader", {
    opacity: 0,
  });

  tl.to(".loader", {
    display: "none",
  });
}

function marqueeImgAnimation() {
  elems.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
      const bgImg = elem.getAttribute("data-img");
      page2.style.background = `url(${bgImg})`;
    });
  });
}

function ArrowAnimation() {
  let tl = gsap.timeline({ repeat: -1 });

  tl.to(".page-1 .row i", {
    transform: "translateY(-20%)",
    ease: "power1.out",
    duration: 0.5,
  });

  tl.to(".page-1 .row i", {
    transform: "translateY(0)",
    ease: "power1.out",
    duration: 0.5,
  });

  let tl2 = gsap.timeline({ repeat: -1 });

  tl2.to(".footer-top i", {
    transform: "translateY(20%)",
    ease: "power1.out",
    duration: 0.5,
  });

  tl2.to(".footer-top i", {
    transform: "translateY(0)",
    ease: "power1.out",
    duration: 0.5,
  });
}

function menuAnimation() {
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("open-menu");
    menuBtn.classList.toggle("rotate-menu");
  });
}

loco();
menuAnimation();
ArrowAnimation();
loaderAnimation();
marqueeImgAnimation();
