document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-inscricao');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        window.location.href = 'confirm.html';
    });
});