function toggleLike() {
    const button = document.querySelector('.like-button button');
    button.classList.toggle('liked');
    if (button.classList.contains('liked')) {
        button.textContent = '❤️';
    } else {
        button.textContent = '🤍';
    }
}
