import { portugueseWord } from "../../src";
import Table from "./components/Table";
import config from "./config";
import context from "./context";
import gameHandler from "./gameHandler";
import { root } from "./main";
import getRandomItem from "./services/getRandomItem";

export default function play() {
  const responses: (string | portugueseWord)[] = [];
  root.innerHTML = "";
  for (let table = 0; table < config.mode; table++) {
    responses.push(getRandomItem(config.words));
    root.appendChild(Table());
  }
  context.responses = responses;
  gameHandler.defineCurrents();
}
