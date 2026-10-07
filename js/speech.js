'use strict';

// Озвучка английских слов и фраз голосом браузера (Web Speech API).

const isSpeechSupported = 'speechSynthesis' in window;
let englishVoice = null;

function findEnglishVoice() {
  const voices = speechSynthesis.getVoices();
  for (const voice of voices) {
    if (voice.lang === 'en-US') {
      englishVoice = voice;
      return;
    }
  }
  // Точного совпадения нет — берём любой английский голос (например, en-GB)
  for (const voice of voices) {
    if (voice.lang.startsWith('en')) {
      englishVoice = voice;
      return;
    }
  }
}

function speak(text) {
  if (!isSpeechSupported || !text) {
    return;
  }
  speechSynthesis.cancel(); // прерываем то, что звучит сейчас

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = 0.9;
  if (englishVoice) {
    utterance.voice = englishVoice;
  }
  speechSynthesis.speak(utterance);
}

function stopSpeaking() {
  if (isSpeechSupported) {
    speechSynthesis.cancel();
  }
}

if (isSpeechSupported) {
  findEnglishVoice();
  // В некоторых браузерах список голосов загружается не сразу
  speechSynthesis.onvoiceschanged = findEnglishVoice;
} else {
  // Без озвучки кнопки с динамиком скрываются (см. .no-speech в style.css)
  document.documentElement.classList.add('no-speech');
}

// Кнопки с динамиком есть по всему сайту, поэтому слушаем клики на всей странице.
// Текст для озвучки лежит в атрибуте data-text.
document.addEventListener('click', function (event) {
  const button = event.target.closest('.speak-button');
  if (button) {
    speak(button.dataset.text);
  }
});
