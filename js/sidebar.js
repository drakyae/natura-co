document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const fixedClass = 'fixed';
    const scrollDistance = 80; // Distanza di scroll dopo la quale la navbar diventa fissa

    window.addEventListener('scroll', function() {
        let scrollTop = window.scrollY;

        if (scrollTop > scrollDistance) {
            navbar.classList.add(fixedClass);
        } else {
            navbar.classList.remove(fixedClass);
        }
    });

    var cartProducts = document.querySelectorAll('.cart-product');
    
    cartProducts.forEach(function(product) {
        var decreaseButton = product.querySelector('.quantity-decrease');
        var increaseButton = product.querySelector('.quantity-increase');
        var quantityValue = product.querySelector('.quantity-value');
        
        decreaseButton.addEventListener('click', function() {
            var currentQuantity = parseInt(quantityValue.textContent);
            if (currentQuantity > 1) {
                quantityValue.textContent = currentQuantity - 1;
            }
        });
        
        increaseButton.addEventListener('click', function() {
            var currentQuantity = parseInt(quantityValue.textContent);
            quantityValue.textContent = currentQuantity + 1;
        });
    });

    document.getElementById('profile-icon').onclick = function() {
        toggleSidebar('profile-sidebar');
    };

    document.getElementById('cart-icon').onclick = function() {
        toggleSidebar('cart-sidebar');
    };

    document.getElementById('search-icon').onclick = function() {
        toggleSearchBar();
    };

    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.onclick = function() {
            closeAllSidebars();
        };
    });

    function toggleSidebar(sidebarId) {
        var sidebar = document.getElementById(sidebarId);
        if (sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
        } else {
            closeAllSidebars();
            sidebar.classList.add('open');
        }
    }

    function closeSidebar(sidebarId) {
        var sidebar = document.getElementById(sidebarId);
        sidebar.classList.remove('open');
    }

    function closeAllSidebars() {
        var sidebars = document.querySelectorAll('.sidebar');
        sidebars.forEach(function(sidebar) {
            sidebar.classList.remove('open');
        });
        hideSearchBar();
    }

    function toggleSearchBar() {
        var searchBar = document.getElementById('search-bar');
        if (searchBar.classList.contains('show')) {
            hideSearchBar();
        } else {
            closeAllSidebars();
            showSearchBar();
        }
    }

    function showSearchBar() {
        var searchBar = document.getElementById('search-bar');
        searchBar.classList.add('show');
        searchBar.style.display = "block"; // Ensure it occupies space
    }

    function hideSearchBar() {
        var searchBar = document.getElementById('search-bar');
        searchBar.classList.remove('show');
        searchBar.style.display = "none";
    }
});



document.addEventListener('DOMContentLoaded', function() {
    // Aggiungi un listener per l'evento di click sull'icona del cuore
    document.querySelectorAll('.cart-product .heart-icon').forEach(function(heartIcon) {
        heartIcon.addEventListener('click', function() {
            // Cambia lo stato dell'icona del cuore
            if (heartIcon.classList.contains('fa-regular')) {
                heartIcon.classList.remove('fa-regular');
                heartIcon.classList.add('fa-solid');
            } else {
                heartIcon.classList.remove('fa-solid');
                heartIcon.classList.add('fa-regular');
            }

            // Aggiungi o rimuovi la classe 'clicked' per cambiare il colore al click
            heartIcon.classList.toggle('clicked');
        });
    });
});
