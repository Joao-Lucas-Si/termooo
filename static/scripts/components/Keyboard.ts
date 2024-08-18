import KeyWord from "./KeyWord";

export default function Keyboard() {
  const element = document.createElement("div");
  element.classList.add("d-flex", "flex-column", "gap-1");
  const alphabet = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L", ["<", "BACKSPACE"]],
    ["Z", "X", "C", "V", "B", "N", "M", "ENTER"],
  ];
  alphabet.forEach((line) => {
    const container = document.createElement("div");

    container.classList.add("d-flex", "gap-1", "justify-content-center");

    line.forEach((character) => {
      const text = character instanceof Array ? character[0] : character;
      const value = character instanceof Array ? character[1] : character;
      const special = ["BACKSPACE", "ENTER"].includes(value)
      container.appendChild(KeyWord(text, value, special));
    });
    element.appendChild(container);
  });

  return element;
}
