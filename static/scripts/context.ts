import { latimWord } from "../../src"
import config from "./config"
import gameHandler from "./gameHandler"
import { gameOverModal, winModal } from "./main"

export default {
    get currentLetter() {
        return realContext.currentLetter
    },
    set currentLetter(value: number) {
        realContext.currentLetter = value
        gameHandler.defineCurrents()
    },
    get currentLine() {
        return realContext.currentLine
    },
    set currentLine(value: number) {
        realContext.currentLine = value

        gameHandler.validateWord(value - 1)
        realContext.word = ["", "", "", "", ""]
    },
    getCurrentSpan(table: number) {
        return realContext.tables[table][realContext.currentLine][realContext.currentLetter]
    },
    addTable() {
        realContext.tables.push([])
        return realContext.tables.length - 1
    },
    addLine(table: number) {
        realContext.tables[table].push([])
        return realContext.tables[table].length - 1
    },
    addLetter(table: number, line: number, letter: HTMLSpanElement): 0|1|2|3|4 {
        realContext.tables[table][line].push(letter)
        return (realContext.tables[table][line].length - 1) as 0|1|2|3|4
    },
    set responses(responses: (string|latimWord)[]) {
        realContext.responses = responses
        gameHandler.changeLossMessage()
    },
    reset() {
        realContext = createContext()
        this.isLoss = false
        this.isWin = false
    },
    get tables() {
        return realContext.tables
    },
    get wordIsComplete() {
        return realContext.word.reduce((accumulation, current) => accumulation && !!current, true)
    },
    get word() {
        return realContext.word
    },
    setLetter(position: number, letter: string) {
        realContext.word[position] = letter
    },
    get responses() {
        return realContext.responses
    },
    isValidResponse(response: string) {
        return realContext.responses.findIndex(res => typeof res === "string" ? res === response : res.transformed === response)
    },
    get isWin() {
        return realContext.isWin
    },
    set isWin(isWin: boolean) {
        realContext.isWin = isWin
        
        gameHandler.toggleWinModal()
    }, 
    get isLoss() {
        return realContext.isLoss
    },
    set isLoss(isLoss: boolean) {
        realContext.isLoss = isLoss

        gameHandler.toggleLossModal()
    },
    get completes() {
        return realContext.completes
    },
    addComplete(complete: number) {
        realContext.completes.push(complete)
    }
}
const createContext = (): Context => ({
    currentLetter: 0,
    currentLine: 0,
    tables: [],
    isWin: false,
    isLoss: false,
    word: ["", "", "", "", ""],
    responses: [],
    completes: []
})

interface Context {
    currentLetter: number,
    currentLine: number,
    isWin: boolean,
    isLoss: boolean,
    tables: HTMLSpanElement[][][],
    word: string[],
    responses: (string|latimWord)[],
    completes: number[]
}

let realContext: Context = createContext()