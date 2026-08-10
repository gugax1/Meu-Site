// Esconde a foto de perfil automaticamente caso o arquivo de imagem
// não seja encontrado (evita ícone de "imagem quebrada" na tela).
document.addEventListener('DOMContentLoaded', function () {
    const avatar = document.querySelector('.avatar');
    if (avatar) {
        avatar.addEventListener('error', function () {
            avatar.style.display = 'none';
        });
    }
});