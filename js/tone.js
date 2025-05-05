const audioCtx = new window.AudioContext();
var gainNode = audioCtx.createGain();
var tone = null;
gainNode.gain.value = 1;

function playTone()
{
   tone = audioCtx.createOscillator();
   tone.type = "sine";
   tone.frequency.setValueAtTime(freq, audioCtx.currentTime);
   tone.connect(gainNode).connect(audioCtx.destination);
   tone.start();
}

function stopTone()
{
   tone.stop();
}
