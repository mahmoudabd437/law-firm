let arrowUp = document.querySelector(".arrow-up");

const toggleArrowUp = () => {
  if (window.scrollY > 0) {
    arrowUp.classList.add("active");
  } else {
    arrowUp.classList.remove("active");
  }
};

let isScrolling;
window.addEventListener("scroll", () => {
  clearTimeout(isScrolling);
  isScrolling = setTimeout(toggleArrowUp, 100);
});

arrowUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
