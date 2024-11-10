// visibilityObserver.js
export const initializeVisibilityObserver = (elementRefs, callback) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry.target);
        }
      });
    }, { threshold: 0.45 });
  
    elementRefs.forEach((el) => {
      if (el) {
        observer.observe(el);
      }
    });
  
    return observer;
  };
  