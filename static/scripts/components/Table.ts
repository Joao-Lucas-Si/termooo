import config from "../config";
import context from "../context";
import MediaQuery from "../services/MediaQuery";
import Word from "./Word";

export default function Table() {
  const element = document.createElement("div");

  MediaQuery(element, {
    small: [config.attemptCount > 7 ? "gap-1" : "gap-2"],
    big: [config.attemptCount > 7 ? "gap-2" : "gap-4"],
  });

  element.classList.add("d-flex", "flex-column");
  const position = context.addTable();
  for (let i = 0; i < config.attemptCount; i++) {
    element.appendChild(Word(position));
  }

  return element;
}
