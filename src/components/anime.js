document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.scroll-reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('opacity-0');
        entry.target.classList.add('animate-fadeIn');
      }
    });
  });

  elements.forEach((el) => {
    observer.observe(el);
  });
});
