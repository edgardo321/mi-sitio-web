document.addEventListener('DOMContentLoaded', function() {
    console.log('Sitio cargado correctamente');

    var navLinks = document.querySelectorAll('nav ul li a');
    var currentPath = window.location.pathname.split('/').pop();

    navLinks.forEach(function(link) {
        var linkPath = link.getAttribute('href');
        if (linkPath === currentPath || (linkPath === 'index.html' && currentPath === '')) {
            link.classList.add('activo');
        }
    });
});