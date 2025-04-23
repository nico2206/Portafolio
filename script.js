document.addEventListener("DOMContentLoaded", () => {
    const faders = document.querySelectorAll(".fade-in");
  
    const appearOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };
  
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      });
    }, appearOptions);
  
    faders.forEach(el => {
      appearOnScroll.observe(el);
    });
  
    // Log al hacer clic en GitHub links
    document.querySelectorAll("a[href*='github.com']").forEach(link => {
      link.addEventListener("click", () => {
        console.log(`Redireccionando a: ${link.href}`);
      });
    });
  });