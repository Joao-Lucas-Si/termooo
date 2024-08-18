"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsdom_1 = require("jsdom");
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
async function getWords() {
    console.log("rodando");
    const response = await fetch("https://www.dicio.com.br/palavras-com-cinco-letras/");
    const content = await response.text();
    const document = new jsdom_1.JSDOM(content).window.document;
    const wordsLists = Array.from(document.querySelectorAll("#content > div.col-xs-12.col-md-8.card.new-advanced-search-card.mb20 > p")).slice(1);
    const words = wordsLists.map(wordList => wordList.innerHTML).join("<br>").split("<br>").map(word => word.replaceAll(" ", "").replaceAll("\n", "")).filter(word => !!word);
    return words;
}
getWords().then(words => {
    (0, fs_1.writeFileSync)(path_1.default.join(__dirname, "../static/words.txt"), words.join(","));
});
