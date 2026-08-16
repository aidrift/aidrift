// AIDrift — shared site behaviour

// Mobile nav toggle
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");
if (toggle && links) {
  toggle.addEventListener("click", () => links.classList.toggle("open"));
}

// Highlight the current page in the nav
const here = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-links a").forEach((a) => {
  if (a.getAttribute("href") === here) a.classList.add("active");
});

// Scroll-reveal animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
