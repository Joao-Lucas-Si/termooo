import { latimWord } from "../../src"

export default {
    get mode() {
        return realConfig.mode
    },
    set mode(mode) {
        realConfig.mode = mode
    },
    get attemptCount() {
        return realConfig.attemptCount
    },
    set attemptCount(attempts) {
        realConfig.attemptCount = attempts
    },
    get words() {
        return realConfig.words
    },
    set words(words: (string|latimWord)[]) {
        realConfig.words = words
    },
    get difficulty() {
        return realConfig.difficulty
    },
    set difficulty(difficulty: string) {
        realConfig.difficulty = difficulty === "hard" ? "hard" : "normal"
    }
}

interface Config {
    mode: number,
    attemptCount: number,
    difficulty: "normal"|"hard",
    words: (latimWord|string)[]
}

const emptyConfig: Config = {
    mode: 1,
    attemptCount: 6,
    difficulty: "normal",
    words: []
}

const realConfig: Config = emptyConfig