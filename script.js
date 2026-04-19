$(document).ready(function () {

    // Filter products
    window.filterActive = function (btn) {

        $('.ftab').removeClass('active');
        $(btn).addClass('active');

        const label = $(btn).text().trim().toLowerCase();
        let category = null;

        if (label === 'all items' || label === 'all') category = 'all';
        else if (label === 'cakes') category = 'cookiecakes';
        else category = label;

        let visible = 0;

        $('.pcard').each(function () {
            const cat = $(this).attr('data-category');
            const show = category === 'all' || cat === category;

            $(this).toggle(show);

            if (show) visible++;
        });

        $('.shop-count').text(
            `${visible} Product${visible === 1 ? '' : 's'}`
        );
    };

    function showToast(msg) {
        const t = document.getElementById('toast');
        t.textContent = msg;
        t.classList.add('show');

        setTimeout(() => t.classList.remove('show'), 3000);
    }

    window.sendMessage = function () {
        showToast("Message sent. We'll be in touch soon!");
    };

    window.toggleDetails = function (id) {
        document.getElementById(id)?.classList.toggle('hidden');
    };

    window.subjectChanged = function (value) {
        const el = document.getElementById('custom-order-fields');

        if (!el) return;

        if (value === 'custom') el.classList.remove('hidden');
        else el.classList.add('hidden');
    };

});