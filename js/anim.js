
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos

var lyricsData = [
    { text: "El la estaba esperando,", time: 16 },
    { text: "con una flor amarilla.", time: 18 },
    { text: "Ella lo estaba soñando,", time: 24 },
    { text: "con la luz en su pupila.", time: 27 },
  
    { text: "Y el amarillo del sol", time: 33 },
    { text: "iluminaba la esquina,", time: 36 },
    { text: "lo sentía tan cercano,", time: 41 },
    { text: "lo sentía desde niña.", time: 44 },
  
    { text: "Ella sabía que él sabía,", time: 47 },
    { text: "que algún día pasaría,", time: 50 },
    { text: "que vendría él a buscarla", time: 53 },
    { text: "con sus flores amarillas.", time: 56 },
  
    { text: "No te apures,", time: 60 },
    { text: "no detengas,", time: 62 },
    { text: "el instante del encuentro,", time: 64 },
    { text: "está dicho que es un hecho.", time: 67 },
    { text: "No la pierdas, no hay derecho,", time: 70 },
    { text: "no te olvides que la vida", time: 73 },
    { text: "casi nunca está dormida.", time: 75 },
  
    { text: "En ese bar desierto,", time: 94 },
    { text: "nos esperaba el encuentro,", time: 97 },
    { text: "ella llegó en limusina,", time: 100 },
    { text: "amarilla, por supuesto.", time: 103 },
  
    { text: "Él se acercó de repente,", time: 110 },
    { text: "la miró tan de frente,", time: 113 },
    { text: "toda una vida soñada,", time: 116 },
    { text: "y no pudo decir nada.", time: 119 },
  
    { text: "Ella sabía que él sabía,", time: 124 },
    { text: "que algún día pasaría,", time: 127 },
    { text: "que vendría él a buscarla", time: 130 },
    { text: "con sus flores amarillas.", time: 133 },
  
    { text: "No te apures,", time: 140 },
    { text: "no detengas,", time: 142 },
    { text: "el instante del encuentro,", time: 144 },
    { text: "está dicho que es un hecho.", time: 147 },
    { text: "No la pierdas, no hay derecho,", time: 150 },
    { text: "no te olvides que la vida", time: 152 },
    { text: "casi nunca está dormida.", time: 154 },
  
    { text: "Flores amarillas...", time: 164 },
  
    { text: "Ella sabía que él sabía,", time: 172 },
    { text: "que algún día pasaría,", time: 175 },
    { text: "que vendría él a buscarla", time: 178 },
    { text: "con sus flores amarillas.", time: 181 },
  
    { text: "Ella sabía que él sabía,", time: 185 },
    { text: "él sabía, ella sabía.", time: 188 },
    { text: "Que él sabía, ella sabía,", time: 191 },
    { text: "y se olvidaron de sus", time: 194 },
    { text: "flores amarillas...", time: 197 }
  ];
  
  
  
// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);