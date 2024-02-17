export default function Radios({defaultValue, radios, name, title, onChange}: {defaultValue: string, name: string, onChange: (value: string) => void, radios: Omit<Parameters<typeof Radio>["0"], "onChange"|"name"|"checked">[], title: string}) {
    const container = document.createElement("div")
    const titleElement = document.createElement("h4")
    titleElement.textContent = title
    const radiosContainer = document.createElement("div")
    console.log(defaultValue)
    radiosContainer.append(...radios.map(radio => Radio({...radio, checked: radio.value === defaultValue, name, onChange})))

    container.append(titleElement, radiosContainer)
    return container
}

function Radio({name, title, onChange, value, id, checked}: {onChange: (value: string) => void, name: string, title: string, value: string, id: string, checked: boolean}) {
    const container = document.createElement("div")
    container.classList.add("form-check")
    const label = document.createElement("label")
    label.classList.add("form-check-label")
    label.textContent = title
    label.id = id
    label.htmlFor = id
    const input = document.createElement("input")
    input.classList.add("form-check-input")
    input.type = "radio"
    input.value = value
    input.checked = checked
    input.name = name
    // @ts-ignore
    input.addEventListener("change", () => onChange(value)) 
    container.append(input, label)
    return container
}