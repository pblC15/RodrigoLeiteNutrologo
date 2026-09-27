(function () {
    "use strict";

    var WHATSAPP_NUMBER = "5541988080497"; // (41) 98808-0497

    /* Menu mobile */
    var toggle = document.querySelector(".menu-toggle");
    var mobileMenu = document.querySelector(".menu-mobile-content");

    if (toggle && mobileMenu) {
        toggle.addEventListener("click", function () {
            var isOpen = toggle.classList.toggle("is-open");
            mobileMenu.classList.toggle("is-open", isOpen);
            toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
        });

        mobileMenu.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                toggle.classList.remove("is-open");
                mobileMenu.classList.remove("is-open");
                toggle.setAttribute("aria-expanded", "false");
            });
        });
    }

    /* Header: leve sombra ao rolar (puramente visual, via classe) */
    var header = document.querySelector("header");
    function onScroll() {
        if (!header) return;
        header.classList.toggle("is-scrolled", window.scrollY > 12);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    /* Formulário de contato: como o site é 100% estático (sem backend de
       e-mail configurado), o envio monta a mensagem e abre o WhatsApp do
       consultório já preenchido, evitando o problema do formulário antigo
       que não enviava a mensagem a lugar nenhum. */
    var form = document.querySelector("section.contato form");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            var name = (form.querySelector("#id_name") || {}).value || "";
            var email = (form.querySelector("#id_email") || {}).value || "";
            var tel = (form.querySelector("#id_tel") || {}).value || "";
            var message = (form.querySelector("#id_menssage") || {}).value || "";

            if (!name.trim() || !message.trim()) {
                alert("Por favor, preencha ao menos o nome e a mensagem.");
                return;
            }

            var text = "Olá, Dr. Rodrigo! Meu nome é " + name +
                (tel ? " (telefone: " + tel + ")" : "") +
                (email ? " (email: " + email + ")" : "") +
                ".\n\nMensagem: " + message;

            var url = "https://api.whatsapp.com/send?phone=" + WHATSAPP_NUMBER +
                "&text=" + encodeURIComponent(text);

            window.open(url, "_blank", "noopener");
        });
    }
})();
