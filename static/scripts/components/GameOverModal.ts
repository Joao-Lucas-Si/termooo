import context from "../context";
import play from "../play";
import Modal from "./Modal";

export default function GameOverModal() {
    const close = () => context.isLoss = false
    const message = document.createElement("p")
    message.id = ("game-over-message")
    message.textContent = `
        você perdeu, gostaria de tentar de novo?
    `
    const modal = Modal({
        title: "você perdeu",
        body: [message],
        buttons: [{
            type: "positive",
            title: "jogar de novo",
            action: () => {
                context.reset()
                play()
            }
        }],
        close
    })
    return modal
}