document.querySelectorAll('.notizia').forEach(item => {
    item.addEventListener('click', event => {
        const title = item.getAttribute('data-title');
        const date = item.getAttribute('data-date');
        const content = item.getAttribute('data-content');

        document.getElementById('modalTitle').innerText = title;
        document.getElementById('modalDate').innerText = date;
        document.getElementById('modalContent').innerText = content;

        document.getElementById('newsModal').style.display = 'block';
    });
});

document.querySelector('.close-button').addEventListener('click', () => {
    document.getElementById('newsModal').style.display = 'none';
});

window.addEventListener('click', event => {
    if (event.target == document.getElementById('newsModal')) {
        document.getElementById('newsModal').style.display = 'none';
    }
});
