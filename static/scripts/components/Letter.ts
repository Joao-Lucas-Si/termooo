import config from "../config"
import context from "../context"

export default function Letter(table: number, line: number) {
    const element = document.createElement("span")

    element.classList.add("border", "border-4", "border-light", "rounded", "p-2", "col", config.mode === 1 ? "h2": config.mode === 2 ? "h3" : "h4", "bg-transparent", "text-center", "d-flex", "align-items-center", "justify-content-center")
    const position = context.addLetter(table, line, element)
    element.style.height = "1.75em"
    element.addEventListener("click", (e) => {
        e.preventDefault()
        if (context.currentLine === line) context.currentLetter = position
    })
    
    return element
}