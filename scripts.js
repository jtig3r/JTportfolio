function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("footer-placeholder").innerHTML = `
        <footer>
            <div class="footer__section">
                <div class="footer__connect__container">
                    <h1 class="footer__text__h1">this doesn't have to be the end, let's connect!</h1>
                    <div class="footer__pic__contact_icons">
                        <a href="mailto: jenny.tiger@live.se"><img class="footer__contact_icon" src="assets/images/icon_mail.png" alt="mail icon"></a>
                        <a href="https://www.linkedin.com/in/jenny-tiger-6198a4276/" target=”_blank”><img class="footer__contact_icon" src="assets/images/icon_linkedIn.png" alt="LinkedIn icon"></a>
                        <a href="https://github.com/jtig3r" target=”_blank”><img class="footer__contact_icon" src="assets/images/icon_github.png" alt="github icon"></a>
                        <a href="https://www.facebook.com/jenny.tiger.31/" target=”_blank”><img class="footer__contact_icon" src="assets/images/icon_facebook.png" alt="facebook icon"></a>
                    </div>
                </div>
                <div class="footer__nav-links__container">
                    <ul class="nav-links">
                        <li><a href="studio.html">Studio</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="projects.html">Projects</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
            </div>
            <p class="footer__text_p">2025. By Jenny Tiger</p>
        </footer>
    `;
});
