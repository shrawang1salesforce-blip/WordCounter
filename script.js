const textArea = document.querySelector("#writing-area");
const wordCount = document.querySelector("#word-count");
const characterCount = document.querySelector("#character-count");
const sentenceCount = document.querySelector("#sentence-count");
const readingTime = document.querySelector("#reading-time");
const characterLimit = document.querySelector("#character-limit");
const clearButton = document.querySelector("#clear-button");

function countWords(text) {
  const trimmedText = text.trim();
  return trimmedText ? trimmedText.split(/\s+/).length : 0;
}

function countSentences(text) {
  const sentences = text.match(/[^.!?]+[.!?]+(?=\s|$)/g);
  return sentences ? sentences.length : 0;
}

function updateCounts() {
  const text = textArea.value;
  const words = countWords(text);
  const characters = text.length;
  const sentences = countSentences(text);
  const minutes = Math.max(1, Math.ceil(words / 200));

  wordCount.textContent = words.toLocaleString();
  characterCount.textContent = characters.toLocaleString();
  sentenceCount.textContent = sentences.toLocaleString();
  characterLimit.textContent = `${characters.toLocaleString()} / 10,000 characters`;
  readingTime.textContent = words
    ? `${minutes} min read`
    : "Ready when you are";
}

textArea.addEventListener("input", updateCounts);

clearButton.addEventListener("click", () => {
  textArea.value = "";
  updateCounts();
  textArea.focus();
});

updateCounts();
