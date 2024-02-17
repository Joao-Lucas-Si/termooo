import Button from "./Button"

export default function Modal({body, title, buttons, close}: {body: HTMLElement[], close: ()=> void, title: string, buttons: {
    title: string,
    action: ((modal: HTMLDivElement) => void)|(()=> void),
    type: "negative"|"positive"|"neutral"
}[]}) {
    
    const container = document.createElement("div")
    container.classList.add("modal")
    container.setAttribute("data-bs-backdrop", "static")
    container.setAttribute("data-bs-keyboard", "false")
    container.style.height = "100vh"
    container.tabIndex = -1
    const content = document.createElement("div")
    content.classList.add("modal-content")
    const dialog = document.createElement("div")
    dialog.classList.add("modal-dialog")
    const header = document.createElement("div")
    header.classList.add("modal-header")
    const headerTitle = document.createElement("h5")
    headerTitle.textContent = title
    headerTitle.classList.add("modal-title")
    header.append(
        headerTitle,
        //Button({ action: ()=> close(), title: "", type: "cancel" }),
    )
    const footerContainer = document.createElement("div")
    footerContainer.classList.add("modal-footer")
    buttons
        .map(button => ({...button, action: () => {button.action(container)}}))
        .forEach(button => {
            footerContainer.appendChild(Button(button))
        })
    const bodyContainer = document.createElement("div")
    bodyContainer.classList.add("modal-body")
    bodyContainer.append(...body)
    content.append(header, bodyContainer, footerContainer)
    dialog.appendChild(content)
    container.append(dialog)
    return container
}


/*
    <div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
*/