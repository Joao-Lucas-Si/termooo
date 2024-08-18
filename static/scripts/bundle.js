/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./static/scripts/components/Button.ts":
/*!*********************************************!*\
  !*** ./static/scripts/components/Button.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nfunction Button({ action, title, type, attrs, }) {\n    const element = document.createElement(\"button\");\n    element.type = \"button\";\n    element.textContent = title;\n    if (attrs)\n        Object.entries(attrs).forEach(([name, value]) => element.setAttribute(name, value));\n    element.classList.add(\"btn\", type === \"negative\"\n        ? \"btn-danger\"\n        : type === \"neutral\"\n            ? \"btn-secondary\"\n            : type === \"cancel\"\n                ? \"btn-close\"\n                : \"btn-primary\");\n    element.addEventListener(\"click\", action);\n    return element;\n}\nexports[\"default\"] = Button;\n\n\n//# sourceURL=webpack://termoo/./static/scripts/components/Button.ts?");

/***/ }),

/***/ "./static/scripts/components/ConfigModal.ts":
/*!**************************************************!*\
  !*** ./static/scripts/components/ConfigModal.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst config_1 = __importDefault(__webpack_require__(/*! ../config */ \"./static/scripts/config.ts\"));\nconst Modal_1 = __importDefault(__webpack_require__(/*! ./Modal */ \"./static/scripts/components/Modal.ts\"));\nconst Radios_1 = __importDefault(__webpack_require__(/*! ./Radios */ \"./static/scripts/components/Radios.ts\"));\nfunction ConfigModal() {\n    let difficulty = config_1.default.difficulty;\n    const difficultyRadios = (0, Radios_1.default)({\n        onChange: (value) => difficulty = value,\n        defaultValue: difficulty,\n        name: \"difficulty\",\n        radios: [\n            {\n                id: \"normal-difficulty\",\n                title: \"normal\",\n                value: \"normal\"\n            },\n            {\n                id: \"hard-difficulty\",\n                title: \"difícil\",\n                value: \"hard\"\n            },\n        ],\n        title: \"dificuldade\"\n    });\n    let mode = config_1.default.mode;\n    const modeRadios = (0, Radios_1.default)({\n        onChange: (value) => mode = parseInt(value),\n        name: \"mode\",\n        defaultValue: String(mode),\n        radios: [\n            {\n                id: \"mode-1\",\n                title: \"um\",\n                value: \"1\"\n            },\n            {\n                id: \"mode-2\",\n                title: \"dois\",\n                value: \"2\"\n            },\n            {\n                id: \"mode-4\",\n                title: \"quatro\",\n                value: \"4\"\n            },\n        ],\n        title: \"modo\"\n    });\n    let attempts = config_1.default.attemptCount;\n    const attemptsRadios = (0, Radios_1.default)({\n        onChange: (value) => attempts = parseInt(value),\n        defaultValue: String(attempts),\n        name: \"attempts\",\n        radios: [\n            {\n                id: \"attempt-1\",\n                title: \"seis\",\n                value: \"6\"\n            },\n            {\n                id: \"attempt-2\",\n                title: \"oito\",\n                value: \"8\"\n            },\n            {\n                id: \"attempt-4\",\n                title: \"nove\",\n                value: \"9\"\n            },\n        ],\n        title: \"tentativas\"\n    });\n    const modal = (0, Modal_1.default)({\n        title: \"configurações\",\n        id: \"config-modal\",\n        body: [\n            modeRadios,\n            attemptsRadios,\n            difficultyRadios\n        ],\n        buttons: [\n            {\n                action: () => {\n                    window.location.href = `/?dificuldade=${difficulty}&modo=${mode}&tentativas=${attempts}`;\n                },\n                title: \"salvar\",\n                type: \"positive\"\n            },\n            {\n                action: () => {\n                    window.location.href = \"/\";\n                },\n                title: \"resetar\",\n                type: \"negative\"\n            }\n        ],\n        withClose: true\n    });\n    return modal;\n}\nexports[\"default\"] = ConfigModal;\n\n\n//# sourceURL=webpack://termoo/./static/scripts/components/ConfigModal.ts?");

/***/ }),

