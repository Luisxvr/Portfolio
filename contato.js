document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const letter = document.getElementById('letter');
    const sendButtonContainer = document.getElementById('sendButtonContainer');
    const sendButton = document.getElementById('sendButton');
    const successMessage = document.getElementById('successMessage');
    const letterContainer = document.getElementById('letterContainer');

    // Quando o formulário é submetido (primeiro clique)
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Valida o formulário
        if (validateForm()) {
            // Vira a carta
            letter.classList.add('flipped');
            
            // Mostra o botão de enviar
            setTimeout(() => {
                sendButtonContainer.classList.add('visible');
            }, 500);
        }
    });

    // Quando clica no botão de enviar (segundo clique)
    sendButton.addEventListener('click', function() {
        // Animação de envio
        sendButton.textContent = 'Enviando...';
        sendButton.disabled = true;
        
        // Simula o envio (substitua por AJAX real se necessário)
        setTimeout(() => {
            // Esconde a carta e mostra mensagem de sucesso
            letterContainer.style.display = 'none';
            successMessage.style.display = 'block';
            
            // Aqui você pode adicionar o código para enviar realmente o formulário
            // Exemplo: enviarFormularioAJAX();
        }, 2000);
    });

    // Validação simples do formulário
    function validateForm() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (!name || !email || !message) {
            alert('Por favor, preencha todos os campos.');
            return false;
        }
        
        if (!validateEmail(email)) {
            alert('Por favor, insira um e-mail válido.');
            return false;
        }
        
        return true;
    }
    
    // Validação de e-mail simples
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});