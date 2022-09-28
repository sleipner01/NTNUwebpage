/*
const nav = document.getElementById("nav");

//Search
const sectionOne = document.getElementById("header");

const sectionOneOptions = {
  rootMargin: "-150px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      nav.children[0].classList.add("nav-section-in-screen");
    } else {
      nav.children[0].classList.remove("nav-section-in-screen");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

//Popular
const sectionTwo = document.getElementById("popular");

const sectionTwoOptions = {
  rootMargin: "-100px 0px -700px 0px"
};

const sectionTwoObserver = new IntersectionObserver(function(
  entries,
  sectionTwoObserver
) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      nav.children[1].classList.add("nav-section-in-screen");
    } else {
      nav.children[1].classList.remove("nav-section-in-screen");
    }
  });
},
sectionTwoOptions);

sectionTwoObserver.observe(sectionTwo);


//About
const sectionThree = document.getElementById("about");

const sectionThreeOptions = {
  rootMargin: "-100px 0px -700px 0px"
};

const sectionThreeObserver = new IntersectionObserver(function(
  entries,
  sectionThreeObserver
) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      nav.children[2].classList.add("nav-section-in-screen");
    } else {
      nav.children[2].classList.remove("nav-section-in-screen");
    }
  });
},
sectionThreeOptions);

sectionThreeObserver.observe(sectionThree);


//Contact
const sectionFour = document.getElementById("contact");

const sectionFourOptions = {
  rootMargin: "0px 0px -700px 0px"
};

const sectionFourObserver = new IntersectionObserver(function(
  entries,
  sectionFourObserver
) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      nav.children[3].classList.add("nav-section-in-screen");
    } else {
      nav.children[3].classList.remove("nav-section-in-screen");
    }
  });
},
sectionFourOptions);

sectionFourObserver.observe(sectionFour);
/*
//V2 - Attempt on shorter code, using arrays
const sections = document.getElementsByTagName("section");
*/

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