/***/ "./static/scripts/components/GameOverModal.ts":
/*!****************************************************!*\
  !*** ./static/scripts/components/GameOverModal.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst context_1 = __importDefault(__webpack_require__(/*! ../context */ \"./static/scripts/context.ts\"));\nconst play_1 = __importDefault(__webpack_require__(/*! ../play */ \"./static/scripts/play.ts\"));\nconst Modal_1 = __importDefault(__webpack_require__(/*! ./Modal */ \"./static/scripts/components/Modal.ts\"));\nfunction GameOverModal() {\n    const close = () => context_1.default.isLoss = false;\n    const message = document.createElement(\"p\");\n    message.id = (\"game-over-message\");\n    message.textContent = `\n        você perdeu, gostaria de tentar de novo?\n    `;\n    const modal = (0, Modal_1.default)({\n        title: \"você perdeu\",\n        body: [message],\n        id: \"loss-modal\",\n        buttons: [{\n                type: \"positive\",\n                title: \"jogar de novo\",\n                action: () => {\n                    context_1.default.reset();\n                    (0, play_1.default)();\n                }\n            }]\n    });\n    return modal;\n}\nexports[\"default\"] = GameOverModal;\n\n\n//# sourceURL=webpack://termoo/./static/scripts/components/GameOverModal.ts?");

/***/ }),

/***/ "./static/scripts/components/KeyWord.ts":
/*!**********************************************!*\
  !*** ./static/scripts/components/KeyWord.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst MediaQuery_1 = __importDefault(__webpack_require__(/*! ../services/MediaQuery */ \"./static/scripts/services/MediaQuery.ts\"));\nfunction KeyWord(text, value, special = false) {\n    const event = new KeyboardEvent(\"keydown\", { key: value });\n    const element = document.createElement(\"span\");\n    element.textContent = text;\n    (0, MediaQuery_1.default)(element, {\n        small: [\"fs-6\"],\n        big: [\"fs-5\"],\n    });\n    element.classList.add(\"btn\", \"btn-secundary\", \"border-2\", \"border-dark\", \"fw-bold\", \"p-2\", special ? \"bg-primary\" : \"bg-light\");\n    element.addEventListener(\"click\", () => {\n        window.dispatchEvent(event);\n    });\n    return element;\n}\nexports[\"default\"] = KeyWord;\n\n\n//# sourceURL=webpack://termoo/./static/scripts/components/KeyWord.ts?");

/***/ }),

/***/ "./static/scripts/components/Keyboard.ts":
/*!***********************************************!*\
  !*** ./static/scripts/components/Keyboard.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst KeyWord_1 = __importDefault(__webpack_require__(/*! ./KeyWord */ \"./static/scripts/components/KeyWord.ts\"));\nfunction Keyboard() {\n    const element = document.createElement(\"div\");\n    element.classList.add(\"d-flex\", \"flex-column\", \"gap-1\");\n    const alphabet = [\n        [\"Q\", \"W\", \"E\", \"R\", \"T\", \"Y\", \"U\", \"I\", \"O\", \"P\"],\n        [\"A\", \"S\", \"D\", \"F\", \"G\", \"H\", \"J\", \"K\", \"L\", [\"<\", \"BACKSPACE\"]],\n        [\"Z\", \"X\", \"C\", \"V\", \"B\", \"N\", \"M\", \"ENTER\"],\n    ];\n    alphabet.forEach((line) => {\n        const container = document.createElement(\"div\");\n        container.classList.add(\"d-flex\", \"gap-1\", \"justify-content-center\");\n        line.forEach((character) => {\n            const text = character instanceof Array ? character[0] : character;\n            const value = character instanceof Array ? character[1] : character;\n            const special = [\"BACKSPACE\", \"ENTER\"].includes(value);\n            container.appendChild((0, KeyWord_1.default)(text, value, special));\n        });\n        element.appendChild(container);\n    });\n    return element;\n}\nexports[\"default\"] = Keyboard;\n\n\n//# sourceURL=webpack://termoo/./static/scripts/components/Keyboard.ts?");

/***/ }),

