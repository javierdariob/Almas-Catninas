function GetMap() {
    var map = new Microsoft.Maps.Map('#footer-map-location', {
        credentials: 'TU_API_KEY',
        center: new Microsoft.Maps.Location(6.2442, -75.5812),
        zoom: 12
    });
}

document.getElementById('footer-supportForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('footer-name').value;
    const whatsapp = document.getElementById('footer-whatsapp').value;
    const email = document.getElementById('footer-email').value;
    const subject = document.getElementById('footer-subject').value;

    if(name && whatsapp && email) {
        alert(`Gracias, ${name}. Nos pondremos en contacto contigo a través de WhatsApp (${whatsapp}) o tu correo electrónico (${email}).`);
    } else {
        alert('Por favor, completa todos los campos.');
    }
});
