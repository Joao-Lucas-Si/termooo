export default function Button({action, title, type} : {action: ()=> void, title: string, type: "negative"|"positive"|"neutral"|"cancel"}) {
    const element = document.createElement("button")
    element.type = "button"
    element.textContent = title
    element.classList.add("btn", type === "negative" ? "btn-danger" : type === "neutral" ? "btn-secondary": type === "cancel" ? "btn-close" : "btn-primary")
    element.addEventListener("click", action)
    return element
}