/***/ "./static/scripts/components/Letter.ts":
/*!*********************************************!*\
  !*** ./static/scripts/components/Letter.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst config_1 = __importDefault(__webpack_require__(/*! ../config */ \"./static/scripts/config.ts\"));\nconst context_1 = __importDefault(__webpack_require__(/*! ../context */ \"./static/scripts/context.ts\"));\nconst MediaQuery_1 = __importDefault(__webpack_require__(/*! ../services/MediaQuery */ \"./static/scripts/services/MediaQuery.ts\"));\nfunction Letter(table, line) {\n    const element = document.createElement(\"span\");\n    (0, MediaQuery_1.default)(element, {\n        small: [config_1.default.mode === 1 ? \"fs-3\" : \"fs-6\", \"border-2\"],\n        big: [\n            config_1.default.mode === 1 ? \"fs-3\" : config_1.default.mode === 2 ? \"fs-4\" : \"fs-5\",\n            \"border-4\",\n        ],\n    });\n    element.classList.add(\"border\", \"border-light\", \"fw-bold\", \"rounded\", \"p-2\", \"bg-transparent\", \"text-center\", \"d-flex\", \"align-items-center\", \"justify-content-center\");\n    const position = context_1.default.addLetter(table, line, element);\n    element.textContent = \" \";\n    element.style.height = \"1.75em\";\n    element.style.width = \"1.75em\";\n    element.addEventListener(\"click\", (e) => {\n        e.preventDefault();\n        if (context_1.default.currentLine === line)\n            context_1.default.currentLetter = position;\n    });\n    return element;\n}\nexports[\"default\"] = Letter;\n\n\n//# sourceURL=webpack://termoo/./static/scripts/components/Letter.ts?");

/***/ }),

/***/ "./static/scripts/components/Modal.ts":
/*!********************************************!*\
  !*** ./static/scripts/components/Modal.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Button_1 = __importDefault(__webpack_require__(/*! ./Button */ \"./static/scripts/components/Button.ts\"));\nfunction Modal({ body, title, buttons, withClose, id }) {\n    const container = document.createElement(\"div\");\n    container.classList.add(\"modal\");\n    if (id)\n        container.id = id;\n    container.setAttribute(\"data-bs-backdrop\", \"static\");\n    container.setAttribute(\"data-bs-keyboard\", \"false\");\n    container.style.height = \"100vh\";\n    container.tabIndex = -1;\n    const content = document.createElement(\"div\");\n    content.classList.add(\"modal-content\");\n    const dialog = document.createElement(\"div\");\n    dialog.classList.add(\"modal-dialog\");\n    const header = document.createElement(\"div\");\n    header.classList.add(\"modal-header\");\n    const headerTitle = document.createElement(\"h5\");\n    headerTitle.textContent = title;\n    headerTitle.classList.add(\"modal-title\");\n    header.append(...(withClose ? [headerTitle, (0, Button_1.default)({\n            action: () => { },\n            title: \"\",\n            type: \"cancel\",\n            attrs: {\n                \"data-bs-dismiss\": \"modal\"\n            }\n        })] : [headerTitle]));\n    const footerContainer = document.createElement(\"div\");\n    footerContainer.classList.add(\"modal-footer\");\n    buttons\n        .map(button => ({ ...button, action: () => { button.action(container); } }))\n        .forEach(button => {\n        footerContainer.appendChild((0, Button_1.default)(button));\n    });\n    const bodyContainer = document.createElement(\"div\");\n    bodyContainer.classList.add(\"modal-body\");\n    bodyContainer.append(...body);\n    content.append(header, bodyContainer, footerContainer);\n    dialog.appendChild(content);\n    container.append(dialog);\n    return container;\n}\nexports[\"default\"] = Modal;\n/*\n    <div class=\"modal\" tabindex=\"-1\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Modal title</h5>\n        <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n      </div>\n      <div class=\"modal-body\">\n        <p>Modal body text goes here.</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </div>\n  </div>\n</div>\n*/ \n\n\n//# sourceURL=webpack://termoo/./static/scripts/components/Modal.ts?");

/***/ }),

/***/ "./static/scripts/components/Radios.ts":
/*!*********************************************!*\
  !*** ./static/scripts/components/Radios.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nfunction Radios({ defaultValue, radios, name, title, onChange }) {\n    const container = document.createElement(\"div\");\n    const titleElement = document.createElement(\"h4\");\n    titleElement.textContent = title;\n    const radiosContainer = document.createElement(\"div\");\n    console.log(defaultValue);\n    radiosContainer.append(...radios.map(radio => Radio({ ...radio, checked: radio.value === defaultValue, name, onChange })));\n    container.append(titleElement, radiosContainer);\n    return container;\n}\nexports[\"default\"] = Radios;\nfunction Radio({ name, title, onChange, value, id, checked }) {\n    const container = document.createElement(\"div\");\n    container.classList.add(\"form-check\");\n    const label = document.createElement(\"label\");\n    label.classList.add(\"form-check-label\");\n    label.textContent = title;\n    label.id = id;\n    label.htmlFor = id;\n    const input = document.createElement(\"input\");\n    input.classList.add(\"form-check-input\");\n    input.type = \"radio\";\n    input.value = value;\n    input.checked = checked;\n    input.name = name;\n    // @ts-ignore\n    input.addEventListener(\"change\", () => onChange(value));\n    container.append(input, label);\n    return container;\n}\n\n\n//# sourceURL=webpack://termoo/./static/scripts/components/Radios.ts?");

/***/ }),

