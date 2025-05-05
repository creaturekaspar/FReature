const canvasCtx = document.getElementById("graph").getContext("2d");
var dataPoints = [];

fetch("../assets/test.txt")
.then(response => response.text())
.then(text =>
{
   rows = text.trim().split("\n");
   dataPoints = rows.map(row =>
   {
      const [x, y] = row.trim().split(/\s+/).map(Number);
      return { x, y };
   })

   new Chart(canvasCtx,
   {
      type: "line",
      data:
      {
         datasets:
         [{
            label: "dB",
            data: dataPoints,
            pointRadius: 0,
            tension: 0.1,
            borderColor: "#a7c080"
         }],
      },
      options:
      {
         scales:
         {
            x:
            {
               min: 20,
               max: 20000,
               type: "logarithmic",
               title:
               {
                  display: true,
                  text: "hz",
                  color: "#4f5b58" 
               },
               grid:
               {
                  color: "#4f5b58"
               },
               ticks:
               {
                  callback: function (value, index, ticks)
                  {
                     if (value >= 1000)
                     {
                        return (value / 1000) + "k"
                     }
                     return value;
                  },
                  maxTicksLimit: 16,
                  color: "#aa9d82"
               }
            },
            y:
            {
               min: 40,
               max: 80,
               type: "linear",
               title:
               {
                  display: true,
                  text: "dB",
                  color: "#4f5b58" 
               },
               grid:
               {
                  color: "#4f5b58"
               },
               ticks:
               {
                  color: "#aa9d82"
               }
            }
         },
         plugins:
         {
            legend:
            {
               display: false
            }
         },
         animation: false,
         responsive: false
      }
   });
});