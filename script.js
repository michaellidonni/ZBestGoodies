// Highlight filter and show/hide product cards
function filterActive(btn) {
    // clear previous active tab
    document.querySelectorAll('.ftab').forEach(b => b.classList.remove('active'));
    // mark clicked tab active
    btn.classList.add('active');

    // read button label and determine category
    const label = (btn.textContent || '').trim().toLowerCase();
    let category = null;
    if (label === 'all items' || label === 'all') category = 'all';
    else if (label === 'cakes') category = 'cookiecakes';
    else category = label; // 'cookies' or 'breads'

    // show or hide each product card
    const cards = Array.from(document.querySelectorAll('.pcard'));
    let visible = 0;
    cards.forEach(card => {
        const cat = card.getAttribute('data-category');
        const show = (category === 'all') || (cat === category);
        card.style.display = show ? '' : 'none';
        if (show) visible++;
    });

    // update visible product count
    const countEl = document.querySelector('.shop-count');
    if (countEl) countEl.textContent = `${visible} Product${visible === 1 ? '' : 's'}`;
}

// Show a temporary toast message
function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3000);
}
// Placeholder for form submission (currently shows a toast)
function sendMessage() {
    showToast("Message sent. We'll be in touch soon!");
}

// Toggle extra product detail blocks
function toggleDetails(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.toggle('hidden');
}

// Reveal custom-order fields when 'Custom Order' is selected
function subjectChanged(value) {
    const el = document.getElementById('custom-order-fields');
    if (!el) return;
    if (value === 'custom') el.classList.remove('hidden');
    else el.classList.add('hidden');
}