/***/ "./static/scripts/components/SuccessModal.ts":
/*!***************************************************!*\
  !*** ./static/scripts/components/SuccessModal.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst context_1 = __importDefault(__webpack_require__(/*! ../context */ \"./static/scripts/context.ts\"));\nconst play_1 = __importDefault(__webpack_require__(/*! ../play */ \"./static/scripts/play.ts\"));\nconst Modal_1 = __importDefault(__webpack_require__(/*! ./Modal */ \"./static/scripts/components/Modal.ts\"));\nfunction SuccessModal() {\n    const close = () => context_1.default.isWin = false;\n    const message = document.createElement(\"p\");\n    message.textContent = `\n        parabéns, você ganhou!!!\n        gostaria de jogar de novo?\n    `;\n    const modal = (0, Modal_1.default)({\n        title: \"Você ganhou\",\n        body: [message],\n        id: \"win-modal\",\n        buttons: [\n            {\n                action: () => {\n                    context_1.default.reset();\n                    (0, play_1.default)();\n                },\n                title: \"jogar de novo\",\n                type: \"positive\"\n            }\n        ]\n    });\n    return modal;\n}\nexports[\"default\"] = SuccessModal;\n\n\n//# sourceURL=webpack://termoo/./static/scripts/components/SuccessModal.ts?");

/***/ }),

/***/ "./static/scripts/components/Table.ts":
/*!********************************************!*\
  !*** ./static/scripts/components/Table.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst config_1 = __importDefault(__webpack_require__(/*! ../config */ \"./static/scripts/config.ts\"));\nconst context_1 = __importDefault(__webpack_require__(/*! ../context */ \"./static/scripts/context.ts\"));\nconst MediaQuery_1 = __importDefault(__webpack_require__(/*! ../services/MediaQuery */ \"./static/scripts/services/MediaQuery.ts\"));\nconst Word_1 = __importDefault(__webpack_require__(/*! ./Word */ \"./static/scripts/components/Word.ts\"));\nfunction Table() {\n    const element = document.createElement(\"div\");\n    (0, MediaQuery_1.default)(element, {\n        small: [config_1.default.attemptCount > 7 ? \"gap-1\" : \"gap-2\"],\n        big: [config_1.default.attemptCount > 7 ? \"gap-2\" : \"gap-4\"],\n    });\n    element.classList.add(\"d-flex\", \"flex-column\");\n    const position = context_1.default.addTable();\n    for (let i = 0; i < config_1.default.attemptCount; i++) {\n        element.appendChild((0, Word_1.default)(position));\n    }\n    return element;\n}\nexports[\"default\"] = Table;\n\n\n//# sourceURL=webpack://termoo/./static/scripts/components/Table.ts?");

/***/ }),

/***/ "./static/scripts/components/Word.ts":
/*!*******************************************!*\
  !*** ./static/scripts/components/Word.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst config_1 = __importDefault(__webpack_require__(/*! ../config */ \"./static/scripts/config.ts\"));\nconst context_1 = __importDefault(__webpack_require__(/*! ../context */ \"./static/scripts/context.ts\"));\nconst MediaQuery_1 = __importDefault(__webpack_require__(/*! ../services/MediaQuery */ \"./static/scripts/services/MediaQuery.ts\"));\nconst Letter_1 = __importDefault(__webpack_require__(/*! ./Letter */ \"./static/scripts/components/Letter.ts\"));\nfunction Word(table) {\n    const element = document.createElement(\"div\");\n    (0, MediaQuery_1.default)(element, {\n        small: [config_1.default.mode === 4 ? \"gap-1\" : \"gap-2\"],\n        big: [config_1.default.mode === 4 ? \"gap-2\" : \"gap-3\"],\n    });\n    element.classList.add(\"d-flex\");\n    const position = context_1.default.addLine(table);\n    for (let i = 0; i < 5; i++) {\n        element.appendChild((0, Letter_1.default)(table, position));\n    }\n    return element;\n}\nexports[\"default\"] = Word;\n\n\n//# sourceURL=webpack://termoo/./static/scripts/components/Word.ts?");

/***/ }),

