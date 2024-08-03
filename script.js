document.addEventListener('DOMContentLoaded', () => {
    const heart = document.querySelector('.heart');
    const card = document.querySelector('.card');
    
    heart.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});
