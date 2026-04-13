function filterActive(btn) {
    document.querySelectorAll('.ftab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3000);
}

function addToCart(item) {
    showToast('Added to cart — ' + item);
}

function sendMessage() {
    showToast("Message sent. We'll be in touch soon!");
}