/***/ "./static/scripts/config.ts":
/*!**********************************!*\
  !*** ./static/scripts/config.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports[\"default\"] = {\n    get mode() {\n        return realConfig.mode;\n    },\n    set mode(mode) {\n        realConfig.mode = mode;\n    },\n    get attemptCount() {\n        return realConfig.attemptCount;\n    },\n    set attemptCount(attempts) {\n        realConfig.attemptCount = attempts;\n    },\n    get words() {\n        return realConfig.words;\n    },\n    set words(words) {\n        realConfig.words = words;\n    },\n    get difficulty() {\n        return realConfig.difficulty;\n    },\n    set difficulty(difficulty) {\n        realConfig.difficulty = difficulty === \"hard\" ? \"hard\" : \"normal\";\n    },\n};\nconst emptyConfig = {\n    mode: 1,\n    attemptCount: 6,\n    difficulty: \"normal\",\n    words: [],\n};\nconst realConfig = emptyConfig;\n\n\n//# sourceURL=webpack://termoo/./static/scripts/config.ts?");

/***/ }),

/***/ "./static/scripts/context.ts":
/*!***********************************!*\
  !*** ./static/scripts/context.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst gameHandler_1 = __importDefault(__webpack_require__(/*! ./gameHandler */ \"./static/scripts/gameHandler.ts\"));\nexports[\"default\"] = {\n    get currentLetter() {\n        return realContext.currentLetter;\n    },\n    set currentLetter(value) {\n        realContext.currentLetter = value;\n        gameHandler_1.default.defineCurrents();\n    },\n    get currentLine() {\n        return realContext.currentLine;\n    },\n    set currentLine(value) {\n        realContext.currentLine = value;\n        gameHandler_1.default.validateWord(value - 1);\n        realContext.word = [\"\", \"\", \"\", \"\", \"\"];\n    },\n    getCurrentSpan(table) {\n        return realContext.tables[table][realContext.currentLine][realContext.currentLetter];\n    },\n    addTable() {\n        realContext.tables.push([]);\n        return realContext.tables.length - 1;\n    },\n    addLine(table) {\n        realContext.tables[table].push([]);\n        return realContext.tables[table].length - 1;\n    },\n    addLetter(table, line, letter) {\n        realContext.tables[table][line].push(letter);\n        return (realContext.tables[table][line].length - 1);\n    },\n    set responses(responses) {\n        realContext.responses = responses;\n        gameHandler_1.default.changeLossMessage();\n    },\n    reset() {\n        realContext = createContext();\n        this.isLoss = false;\n        this.isWin = false;\n    },\n    get tables() {\n        return realContext.tables;\n    },\n    get wordIsComplete() {\n        return realContext.word.reduce((accumulation, current) => accumulation && !!current, true);\n    },\n    get word() {\n        return realContext.word;\n    },\n    setLetter(position, letter) {\n        realContext.word[position] = letter;\n    },\n    get responses() {\n        return realContext.responses;\n    },\n    isValidResponse(response) {\n        return realContext.responses.findIndex((res) => typeof res === \"string\" ? res === response : res.transformed === response);\n    },\n    get isWin() {\n        return realContext.isWin;\n    },\n    set isWin(isWin) {\n        realContext.isWin = isWin;\n        gameHandler_1.default.toggleWinModal();\n    },\n    get isLoss() {\n        return realContext.isLoss;\n    },\n    set isLoss(isLoss) {\n        realContext.isLoss = isLoss;\n        gameHandler_1.default.toggleLossModal();\n    },\n    get completes() {\n        return realContext.completes;\n    },\n    get configIsOpen() {\n        return realContext.configIsOpen;\n    },\n    set configIsOpen(open) {\n        realContext.configIsOpen = open;\n    },\n    addComplete(complete) {\n        realContext.completes.push(complete);\n    },\n};\nconst createContext = () => ({\n    currentLetter: 0,\n    currentLine: 0,\n    tables: [],\n    isWin: false,\n    isLoss: false,\n    configIsOpen: false,\n    word: [\"\", \"\", \"\", \"\", \"\"],\n    responses: [],\n    completes: [],\n});\nlet realContext = createContext();\n\n\n//# sourceURL=webpack://termoo/./static/scripts/context.ts?");

/***/ }),

