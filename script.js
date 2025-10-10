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


document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#contato form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Pegando os valores corretamente
        const nome = form.querySelector('input[name="nome"]').value;
        const email = form.querySelector('input[name="email"]').value;
        const mensagem = form.querySelector('textarea[name="mensagem"]').value;

        // Enviando com EmailJS
        emailjs.send("service_dt5ptjq", "template_1wgw45b", {
            from_name: nome,
            from_email: email,
            message: mensagem,
        })
        .then(function() {
            alert("Mensagem enviada com sucesso! 🚀");
            form.reset();
        })
        .catch(function(error) {
            console.error("Erro:", error);
            alert("Erro ao enviar a mensagem ❌");
        });
    });
});
