export default function MediaQuery(
  element: HTMLElement,
  styles: { small: string[]; big: string[] }
) {
  let isMobile = false;
  let smallScreenSize = 900;

  function setStyles(isFirt = false) {
    let metche = window.matchMedia(`(max-width: ${smallScreenSize}px)`).matches;
    if (metche != isMobile || isFirt) {
      if (metche) {
        element.classList.remove(...styles.big);
        element.classList.add(...styles.small);
      } else {
        element.classList.remove(...styles.small);
        element.classList.add(...styles.big);
      }
      isMobile = metche;
    }
  }

  setStyles(true);
  setInterval(setStyles, 1000);
}
