// The site's only JavaScript. CSS can't read where the mouse is, so this
// passes the position to CSS as --mx and --my (-1 … 1, 0 = centre of the
// screen); style.css uses them to turn the front Bible toward the cursor.
// Everything else works without it.

const root = document.documentElement;

if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
  addEventListener('pointermove', (event) => {
    if (event.pointerType !== 'mouse') return;
    root.style.setProperty('--mx', (event.clientX / innerWidth * 2 - 1).toFixed(3));
    root.style.setProperty('--my', (event.clientY / innerHeight * 2 - 1).toFixed(3));
  }, { passive: true });

  // ease back to the middle when the mouse leaves the window
  root.addEventListener('mouseleave', () => {
    root.style.setProperty('--mx', '0');
    root.style.setProperty('--my', '0');
  });
}
