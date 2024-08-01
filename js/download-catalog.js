function validateForm() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const empresa = document.getElementById('empresa').value;
    const downloadLink = document.getElementById('downloadLink');

    if (nome && email && empresa) {
        downloadLink.classList.remove('disabled');
        downloadLink.href = "./files/teste-pdf.pdf";
    } else {
        downloadLink.classList.add('disabled');
        downloadLink.removeAttribute('href');
    }
}

function submitForm(event) {
    event.preventDefault();
    validateForm();
    if (!document.getElementById('downloadLink').classList.contains('disabled')) {
        document.getElementById('downloadLink').click();
    }
}