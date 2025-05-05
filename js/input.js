const freqSlider = document.getElementById("freqSlider");
const freqValue = document.getElementById("freqValue");
const gainSlider = document.getElementById("gainSlider");
const gainValue = document.getElementById("gainValue");
const button = document.getElementById("button");
freqSlider.value = 0;
gainSlider.value = 1;

var freq = 20;
var gain = 1;
var gainDb = 0;
var playing = false;

freqSlider.oninput = function ()
{
   freq = Math.round(Math.pow(10, Math.log10(20) + (this.value * (Math.log10(20000) - Math.log10(20)))));
   freqValue.textContent = freq;
   if (playing)
   {
      tone.frequency.setValueAtTime(freq, audioCtx.currentTime);
   }
};

gainSlider.oninput = function ()
{
   gain = this.value;
   if (gain == 0)
   {
      gainValue.textContent = "-∞ dB"
   }
   else
   {
      gainDb = parseFloat((20 * Math.log10(gain)).toFixed(1));
      gainValue.textContent = gainDb + " dB";
   }
   gainNode.gain.value = gain;
};

button.onclick = function ()
{
   if (!playing)
   {
      playTone();
      this.textContent = "stop";
   }
   else
   {
      stopTone();
      this.textContent = "play";
   }
   playing = !playing
};