/***/ "./static/scripts/gameHandler.ts":
/*!***************************************!*\
  !*** ./static/scripts/gameHandler.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst config_1 = __importDefault(__webpack_require__(/*! ./config */ \"./static/scripts/config.ts\"));\nconst context_1 = __importDefault(__webpack_require__(/*! ./context */ \"./static/scripts/context.ts\"));\nconst main_1 = __webpack_require__(/*! ./main */ \"./static/scripts/main.ts\");\nexports[\"default\"] = {\n    removeCurrents() {\n        const currents = document.querySelectorAll(\"span.current\");\n        currents.forEach(current => {\n            current.classList.remove(\"border-primary\", \"current\");\n            current.classList.add(\"border-light\");\n        });\n    },\n    defineCurrents() {\n        this.removeCurrents();\n        for (let i = 0; i < config_1.default.mode; i++) {\n            const letter = context_1.default.getCurrentSpan(i);\n            letter.classList.add(\"border-primary\", \"current\", \"border\");\n            letter.classList.remove(\"border-light\");\n        }\n    },\n    validateWord(wordIndex) {\n        for (let i = 0; i < config_1.default.mode; i++) {\n            const word = context_1.default.tables[i][wordIndex];\n            word.forEach((letter, position) => {\n                const response = context_1.default.responses[i];\n                const responseValue = (typeof response === \"string\" ? response : response.transformed);\n                letter.classList.remove(\"bg-transparent\");\n                letter.classList.add((responseValue[position].toUpperCase() === letter.textContent && config_1.default.difficulty !== \"hard\") ? \"bg-success\" :\n                    responseValue.includes(letter.textContent?.toLowerCase() ?? \"\") ? \"bg-warning\" :\n                        \"bg-danger\");\n            });\n        }\n    },\n    changeLossMessage() {\n        const message = document.querySelector(\"#game-over-message\");\n        if (message)\n            message.textContent = `\n    você perdeu, gostaria de tentar de novo? \\n\n    respostas corretas: ${context_1.default.responses.map(response => typeof response === \"string\" ? response : response.normal).join(\", \")}\n        `;\n    },\n    toggleWinModal() {\n        context_1.default.isWin ? main_1.winButton?.click() : main_1.dismissWinButton?.click();\n    },\n    toggleLossModal() {\n        context_1.default.isLoss ? main_1.lossButton?.click() : main_1.dismissLossButton?.click();\n    },\n};\n\n\n//# sourceURL=webpack://termoo/./static/scripts/gameHandler.ts?");

/***/ }),

