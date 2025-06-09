const toggleButton = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    toggleButton.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });

    document.addEventListener("click", (event) => {
      const isClickInside = navLinks.contains(event.target) || toggleButton.contains(event.target);
      if (!isClickInside) {
        navLinks.classList.remove("open");
      }
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
      });
    });
