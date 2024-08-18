import config from "../config";
import context from "../context";
import MediaQuery from "../services/MediaQuery";

export default function Letter(table: number, line: number) {
  const element = document.createElement("span");

  MediaQuery(element, {
    small: [config.mode === 1 ? "fs-3" : "fs-6", "border-2"],
    big: [
      config.mode === 1 ? "fs-3" : config.mode === 2 ? "fs-4" : "fs-5",
      "border-4",
    ],
  });

  element.classList.add(
    "border",
    "border-light",
    "fw-bold",
    "rounded",
    "p-2",
    "bg-transparent",
    "text-center",
    "d-flex",
    "align-items-center",
    "justify-content-center"
  );
  const position = context.addLetter(table, line, element);

  element.textContent = " ";
  element.style.height = "1.75em";
  element.style.width = "1.75em";

  element.addEventListener("click", (e) => {
    e.preventDefault();
    if (context.currentLine === line) context.currentLetter = position;
  });

  return element;
}
