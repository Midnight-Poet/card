gsap.registerPlugin(ScrollTrigger);

let set = document.querySelector("main");
let stage = document.querySelector(".stages");
let setchild = gsap.utils.toArray(set.children);
let stagechild = gsap.utils.toArray(stage.children);

console.log(stagechild);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      let index = setchild.findIndex((num) => {
        return num === entry.target;
      });
      if (entry.isIntersecting) {
        console.log(stagechild[index]);
        stagechild[index].classList.replace("inactive", "active");
      } else {
        console.log(stagechild[index])
        console.log(stagechild[index]);
        stagechild[index].classList.replace("active", "inactive");
      }
    });
  },
  { threshold: 0.5 }
);

setchild.forEach((element) => {
  observer.observe(element);
});
