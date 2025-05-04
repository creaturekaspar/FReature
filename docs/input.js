const freqSlider = document.getElementById("freqSlider");
const freqValue = document.getElementById("freqValue");
const button = document.getElementById("button");
freqSlider.value = 0;

let frequency = 20;
let playing = false;

freqSlider.oninput = function ()
{
   frequency = Math.round(Math.pow(10, Math.log10(20) + (this.value * (Math.log10(20000) - Math.log10(20)))));
   freqValue.textContent = frequency;
   if (playing)
   {
      tone.frequency.setValueAtTime(frequency, audio.currentTime);
   }
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