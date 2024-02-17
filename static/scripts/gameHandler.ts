import config from "./config"
import context from "./context"
import { gameOverModal, winModal } from "./main"

export default {
    removeCurrents() {
        const currents = document.querySelectorAll("span.current")
        currents.forEach(current => {
            current.classList.remove("border-primary", "current")
            current.classList.add("border-light")
        })
    },
    defineCurrents() {
        this.removeCurrents()
        for (let i=0;i< config.mode;i++) {
            const letter = context.getCurrentSpan(i)
            letter.classList.add("border-primary", "current", "border")
            letter.classList.remove("border-light")
        }
    },
    validateWord(wordIndex: number) {
        for (let i=0; i < config.mode; i++) {
            const word = context.tables[i][wordIndex]
            word.forEach((letter, position) => {
                const response = context.responses[i]
                const responseValue = (typeof response === "string" ? response : response.transformed)
                letter.classList.remove("bg-transparent")
                
                letter.classList.add(
                    (responseValue[position].toUpperCase() === letter.textContent && config.difficulty !== "hard") ? "bg-success" :
                    responseValue.includes(letter.textContent?.toLowerCase() ?? "") ? "bg-warning" :
                    "bg-danger"
                )
            })
        }
        
    },
    changeLossMessage() {
    const message = document.querySelector("#game-over-message")
    if (message) message.textContent = `
    você perdeu, gostaria de tentar de novo? \n
    respostas corretas: ${context.responses.map(response => typeof response === "string" ? response : response.normal).join(", ")}
        `
    },
    toggleWinModal() {
        winModal.style.display = context.isWin ? "block" : "none"
    },
    toggleLossModal() {
        gameOverModal.style.display = context.isLoss ? "block" : "none"
    },
    toggleConfigModal() {
        gameOverModal.style.display = context.configIsOpen ? "block" : "none"
    },
}