export default function VoiceNotify() {
  const voiceBR = speechSynthesis
    .getVoices()
    .filter((voice) => voice.lang.includes("BR"))[0];
  const text = document.getElementById("time").innerText;
  const utterance = new SpeechSynthesisUtterance(
    `Faltam 00:${text} para beber outro copão d'água`
  );
  utterance.voice = voiceBR;
  speechSynthesis.speak(utterance);
}
