#!/usr/bin/env node

const chatGPT = require("../src/chatGPT.js");
const { program } = require("commander");

program.version("0.0.1", "-v, --vers", "output the current version");

program
  .argument("<ask>", "ask")
  .description("Faz uma pergunta para o ChatGpt")
  .action((ask) => {
    chatGPT.createCompletion(ask);
  });

program.parse(process.argv);
