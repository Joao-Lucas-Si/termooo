import config from "../config";
import context from "../context";
import Button from "./Button";
import Modal from "./Modal";
import Radios from "./Radios";

export default function ConfigModal() {
    let difficulty = config.difficulty
    const difficultyRadios = Radios({
        onChange: (value) => difficulty = value,
        defaultValue: difficulty,
        name: "difficulty",
        radios: [
            {
                id: "normal-difficulty",
                title: "normal",
                value: "normal"
            },
            {
                id: "hard-difficulty",
                title: "difícil",
                value: "hard"
            },
        ],
        title: "dificuldade"
    })
    let mode = config.mode
    const modeRadios = Radios({
        onChange: (value) => mode = parseInt(value),
        name: "mode",
        defaultValue: String(mode),
        radios: [
            {
                id: "mode-1",
                title: "um",
                value: "1"
            },
            {
                id: "mode-2",
                title: "dois",
                value: "2"
            },
            {
                id: "mode-4",
                title: "quatro",
                value: "4"
            },
        ],
        title: "modo"
    })
    let attempts = config.attemptCount
    const attemptsRadios = Radios({
        onChange: (value) => attempts = parseInt(value),
        defaultValue: String(attempts),
        name: "attempts",
        radios: [
            {
                id: "attempt-1",
                title: "seis",
                value: "6"
            },
            {
                id: "attempt-2",
                title: "oito",
                value: "8"
            },
            {
                id: "attempt-4",
                title: "nove",
                value: "9"
            },
        ],
        title: "tentativas"
    })
    const modal = Modal({
        title: "configurações",
        id: "config-modal",
        body: [
            modeRadios,
            attemptsRadios,
            difficultyRadios
        ],
        buttons: [
            {
                action: () => {
                    window.location.href = `/?dificuldade=${difficulty}&modo=${mode}&tentativas=${attempts}`
                },
                title: "salvar",
                type: "positive"
            },
            {
                action: () => {
                    window.location.href = "/"
                },
                title: "resetar",
                type: "negative"
            }
        ],
        withClose: true
    })

    return modal
}