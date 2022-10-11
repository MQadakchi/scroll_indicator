const scroll = document.querySelector(".scroll");

window.addEventListener("scroll", (e) => {
  const docHeight = document.documentElement.scrollHeight;
  const winHeight = window.innerHeight;
  const scrolled = window.scrollY;
  const res = (scrolled / (docHeight - winHeight)) * 100;
  scroll.style.width = `${res}%`;
});
