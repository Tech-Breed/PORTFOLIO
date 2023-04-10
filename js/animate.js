const reveal = document.querySelector('.reveal');

window.addEventListener('scroll', () => {
  if (isElementInViewport(reveal)) {
    reveal.classList.add('reveal-show');
  }
});

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
