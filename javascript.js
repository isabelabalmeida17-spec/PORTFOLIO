window.addEventListener('scroll', function() {
    // Pega o botão pelo ID
    const btnTopo = document.getElementById('seta-inicial');
    
    // Se a rolagem vertical for maior que 300 pixels
    if (window.scrollY > 300) {
        // Mostra o botão
        btnTopo.style.opacity = '1';
        btnTopo.style.visibility = 'visible';
    } else {
        // Esconde o botão
        btnTopo.style.opacity = '0';
        btnTopo.style.visibility = 'hidden';
    }
});