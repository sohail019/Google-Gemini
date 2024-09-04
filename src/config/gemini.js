import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = "AIzaSyATyPfGWHdFddeSi4GxLKnDV3vs9O-B9og";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.0-pro",
});

const generationConfig = {
  temperature: 0.9,
  topP: 1,
  maxOutputTokens: 2048,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
 // safetySettings: Adjust safety settings
 // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
    ],
  });

  const result = await chatSession.sendMessage(prompt);
  const response = result.response
  // console.log(result.response.text());
  return response.text()
}

export default run;