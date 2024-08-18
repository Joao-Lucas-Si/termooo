import { portugueseWord } from "../../src";
import ConfigModal from "./components/ConfigModal";
import GameOverModal from "./components/GameOverModal";
import Keyboard from "./components/Keyboard";
import SuccessModal from "./components/SuccessModal";
import Table from "./components/Table";
import Word from "./components/Word";
import config from "./config";
import context from "./context";
import inputHandler from "./inputHandler";
import play from "./play";
import MediaQuery from "./services/MediaQuery";

interface Config {
  mode: "unico" | "duplo" | "triplo" | "quatuplo";
  difficulty: "hard" | "normal" | "easy";
}

const gameRoot = document.querySelector("#game-root") as HTMLDivElement;

const root = document.querySelector("#root") as HTMLDivElement;

const queryString = window.location.search;

const params = new URLSearchParams(queryString);

if (params.has("tentativas")) {
  config.attemptCount = parseInt(params.get("tentativas") as string);
}
if (params.has("modo")) {
  config.mode = parseInt(params.get("modo") as string);
}
if (params.has("dificuldade")) {
  config.difficulty = params.get("dificuldade") as string;
}

MediaQuery(root, {
  small: [config.mode >= 3 ? "four-tables-mobile" : "d-flex", "gap-3"],
  big: ["d-flex", "gap-5"],
});

const winModal = SuccessModal();
document.body.appendChild(winModal);

const gameOverModal = GameOverModal();
document.body.appendChild(gameOverModal);

const configModal = ConfigModal();
document.body.appendChild(configModal);

const winButton = document.querySelector<HTMLButtonElement>("#win-button");
const lossButton = document.querySelector<HTMLButtonElement>("#loss-button");
const dismissWinButton = document.querySelector<HTMLButtonElement>(
  "#dismiss-win-button"
);
const dismissLossButton = document.querySelector<HTMLButtonElement>(
  "#dismiss-loss-button"
);

export {
  winButton,
  dismissWinButton,
  lossButton,
  dismissLossButton,
  configModal,
  root,
};

const resetBtn = document.querySelector<HTMLButtonElement>("#btn-reset");

resetBtn?.addEventListener("click", () => {
  context.reset();
  play();
  resetBtn.blur();
});
fetch("/words").then(async (response) => {
  const words: (string | portugueseWord)[] = await response.json();
  config.words = words;
  play();
  gameRoot.appendChild(Keyboard());
});

window.addEventListener("keydown", inputHandler);