/***/ "./static/scripts/inputHandler.ts":
/*!****************************************!*\
  !*** ./static/scripts/inputHandler.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst config_1 = __importDefault(__webpack_require__(/*! ./config */ \"./static/scripts/config.ts\"));\nconst context_1 = __importDefault(__webpack_require__(/*! ./context */ \"./static/scripts/context.ts\"));\nconst gameHandler_1 = __importDefault(__webpack_require__(/*! ./gameHandler */ \"./static/scripts/gameHandler.ts\"));\nfunction inputHandler(e) {\n    const character = e.key.toUpperCase();\n    const validCharacters = [\n        \"q\",\n        \"w\",\n        \"e\",\n        \"r\",\n        \"t\",\n        \"y\",\n        \"u\",\n        \"i\",\n        \"o\",\n        \"p\",\n        \"a\",\n        \"s\",\n        \"d\",\n        \"f\",\n        \"g\",\n        \"h\",\n        \"j\",\n        \"k\",\n        \"l\",\n        \"z\",\n        \"x\",\n        \"c\",\n        \"v\",\n        \"b\",\n        \"n\",\n        \"m\",\n    ].map((char) => char.toUpperCase());\n    if (context_1.default.isWin || context_1.default.isLoss)\n        return;\n    else if (validCharacters.includes(character)) {\n        const position = context_1.default.currentLetter;\n        for (let i = 0; i < config_1.default.mode; i++) {\n            const element = context_1.default.getCurrentSpan(i);\n            element.textContent = character;\n            context_1.default.setLetter(position, character);\n        }\n        if (position < 4)\n            context_1.default.currentLetter = position + 1;\n        if (config_1.default.difficulty === \"hard\" && context_1.default.wordIsComplete)\n            sendWord();\n    }\n    else if (character === \"ENTER\" && context_1.default.wordIsComplete)\n        sendWord();\n    else if (character === \"ARROWLEFT\") {\n        if (context_1.default.currentLetter > 0)\n            context_1.default.currentLetter -= 1;\n    }\n    else if (character === \"ARROWRIGHT\") {\n        if (context_1.default.currentLetter < 4)\n            context_1.default.currentLetter += 1;\n    }\n    else if ([\"DELETE\", \"BACKSPACE\"].includes(character)) {\n        const position = context_1.default.currentLetter;\n        if (position > 0 && context_1.default.word[position] === \"\") {\n            context_1.default.currentLetter -= 1;\n            for (let i = 0; i < config_1.default.mode; i++) {\n                const element = context_1.default.getCurrentSpan(i);\n                element.textContent = \" \";\n                context_1.default.setLetter(position - 1, \"\");\n            }\n        }\n        else\n            for (let i = 0; i < config_1.default.mode; i++) {\n                const element = context_1.default.getCurrentSpan(i);\n                element.textContent = \" \";\n                context_1.default.setLetter(position, \"\");\n            }\n    }\n}\nexports[\"default\"] = inputHandler;\nfunction passLine(responseIndex) {\n    if (responseIndex !== undefined && !context_1.default.completes.includes(responseIndex))\n        context_1.default.completes.push(responseIndex);\n    context_1.default.currentLine += 1;\n    context_1.default.currentLetter = 0;\n}\nfunction sendWord() {\n    const word = context_1.default.word.join(\"\").toLocaleLowerCase();\n    const responseIndex = context_1.default.isValidResponse(word);\n    if (config_1.default.difficulty !== \"hard\" &&\n        !config_1.default.words.some((wr) => typeof wr === \"string\" ? wr === word : wr.transformed === word)) {\n        alert(`a palavra \"${word}\" não existe`);\n    }\n    else if (responseIndex !== -1 &&\n        ((context_1.default.completes.length + 1 === context_1.default.responses.length &&\n            !context_1.default.completes.includes(responseIndex)) ||\n            context_1.default.completes.length === context_1.default.responses.length)) {\n        console.log(context_1.default.currentLine);\n        gameHandler_1.default.validateWord(context_1.default.currentLine);\n        context_1.default.isWin = true;\n    }\n    else if (responseIndex !== -1)\n        passLine(responseIndex);\n    else if (context_1.default.currentLine === config_1.default.attemptCount - 1) {\n        gameHandler_1.default.validateWord(context_1.default.currentLine);\n        context_1.default.isLoss = true;\n    }\n    else\n        passLine();\n}\n\n\n//# sourceURL=webpack://termoo/./static/scripts/inputHandler.ts?");

/***/ }),

/***/ "./static/scripts/main.ts":
/*!********************************!*\
  !*** ./static/scripts/main.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.root = exports.configModal = exports.dismissLossButton = exports.lossButton = exports.dismissWinButton = exports.winButton = void 0;\nconst ConfigModal_1 = __importDefault(__webpack_require__(/*! ./components/ConfigModal */ \"./static/scripts/components/ConfigModal.ts\"));\nconst GameOverModal_1 = __importDefault(__webpack_require__(/*! ./components/GameOverModal */ \"./static/scripts/components/GameOverModal.ts\"));\nconst Keyboard_1 = __importDefault(__webpack_require__(/*! ./components/Keyboard */ \"./static/scripts/components/Keyboard.ts\"));\nconst SuccessModal_1 = __importDefault(__webpack_require__(/*! ./components/SuccessModal */ \"./static/scripts/components/SuccessModal.ts\"));\nconst config_1 = __importDefault(__webpack_require__(/*! ./config */ \"./static/scripts/config.ts\"));\nconst context_1 = __importDefault(__webpack_require__(/*! ./context */ \"./static/scripts/context.ts\"));\nconst inputHandler_1 = __importDefault(__webpack_require__(/*! ./inputHandler */ \"./static/scripts/inputHandler.ts\"));\nconst play_1 = __importDefault(__webpack_require__(/*! ./play */ \"./static/scripts/play.ts\"));\nconst MediaQuery_1 = __importDefault(__webpack_require__(/*! ./services/MediaQuery */ \"./static/scripts/services/MediaQuery.ts\"));\nconst gameRoot = document.querySelector(\"#game-root\");\nconst root = document.querySelector(\"#root\");\nexports.root = root;\nconst queryString = window.location.search;\nconst params = new URLSearchParams(queryString);\nif (params.has(\"tentativas\")) {\n    config_1.default.attemptCount = parseInt(params.get(\"tentativas\"));\n}\nif (params.has(\"modo\")) {\n    config_1.default.mode = parseInt(params.get(\"modo\"));\n}\nif (params.has(\"dificuldade\")) {\n    config_1.default.difficulty = params.get(\"dificuldade\");\n}\n(0, MediaQuery_1.default)(root, {\n    small: [config_1.default.mode >= 3 ? \"four-tables-mobile\" : \"d-flex\", \"gap-3\"],\n    big: [\"d-flex\", \"gap-5\"],\n});\nconst winModal = (0, SuccessModal_1.default)();\ndocument.body.appendChild(winModal);\nconst gameOverModal = (0, GameOverModal_1.default)();\ndocument.body.appendChild(gameOverModal);\nconst configModal = (0, ConfigModal_1.default)();\nexports.configModal = configModal;\ndocument.body.appendChild(configModal);\nconst winButton = document.querySelector(\"#win-button\");\nexports.winButton = winButton;\nconst lossButton = document.querySelector(\"#loss-button\");\nexports.lossButton = lossButton;\nconst dismissWinButton = document.querySelector(\"#dismiss-win-button\");\nexports.dismissWinButton = dismissWinButton;\nconst dismissLossButton = document.querySelector(\"#dismiss-loss-button\");\nexports.dismissLossButton = dismissLossButton;\nconst resetBtn = document.querySelector(\"#btn-reset\");\nresetBtn?.addEventListener(\"click\", () => {\n    context_1.default.reset();\n    (0, play_1.default)();\n    resetBtn.blur();\n});\nfetch(\"/words\").then(async (response) => {\n    const words = await response.json();\n    config_1.default.words = words;\n    (0, play_1.default)();\n    gameRoot.appendChild((0, Keyboard_1.default)());\n});\nwindow.addEventListener(\"keydown\", inputHandler_1.default);\n\n\n//# sourceURL=webpack://termoo/./static/scripts/main.ts?");

