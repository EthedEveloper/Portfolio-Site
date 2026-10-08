// E the dEveloper — small interactions

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav toggle
const toggle = document.getElementById("navToggle");
const links = document.getElementById("navLinks");
toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
links.addEventListener("click", (e) => {
  if (e.target.tagName === "A") links.classList.remove("open");
});

// Scroll-reveal for elements with .reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Contact form -> opens the visitor's email app addressed to Ethan.
// To collect submissions without an email app later, swap this handler
// for a Formspree (or similar) form action.
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("cfName").value.trim();
  const message = document.getElementById("cfMessage").value.trim();
  const subject = encodeURIComponent("Portfolio contact from " + name);
  const body = encodeURIComponent(message + "\n\n— " + name);
  window.location.href = "mailto:ethan@ethedeveloper.com?subject=" + subject + "&body=" + body;
});
