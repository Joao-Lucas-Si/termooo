import { latimWord } from "../../src"
import ConfigModal from "./components/ConfigModal"
import GameOverModal from "./components/GameOverModal"
import SuccessModal from "./components/SuccessModal"
import Table from "./components/Table"
import Word from "./components/Word"
import config from "./config"
import context from "./context"
import inputHandler from "./inputHandler"
import play from "./play"

interface Config {
    mode: "unico"|"duplo"|"triplo"|"quatuplo",
    difficulty: "hard"|"normal"|"easy"
}

const root = document.querySelector("#root") as HTMLDivElement


const queryString = window.location.search

const params = new URLSearchParams(queryString)

if (params.has("tentativas")) {
    config.attemptCount = parseInt(params.get("tentativas") as string)
}
if (params.has("modo")) {
    config.mode = parseInt(params.get("modo") as string)
}
if (params.has("dificuldade")) {
    config.difficulty = params.get("dificuldade") as string
}
const winModal = SuccessModal()
document.body.appendChild(winModal)

const gameOverModal = GameOverModal()
document.body.appendChild(gameOverModal)


const configModal = ConfigModal()
document.body.appendChild(configModal)

export {winModal, gameOverModal, configModal, root}

const resetBtn = document.querySelector<HTMLButtonElement>("#btn-reset")

resetBtn?.addEventListener("click", () => {
    context.reset()
    play()
    resetBtn.blur()
})
fetch("/words").then(async (response) => {
    const words: (string|latimWord)[] = await response.json()
    config.words = words
    play()
    
})

if (config.mode === 1) root.classList.add("w-50")
else if (config.mode === 2) root.classList.add("w-75")

window.addEventListener("keydown", inputHandler)