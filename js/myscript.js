document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = Array.from(document.querySelectorAll("section[id]"));

  if (loader) {
    window.setTimeout(() => {
      loader.classList.add("is-hidden");
    }, 2500);

    window.setTimeout(() => {
      loader.style.display = "none";
    }, 3200);
  }

  const updateActiveLink = () => {
    let currentSection = "hero";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        currentSection = section.id;
      }
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      link.classList.toggle("active", href === `#${currentSection}`);
    });
  };

  window.addEventListener("scroll", updateActiveLink);
  updateActiveLink();
});
