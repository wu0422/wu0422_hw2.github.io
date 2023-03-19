/* 監聽load */
window.addEventListener('load', function() {
    const loader = document.querySelector('.loader');
    const body = document.querySelector('body');
    loader.classList.add('hide');
    body.style.display = 'block';
});
