export default function Button({
  action,
  title,
  type,
  attrs,
}: {
  action: () => void;
  title: string;
  type: "negative" | "positive" | "neutral" | "cancel";
  attrs?: { [i: string]: string };
}) {
  const element = document.createElement("button");
  element.type = "button";
  element.textContent = title;
  if (attrs)
    Object.entries(attrs).forEach(([name, value]) =>
      element.setAttribute(name, value)
    );
  element.classList.add(
    "btn",
    type === "negative"
      ? "btn-danger"
      : type === "neutral"
      ? "btn-secondary"
      : type === "cancel"
      ? "btn-close"
      : "btn-primary"
  );
  element.addEventListener("click", action);
  return element;
}
