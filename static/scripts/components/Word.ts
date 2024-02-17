import config from "../config"
import context from "../context"
import Letter from "./Letter"

export default function Word(table: number) {
    const element = document.createElement("div")

    element.classList.add("row", "d-flex", config.mode === 4 ? "gap-2" : "gap-4")
    const position = context.addLine(table)
    for (let i = 0; i < 5; i++) {
        element.appendChild(Letter(table, position))
    }
    return element
}