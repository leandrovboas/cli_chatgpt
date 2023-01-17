const { Configuration, OpenAIApi } = require("openai");
const chalk = require("chalk");
require("dotenv").config();

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_KEY
});

const openaiApi = new OpenAIApi(configuration);

async function createCompletion(ask) {
  try {
    const response = await openaiApi.createCompletion({
      model: "text-davinci-003",
      prompt: ask,
      max_tokens: 64,
      temperature: 0,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ["\n"]
    });
    var text = response.data.choices[0].text;
    if (!text) {
      console.log(
        `${chalk.yellowBright("Não obtivemos um! resposta no momento ")}`
      );
    } else {
      console.log(`${chalk.blue(response.data.choices[0].text)}`);
    }
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  createCompletion
};
