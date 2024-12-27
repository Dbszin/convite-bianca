const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
const container = document.querySelector('.container');

// Limites para o "NÃO" aparecer em volta do centro
const movementRadius = 200; // Define o raio ao redor do botão "SIM"

noButton.addEventListener('mouseenter', () => {
    const centerX = yesButton.offsetLeft + yesButton.offsetWidth / 2;
    const centerY = yesButton.offsetTop + yesButton.offsetHeight / 2;

    // Calcula uma posição aleatória ao redor do centro
    const angle = Math.random() * 4 * Math.PI; // Ângulo aleatório
    const distance = Math.random() * movementRadius; // Distância dentro do raio

    const randomX = centerX + distance * Math.cos(angle);
    const randomY = centerY + distance * Math.sin(angle);

    // Aplica as novas posições ao botão "NÃO"
    noButton.style.right = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
    
});

// Ao clicar em "SIM", exibe a mensagem final
yesButton.addEventListener('click', () => {
    container.innerHTML = '<h1>Eu te espero no altar ❤️</h1>';
});
