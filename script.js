 const hamburger = document.getElementById('hamburger-btn');
        const navMenu = document.getElementById('nav-menu');
        const navLinks = document.querySelectorAll('#nav-menu a');

        // Toggle Open/Close on Hamburger Click
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close dropdown menu when any link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });