function recomendarMusica() {
  const humor = document.getElementById("humor").value;
  const recomendacao = document.getElementById("recomendacao");

  const musicas = {
    feliz: [
      "Pharrell Williams - Happy",
      "Anavitória - Pupila",
      "Katy Perry - Firework"
    ],
    triste: [
      "Adele - Someone Like You",
      "Legião Urbana - Pais e Filhos",
      "Billie Eilish - Everything I Wanted"
    ],
    motivado: [
      "Eye of the Tiger - Survivor",
      "Fala - Jota Quest",
      "Imagine Dragons - Believer"
    ],
    romantico: [
      "Ed Sheeran - Perfect",
      "Ana Carolina - Quem de Nós Dois",
      "Luan Santana - Te Esperando"
    ]
  };

  if (humor && musicas[humor]) {
    const sugestoes = musicas[humor];
    const indice = Math.floor(Math.random() * sugestoes.length);
    recomendacao.textContent = `🎵 Recomendação: ${sugestoes[indice]}`;
  } else {
    recomendacao.textContent = "Por favor, escolha um humor!";
  }
}
