import { readFileSync, writeFileSync } from "fs";
import path from "path";
import express from "express"

export interface latimWord {
    normal: string,
    transformed: string
}

const server = express()

server.use(express.static(path.join(__dirname, "/../static")))


const latimCharacters = {"ç": "c", "á": "a", "é": "e", "ê": "e", "í": "i", "ú": "u", "ã": "a", "â": "a", "ó": "o"}

let words = readFileSync(path.join(__dirname, "../static/words.txt"))
    .toString()
    .split(",")
    .map<latimWord|string>(word => {
        if (word.split("").some(char => char in latimCharacters)) {
            let transformed = word
            let character: keyof typeof latimCharacters
            for (character in latimCharacters) {
                transformed = transformed.replaceAll(character, latimCharacters[character])
            }
            return {
                normal: word,
                transformed
            }
        }
        else return word
    })


server.get("/words", (req, res)=> {
    res
        .status(200)
        .json(words)
})

server.get("/", (req, res) => {
    res
        .status(200)
        .send(readFileSync(path.join(__dirname, "/../static/index.html")))
})

const port = 6969
server.listen(port, ()=> {
    console.log(`servidor rodando na porta ${port}`)
})


