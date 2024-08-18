"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const server = (0, express_1.default)();
server.use(express_1.default.static(path_1.default.join(__dirname, "static")));
const portugueseCharacters = {
  ç: "c",
  á: "a",
  é: "e",
  è: "e",
  ù: "u",
  à: "a",
  ê: "e",
  í: "i",
  ú: "u",
  ã: "a",
  â: "a",
  ó: "o",
};
let words = (0, fs_1.readFileSync)(
  path_1.default.join(__dirname, "/static/words.txt")
)
  .toString()
  .split(",")
  .map((word) => {
    if (word.split("").some((char) => char in portugueseCharacters)) {
      let transformed = word;
      let character;
      for (character in portugueseCharacters) {
        transformed = transformed.replaceAll(
          character,
          portugueseCharacters[character]
        );
      }
      return {
        normal: word,
        transformed,
      };
    } else return word;
  });
server.get("/words", (req, res) => {
  res.status(200).json(words);
});
server.get("/", (req, res) => {
  res
    .status(200)
    .send(
      (0, fs_1.readFileSync)(
        path_1.default.join(__dirname, "/../static/index.html")
      )
    );
});
const port = 6969;
server.listen(port, () => {
  console.log(`servidor rodando na porta ${port}`);
});
