document.addEventListener('DOMContentLoaded', () => {
    const loadComponent = async (element, file) => {
      const response = await fetch(file);
      const text = await response.text();
      element.innerHTML = text;
    };
  
    loadComponent(document.querySelector('x-nav'), 'nav.html');
    loadComponent(document.querySelector('x-footer'), 'footer.html');
  });
  