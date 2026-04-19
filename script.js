function filterActive(btn) {
    // Toggle active state on buttons
    document.querySelectorAll('.ftab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const label = (btn.textContent || '').trim().toLowerCase();
    let category = null;
    if (label === 'all items' || label === 'all') {
        category = 'all';
    } else if (label === 'cakes') {
        category = 'cookiecakes';
    } else {
        category = label; // 'cookies' or 'breads'
    }

    const cards = Array.from(document.querySelectorAll('.pcard'));
    let visible = 0;
    cards.forEach(card => {
        const cat = card.getAttribute('data-category');
        const show = (category === 'all') || (cat === category);
        card.style.display = show ? '' : 'none';
        if (show) visible++;
    });

    const countEl = document.querySelector('.shop-count');
    if (countEl) countEl.textContent = `${visible} Product${visible === 1 ? '' : 's'}`;
}

function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3000);
}
function sendMessage() {
    showToast("Message sent. We'll be in touch soon!");
}

function toggleDetails(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.toggle('hidden');
}

function subjectChanged(value) {
    const el = document.getElementById('custom-order-fields');
    if (!el) return;
    if (value === 'custom') el.classList.remove('hidden');
    else el.classList.add('hidden');
}