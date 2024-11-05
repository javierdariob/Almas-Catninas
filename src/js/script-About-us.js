document.addEventListener('DOMContentLoaded', () => {
    const accordionButtons = document.querySelectorAll('.accordion-title');
    
    accordionButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); // Previene cualquier comportamiento por defecto
            
            const item = button.parentElement;
            const isOpen = button.getAttribute('aria-expanded') === 'true';
            
            // Guarda la posición actual de scroll
            const currentScroll = window.scrollY;
            
            // Cierra todos los acordeones
            accordionButtons.forEach(btn => {
                const accItem = btn.parentElement;
                accItem.classList.remove('active');
                btn.setAttribute('aria-expanded', 'false');
            });
            
            // Abre el acordeón clickeado si estaba cerrado
            if (!isOpen) {
                item.classList.add('active');
                button.setAttribute('aria-expanded', 'true');
            }
            
            // Restaura la posición de scroll
            window.scrollTo({
                top: currentScroll,
                behavior: 'instant' // Evita la animación de scroll
            });
        });

        // Soporte para teclado
        button.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                button.click();
            }
        });
    });
});
window.scrollTo({
    top: currentScroll,
    behavior: 'auto' // Cambia 'instant' por 'auto'
});
