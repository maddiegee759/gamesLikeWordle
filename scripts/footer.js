(() => {
    const footerMarkup = `
        <footer class="footer">
            <p>Inspired by <a href="https://listdle.com/" target="_blank">Listdle</a></p>
            <p>Created by Maddie Gee</p>
            <button class="footer-icon">
            <a href="https://www.linkedin.com/in/maddie-gee-b40829289/" target="_blank">
                <img src="./assets/linkedin_icon.png" width="30">
            </a>
            </button>

            <button class="footer-icon">
            <a href="https://github.com/maddiegee759" target="_blank">
                <img src="./assets/github_icon.png" width="30">
            </a>
            </button>

            <button class="footer-icon">
            <a href="mailto:maddie.gee.759@gmail.com">
                <img src="./assets/email_icon.webp" width="30">
            </a>
            </button>
        </footer>
    `;

    function mountFooter() {
        if (document.querySelector('.footer')) {
            return;
        }

        const template = document.createElement('template');
        template.innerHTML = footerMarkup.trim();
        document.body.appendChild(template.content.firstElementChild);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', mountFooter, { once: true });
    } else {
        mountFooter();
    }
})();
