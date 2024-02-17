
import config from "./config"
import context from "./context"
import gameHandler from "./gameHandler"

export default function inputHandler(e: KeyboardEvent) {
    const character = e.key.toUpperCase()

    const validCharacters = ["q","w","e","r","t","y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"].map(char => char.toUpperCase())
    if (context.isWin || context.isLoss) return
    else if (validCharacters.includes(character)) {
        const position = context.currentLetter
        for (let i=0; i < config.mode; i++) {
            const element = context.getCurrentSpan(i)
            element.textContent = character
            context.setLetter(position as 0|1|2|3|4, character)
        }
        if (position < 4) context.currentLetter = position + 1
    }
    else if (character === "ENTER" && context.wordIsComplete) {
        const responseIndex = context.isValidResponse(context.word.join("").toLocaleLowerCase())
        
        if (responseIndex !== -1 && context.completes.length + 1 === context.responses.length && !context.completes.includes(responseIndex)) {
            gameHandler.validateWord(context.currentLine)
            context.isWin = true
        }
        else if (responseIndex !== -1) {
            console.log(`${context.word.join("")}: ${!context.completes.includes(responseIndex)}`)
            if (!context.completes.includes(responseIndex)) context.completes.push(responseIndex)
            context.currentLine += 1
            context.currentLetter = 0
        }
        else if (context.currentLine === config.attemptCount - 1) {
            context.isLoss = true
        }
        else {
            context.currentLine += 1
            context.currentLetter = 0
        }
    }
    else if (character === "ARROWLEFT") {
        if (context.currentLetter > 0) context.currentLetter -= 1
    }
    else if (character === "ARROWRIGHT") {
        if (context.currentLetter < 4) context.currentLetter += 1
    }
    else if (["DELETE", "BACKSPACE"].includes(character)) {
        const position = context.currentLetter
        if (position > 0 && context.word[position] === "") {
            context.currentLetter -= 1
            for (let i=0; i < config.mode; i++) {
                const element = context.getCurrentSpan(i)
                element.textContent = ""
                context.setLetter(position - 1, "")
            }
        }
        else for (let i=0; i < config.mode; i++) {
            const element = context.getCurrentSpan(i)
            element.textContent = ""
            context.setLetter(position, "")
        }
    }
}