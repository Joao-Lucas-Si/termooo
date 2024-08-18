import MediaQuery from "../services/MediaQuery";

export default function KeyWord(text: string, value: string, special = false) {
  const event = new KeyboardEvent("keydown", { key: value });

  const element = document.createElement("span");

  element.textContent = text;

  MediaQuery(element, {
    small: ["fs-6"],
    big: ["fs-5"],
  });

  element.classList.add(
    "btn",
    "btn-secundary",
    "border-2",
    "border-dark",
    "fw-bold",
    "p-2",
    special ? "bg-primary" : "bg-light"
  );

  element.addEventListener("click", () => {
    window.dispatchEvent(event);
  });

  return element;
}
