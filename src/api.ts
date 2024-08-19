import { readFileSync, writeFileSync } from "fs";
import path from "path";
import express from "express";
import ServerlessHttp from "serverless-http";

export interface portugueseWord {
  normal: string;
  transformed: string;
}

const server = express();

server.use(express.static("./static"));

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

let words = readFileSync("./static/words.txt")
  .toString()
  .split(",")
  .map<portugueseWord | string>((word) => {
    if (word.split("").some((char) => char in portugueseCharacters)) {
      let transformed = word;
      let character: keyof typeof portugueseCharacters;
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
  res.status(200).send(readFileSync("./static/index.html"));
});

// rodar localmente
// const port = 6969;

// server.listen(port, () => {
//   console.log(`servidor rodando na porta ${port}`);
// });

// hospedangem
export const handler = ServerlessHttp(server);
