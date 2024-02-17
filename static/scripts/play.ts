import { latimWord } from "../../src";
import Table from "./components/Table";
import config from "./config";
import context from "./context";
import gameHandler from "./gameHandler";
import { root } from "./main";

export default function play() {
    const responses: (string|latimWord)[] = []
    root.innerHTML=""
    for (let table = 0; table < config.mode; table++) {
        responses.push(config.words[Math.floor(Math.random()*config.words.length)])
        root.appendChild(Table())
    }
    context.responses = responses
    gameHandler.defineCurrents()
}