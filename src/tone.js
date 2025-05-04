const audio = new window.AudioContext();
var tone = null;

function playTone()
{
   tone = audio.createOscillator();
   tone.type = "sine";
   tone.frequency.setValueAtTime(frequency, audio.currentTime);
   tone.connect(audio.destination);
   tone.start();
}

function stopTone()
{
   tone.stop();
}
