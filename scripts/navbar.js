(() => {
    const navbarMarkup = `
        <nav class="navbar">
            <ul>
                <li class="nav-item">
                    <a href="../html/home.html">Home</a>
                </li>
                <li class="nav-item">
                    <a href="../html/dailyLaptopGames.html">Laptop</a>
                </li>
                <li class="nav-item">
                    <a href="../html/dailyMobileGames.html">Mobile</a>
                </li>
                <li class="nav-item">
                    <a href="../html/allGames.html">All Games</a>
                </li>
                <li class="nav-item">
                    <a href="../html/contact.html">Contact</a>
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
