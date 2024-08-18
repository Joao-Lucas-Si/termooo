import config from "../config";
import context from "../context";
import MediaQuery from "../services/MediaQuery";
import Letter from "./Letter";

export default function Word(table: number) {
  const element = document.createElement("div");

  MediaQuery(element, {
    small: [config.mode === 4 ? "gap-1" : "gap-2"],
    big: [config.mode === 4 ? "gap-2" : "gap-3"],
  });

  element.classList.add("d-flex");
  const position = context.addLine(table);
  for (let i = 0; i < 5; i++) {
    element.appendChild(Letter(table, position));
  }
  return element;
}
