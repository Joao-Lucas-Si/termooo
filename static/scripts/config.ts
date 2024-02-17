import { latimWord } from "../../src"

export default {
    get mode() {
        return realConfig.mode
    },
    get attemptCount() {
        return realConfig.attemptCount
    },
    get words() {
        return realConfig.words
    },
    set words(words: (string|latimWord)[]) {
        realConfig.words = words
    }
}

interface Config {
    mode: 1|2|4,
    attemptCount: number,
    words: (latimWord|string)[]
}

const emptyConfig: Config = {
    mode: 2,
    attemptCount: 3,
    words: []
    
}

const realConfig: Config = emptyConfig