document.addEventListener('DOMContentLoaded', function() {
    // Mise à jour de l'année du copyright dans le footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Gestion du menu de navigation pour mobile (bouton hamburger)
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    if (menuToggle && navList) {
        menuToggle.addEventListener('click', function() {
            navList.classList.toggle('active'); // Ajoute/retire la classe 'active' pour afficher/masquer le menu
        });

        // Fermer le menu si on clique en dehors
        document.addEventListener('click', function(event) {
            if (!navList.contains(event.target) && !menuToggle.contains(event.target)) {
                navList.classList.remove('active');
            }
        });
    }

    // Gestion de la soumission du formulaire de contact (simple démonstration)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Empêche l'envoi réel du formulaire

            // Récupérer les valeurs des champs
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Simple validation (peut être améliorée pour des messages d'erreur spécifiques)
            if (name === '' || email === '' || message === '') {
                alert('Veuillez remplir tous les champs obligatoires du formulaire (Nom, Email, Message).');
                return;
            }

            // Ici, vous enverriez normalement les données à un serveur via AJAX (fetch API)
            // Pour cette démo, nous simulons l'envoi et affichons un message
            console.log('Nom:', name);
            console.log('Email:', email);
            console.log('Sujet:', subject);
            console.log('Message:', message);

            alert('Votre message a été envoyé avec succès ! Nous vous répondrons bientôt.');
            contactForm.reset(); // Réinitialiser le formulaire après l'envoi
        });
    }

    // Ajouter la classe 'active' au lien de navigation de la page actuelle
    // Ceci met en évidence la page sur laquelle l'utilisateur se trouve
    const navLinks = document.querySelectorAll('.main-nav .nav-list a');
    // window.location.pathname donne le chemin complet (ex: /mon-site-pagne/apropos.html)
    // .split('/').pop() récupère juste le nom du fichier (ex: apropos.html)
    const currentPath = window.location.pathname.split('/').pop(); 

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href'); // Récupère le chemin du lien (ex: apropos.html)
        // Compare le chemin du lien avec le chemin de la page actuelle
        // Gère aussi le cas de la page d'accueil (index.html ou juste '/')
        if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
            link.classList.add('active');
        }
    });

});