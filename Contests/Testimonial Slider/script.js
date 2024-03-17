// javascript code goes here
const slider = document.querySelector(".slider");
const testimonials = document.querySelectorAll(".testimonial");
const play = document.querySelector(".play-pause");
let isPlaying = false;
let intervalid;
play.addEventListener("click", () => {
  if (isPlaying) {
    clearInterval(intervalid);
    play.textContent = "⏸";
  } else {
    intervalid = setInterval(() => {
      const activeTestimonial = document.querySelector(".testimonial.active");
      activeTestimonial.classList.remove("active");
      let nextTestimonal = activeTestimonial.nextElementSibling;
      if (!nextTestimonal) nextTestimonal = testimonials[0];
      nextTestimonal.classList.add("active");
    }, 1000);
    play.textContent = "▶";
  }
  isPlaying = !isPlaying;
});
