document.addEventListener("DOMContentLoaded", () => {
  // === Scroll Progress Bar ===
  const progressBar = document.getElementById("progress-bar");
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = `${scrollPercent}%`;
  });

  // === Reveal Sections on Scroll ===
  const sections = document.querySelectorAll("section");
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        sectionObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => sectionObserver.observe(section));

  // === Timeline Entry Animations ===
  const timelineEntries = document.querySelectorAll(".timeline-entry");
  const timelineObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("left")) {
          entry.target.classList.add("visible-left");
        } else if (entry.target.classList.contains("right")) {
          entry.target.classList.add("visible-right");
        }
        timelineObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  timelineEntries.forEach(entry => timelineObserver.observe(entry));

  // === Quote Slider ===
  let quoteIndex = 0;
  const slides = document.querySelectorAll(".quote-slide");
  function showNextSlide() {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[quoteIndex].classList.add("active");
    quoteIndex = (quoteIndex + 1) % slides.length;
  }
  if (slides.length > 0) {
    showNextSlide();
    setInterval(showNextSlide, 5000);
  }

  // === Dark Mode Toggle ===
  document.getElementById("darkToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});
