const hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", () => {
  const nav = document.getElementById("navigation");
  if (nav.classList.contains("active")) {
    nav.classList.remove("active");
    hamburger.src = "./images/icon-hamburger.svg";
    return;
  }
  nav.classList.add("active");
  hamburger.src = "./images/icon-close.svg";
});
