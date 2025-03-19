document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
  
    // Proveri širinu ekrana
    if (window.innerWidth > 900) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
          navbar.classList.remove("transparent");
          navbar.classList.add("solid");
        } else {
          navbar.classList.remove("solid");
          navbar.classList.add("transparent");
        }
      });
    }
  });
  
  