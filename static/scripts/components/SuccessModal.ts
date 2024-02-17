import context from "../context";
import play from "../play";
import Modal from "./Modal";

export default function SuccessModal() {   
    const close = () => context.isWin = false
    const message = document.createElement("p")

    message.textContent = `
        parabéns, você ganhou!!!
        gostaria de jogar de novo?
    `
    const modal = Modal({
        title: "Você ganhou",
        body: [message],
        buttons: [
            {
                action: () =>{
                    context.reset()
                    play()
 
                },
                title: "jogar de novo",
                type: "positive"
            }
        ]
    })

    return modal
}