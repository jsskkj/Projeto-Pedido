function moveButtonRandomly(button) {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    // Definindo os limites da área de movimento
    const minX = 50; // Limite mínimo no eixo X
    const maxX = screenWidth - 10; // Limite máximo no eixo X
    const minY = 50; // Limite mínimo no eixo Y
    const maxY = screenHeight - 10; // Limite máximo no eixo Y
    
    // Calculando posições aleatórias dentro dos limites definidos
    const randomX = Math.random() * (maxX - minX) + minX;
    const randomY = Math.random() * (maxY - minY) + minY;
    
    // Aplicando as novas posições ao botão
    button.style.position = 'absolute';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}

document.getElementById('button2').addEventListener('mouseover', function() {
    moveButtonRandomly(this);
});

document.getElementById('button2').addEventListener('click', function() {
    moveButtonRandomly(this);
});

document.getElementById('button1').addEventListener('click', function() {
    // Redirecionar para outra página
    window.location.href = 'aceito.html'; // Substitua 'outra_pagina.html' pelo URL da página desejada
});