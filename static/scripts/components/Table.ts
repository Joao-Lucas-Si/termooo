import config from "../config"
import context from "../context"
import Word from "./Word"

export default function Table() {
    const element = document.createElement("div")

    element.classList.add("col", "d-flex", "flex-column", config.attemptCount > 7 ? "gap-2" :  "gap-4")
    const position = context.addTable()
    for (let i=0; i< config.attemptCount; i++) {
        element.appendChild(Word(position))
    }

    return element
}