const freqSlider = document.getElementById("freqSlider");
const freqValue = document.getElementById("freqValue");
const button = document.getElementById("button");
freqSlider.value = 0;

let frequency = 20;
let play = true;

freqSlider.oninput = function ()
{
   if (this.value == 120)
   {
      frequency = 20000;
   }
   else
   {
      frequency = Math.round(20 * Math.pow(2, this.value / 12));
   }
   freqValue.textContent = frequency;
   if (!play)
   {
      tone.frequency.setValueAtTime(frequency, audio.currentTime);
   }
};

button.onclick = function ()
{
   if (play)
   {
      playTone();
      this.textContent = "stop";
   }
   else
   {
      stopTone();
      this.textContent = "play";
   }
   play = !play
};