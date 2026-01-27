document.addEventListener("DOMContentLoaded", () => {
  const headers = document.querySelectorAll('.info-header');
  const speed = 100;

  headers.forEach(header => {
    const container = header.parentElement;
    const containerWidth = container.offsetWidth;
    const textWidth = header.scrollWidth;

    header.style.setProperty('--container-width', `${containerWidth}px`);

    const totalDistance = textWidth + containerWidth;
    const duration = totalDistance / speed;
    
    header.style.animationDuration = `${duration}s`;
  });
});