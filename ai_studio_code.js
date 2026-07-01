document.getElementById('formWhatsApp').addEventListener('submit', function(e) {
    e.preventDefault();

    // Dados do formulário
    const nome = document.getElementById('nome').value;
    const regiao = document.getElementById('regiao').value;
    const mensagem = document.getElementById('mensagem').value;

    // Número do cliente fornecido
    const telefone = "551156126333";

    // Formatação da mensagem (URL Encoding)
    const textoBase = `Olá, Simone Planejados! Gostaria de solicitar um orçamento.%0A%0A` +
                      `*Nome:* ${nome}%0A` +
                      `*Região:* ${regiao}%0A` +
                      `*Necessidade:* ${mensagem}`;

    // Montagem do link
    const linkZap = `https://api.whatsapp.com/send?phone=${telefone}&text=${textoBase}`;

    // Redirecionamento
    window.open(linkZap, '_blank');
});