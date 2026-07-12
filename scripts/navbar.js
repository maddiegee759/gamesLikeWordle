(() => {
    const navbarMarkup = `
        <nav class="navbar">
            <ul>
                <li class="nav-item">
                    <a href="index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a href="dailyLaptopGames.html">Laptop</a>
                </li>
                <li class="nav-item">
                    <a href="dailyMobileGames.html">Mobile</a>
                </li>
                <li class="nav-item">
                    <a href="allGames.html">All Games</a>
                </li>
                <li class="nav-item">
                    <a href="contact.html">Contact</a>
                </li>
            </ul>
        </nav>
    `;

    function mountNavbar() {
        if (document.querySelector('.navbar')) {
            return;
        }

        const template = document.createElement('template');
        template.innerHTML = navbarMarkup.trim();
        document.body.prepend(template.content.firstElementChild);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', mountNavbar, { once: true });
    } else {
        mountNavbar();
    }
})();
