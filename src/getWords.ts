import puppeteer from "puppeteer"
import { JSDOM } from "jsdom"
import { fsync, writeFileSync } from "fs"
import path, { dirname } from "path"

async function getWords() {
    console.log("rodando")
    const response = await fetch("https://www.dicio.com.br/palavras-com-cinco-letras/")
    const content = await response.text()
    const document = new JSDOM(content).window.document
    
    const wordsLists = Array.from(document.querySelectorAll("#content > div.col-xs-12.col-md-8.card.new-advanced-search-card.mb20 > p")).slice(1)

    const words = wordsLists.map(wordList => wordList.innerHTML).join("<br>").split("<br>").map(word => word.replaceAll(" ", "").replaceAll("\n", "")).filter(word => !!word)
    return words
}
getWords().then(words => {
    writeFileSync(path.join(__dirname, "../static/words.txt"), words.join(","))
})