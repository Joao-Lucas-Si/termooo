import { latimWord } from "../../src"
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

const winModal = SuccessModal()
document.body.appendChild(winModal)

const gameOverModal = GameOverModal()
document.body.appendChild(gameOverModal)

export {winModal, gameOverModal, root}

const queryString = window.location.search

const params = new URLSearchParams(queryString)

fetch("/words").then(async (response) => {
    const words: (string|latimWord)[] = await response.json()
    config.words = words
    play()
    
})

if (config.mode === 1) root.classList.add("w-50")
else if (config.mode === 2) root.classList.add("w-75")

window.addEventListener("keydown", inputHandler)