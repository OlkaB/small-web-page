(function() {

    /* 
     * CACHE DOM 
     */
    var burgerMenuIcon = document.querySelector('.js-hamburger');
    var navItems = document.querySelectorAll('.js-navWrapper-item');

    /* 
     * BIND EVENTS 
     */
    burgerMenuIcon.addEventListener('click', toggleMenu);


    /* 
     * UTILS 
     */
    function toggleClassOnSelector(selector, classToToggle) {
        selector.classList.toggle(classToToggle);
    }

    /* 
     * FUNCTIONALITIES 
     */
    function toggleMenu() {
        toggleClassOnSelector(burgerMenuIcon, 'open');

        if (burgerMenuIcon.classList.contains('open')) {
            [].map.call(navItems, function(selector) {
                selector.classList.add('expanded');
            });
        } else {
            [].map.call(navItems, function(selector) {
                selector.classList.remove('expanded');
            });
        }
    }

}());