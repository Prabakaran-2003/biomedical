document.addEventListener("DOMContentLoaded", () => {
  const timelineEntries = document.querySelectorAll(".timeline-entry");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("left")) {
          entry.target.classList.add("visible-left");
        } else if (entry.target.classList.contains("right")) {
          entry.target.classList.add("visible-right");
        }
      }
    });
  }, { threshold: 0.2 });

  timelineEntries.forEach(entry => observer.observe(entry));
});