/***/ }),

/***/ "./static/scripts/play.ts":
/*!********************************!*\
  !*** ./static/scripts/play.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Table_1 = __importDefault(__webpack_require__(/*! ./components/Table */ \"./static/scripts/components/Table.ts\"));\nconst config_1 = __importDefault(__webpack_require__(/*! ./config */ \"./static/scripts/config.ts\"));\nconst context_1 = __importDefault(__webpack_require__(/*! ./context */ \"./static/scripts/context.ts\"));\nconst gameHandler_1 = __importDefault(__webpack_require__(/*! ./gameHandler */ \"./static/scripts/gameHandler.ts\"));\nconst main_1 = __webpack_require__(/*! ./main */ \"./static/scripts/main.ts\");\nconst getRandomItem_1 = __importDefault(__webpack_require__(/*! ./services/getRandomItem */ \"./static/scripts/services/getRandomItem.ts\"));\nfunction play() {\n    const responses = [];\n    main_1.root.innerHTML = \"\";\n    for (let table = 0; table < config_1.default.mode; table++) {\n        responses.push((0, getRandomItem_1.default)(config_1.default.words));\n        main_1.root.appendChild((0, Table_1.default)());\n    }\n    context_1.default.responses = responses;\n    gameHandler_1.default.defineCurrents();\n}\nexports[\"default\"] = play;\n\n\n//# sourceURL=webpack://termoo/./static/scripts/play.ts?");

/***/ }),

/***/ "./static/scripts/services/MediaQuery.ts":
/*!***********************************************!*\
  !*** ./static/scripts/services/MediaQuery.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nfunction MediaQuery(element, styles) {\n    let isMobile = false;\n    let smallScreenSize = 900;\n    function setStyles(isFirt = false) {\n        let metche = window.matchMedia(`(max-width: ${smallScreenSize}px)`).matches;\n        if (metche != isMobile || isFirt) {\n            if (metche) {\n                element.classList.remove(...styles.big);\n                element.classList.add(...styles.small);\n            }\n            else {\n                element.classList.remove(...styles.small);\n                element.classList.add(...styles.big);\n            }\n            isMobile = metche;\n        }\n    }\n    setStyles(true);\n    setInterval(setStyles, 1000);\n}\nexports[\"default\"] = MediaQuery;\n\n\n//# sourceURL=webpack://termoo/./static/scripts/services/MediaQuery.ts?");

/***/ }),

/***/ "./static/scripts/services/getRandomItem.ts":
/*!**************************************************!*\
  !*** ./static/scripts/services/getRandomItem.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nfunction getRandomItem(list) {\n    return list[Math.floor(Math.random() * list.length)];\n}\nexports[\"default\"] = getRandomItem;\n\n\n//# sourceURL=webpack://termoo/./static/scripts/services/getRandomItem.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./static/scripts/main.ts");
/******/ 	
/******/ })()
;