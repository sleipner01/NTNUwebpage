const nav = document.getElementById("nav")
const sections = document.querySelectorAll("section");

const options = {
  root: null, // It is the viewport
  threshold: 0.525,
  rootMargin: "0px"
};

const observer = new IntersectionObserver(function
  (entries, observer) {
    entries.forEach(entry => {
      nav.children[entry.target.id].children[0].classList.add("nav-section-in-screen");

      if(!entry.isIntersecting) {
        nav.children[entry.target.id].children[0].classList.remove("nav-section-in-screen");
      }
    });
  }, options);

sections.forEach(section => {
  observer.observe(section);
});
