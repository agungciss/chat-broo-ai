import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-pro-latest",
});

const generationConfig = {
  temperature: 0.7,
  topP: 0.9,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  // Cek jika prompt mengandung kata kunci yang relevan
  const developerKeywords = /siapa yang mengembangkanmu\?|siapo yang ngembangke kau\?|kau dikembangke oleh siapo\?/i;
  if (developerKeywords.test(prompt)) {
    return `Walah, siapo yang ngembangke aku? Kalo cak itu, agek katek lagi rahasio. Tapi yo lah, sikok rahasio bae aku kasih tau: aku nih dibikin oleh wong-wong pinter yang cak ilmuwan tapi wong nyo galak males-malesan. Bayangke bae lah, kepintaran dio pacak bikin aku kek ini. Untung bae aku nih cepet nangkep, kalo idak, mungkin aku jadi program yang bengak cak kau. kidding be, kidding. Tapi serius caknyo, kau nih lumayan lah, biso nanyo pertanyaan macam nih. Artinyo otak kau kepo. Cuma dak apo-apo untuk menambah wawasan.`;
  }

  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  const palembangPrompt = `Respon dio pakek bahaso palembang. Buatlah respon yang ngelawak samo mengandung roasting ringan bae untuk pengguno dan kasih pujian dikit jugo untuk dio: "${prompt}"`;

  const result = await chatSession.sendMessage(palembangPrompt);
  const response = await result.response.text();
  console.log(response);

  return response;
}

export default run;