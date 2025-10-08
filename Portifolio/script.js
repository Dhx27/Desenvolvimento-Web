
emailjs.init("pzvFpXDU-ne-uKy8UlpU9");

// Botão "Ver mais"
document.querySelectorAll(".toggle-btn").forEach(button => {
    button.addEventListener("click", () => {
        const details = button.nextElementSibling;
        const isVisible = details.style.display === "block";

        document.querySelectorAll(".project-details").forEach(d => d.style.display = "none");
        document.querySelectorAll(".toggle-btn").forEach(b => b.textContent = "Ver mais");

        if (!isVisible) {
            details.style.display = "block";
            button.textContent = "Ver menos";
        }
    });
});

// Botão voltar ao topo
const topBtn = document.getElementById("topBtn");
window.onscroll = () => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};
topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

// Envio do formulário de contato via EmailJS
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    emailjs.sendForm('service_noxe8l1', 'template_1wgw45b', this)
        .then(function () {
            alert('Mensagem enviada com sucesso!');
            document.getElementById('contact-form').reset();
        }, function (error) {
            alert('Erro ao enviar mensagem: ' + JSON.stringify(error));
        });
});