function moveButtonRandomly(button) {
  const buttonWidth = button.offsetWidth;
  const buttonHeight = button.offsetHeight;

  // Obter as dimensões do body
  const bodyRect = document.body.getBoundingClientRect();

  // Ajustar minX e minY para a posição do canto superior esquerdo do body
  const minX = bodyRect.left;
  const minY = bodyRect.top;

  // Ajustar maxX e maxY com base nas dimensões do body
  const maxX = bodyRect.width - buttonWidth;
  const maxY = bodyRect.height - buttonHeight;

  // Calcular posições aleatórias dentro dos limites ajustados
  const randomX = Math.random() * (maxX - minX) + minX;
  const randomY = Math.random() * (maxY - minY) + minY;

  // Aplicar as novas posições ao botão
  button.style.position = "absolute";
  button.style.left = `${randomX}px`;
  button.style.top = `${randomY}px`;
}

document.getElementById("button2").addEventListener("mouseover", function () {
  moveButtonRandomly(this);
});

document.getElementById("button2").addEventListener("click", function () {
  moveButtonRandomly(this);
});

document.getElementById("button1").addEventListener("click", function () {
  // Redirecionar para outra página
  window.location.href = "aceito.html"; // Substitua 'outra_pagina.html' pelo URL da página desejada
});
