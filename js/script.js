(function() {

    /* 
     * CACHE DOM 
     */
    var burgerMenuIcon = document.querySelector('.js-hamburger');
    var navItems = document.querySelectorAll('.js-navWrapper-item');
    var searchIcon = document.querySelector('.js-magnify');
    var searchWrapper = document.querySelector('.js-searchWrapper');
    var loginActivators = document.querySelectorAll('.js-loginIcon, .js-loginLink');
    var loginIcon = document.querySelector('.js-loginIcon');
    var loginForm = document.querySelector('.js-loginForm');
    var revealNewsChevron = document.querySelectorAll('.js-revealNews');

    /* 
     * BIND EVENTS 
     */
    burgerMenuIcon.addEventListener('click', toggleMenu);
    searchIcon.addEventListener('click', toggleSearchField);
    [].forEach.call(loginActivators, function(node) {
        node.addEventListener('click', toggleLoginForm);
    });
    [].forEach.call(revealNewsChevron, function(node) {
        node.addEventListener('click', toggleNews);
    });
    document.addEventListener('click', toggleLoginFormByClickOutsideIt);


    /* 
     * FUNCTIONALITIES 
     */
    function toggleMenu() {
        burgerMenuIcon.classList.toggle('open');
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

    function toggleSearchField() {
        if (innerWidth < 900) {
            searchIcon.classList.toggle('open');
            if (searchIcon.classList.contains('open')) {
                searchWrapper.classList.add('expanded');
            } else {
                searchWrapper.classList.remove('expanded');
            }
        }
        return;
    }

    function toggleLoginForm() {
        loginIcon.classList.toggle('active');
        if (loginIcon.classList.contains('active')) {
            loginForm.classList.add('visible');
        } else {
            loginForm.classList.remove('visible');
        }
    }

    function toggleLoginFormByClickOutsideIt() {
        var isClickInside = loginForm.contains(event.target) || event.target.className === 'js-loginLink' || (event.target.getAttribute("class") && event.target.getAttribute("class").match(/js.loginIcon/) !== null);
        if (!isClickInside) {
            loginIcon.classList.remove('active');
            loginForm.classList.remove('visible');
        }
    }

    function toggleNews() {
        var eventParentItemNodeClass = event.target.classList.contains('chevronWrapper--icon') ? event.target.parentNode.parentNode.classList : event.target.parentNode.classList;
        event.target.classList.toggle('open');
        if (event.target.classList.contains('open')) {
            eventParentItemNodeClass.add('extended');
            if (innerWidth >= 900) {
                if (eventParentItemNodeClass.contains('one')) {
                    document.querySelector('.news--item.two').classList.add('rolled');
                }
                if (eventParentItemNodeClass.contains('two')) {
                    document.querySelector('.news--item.three').classList.add('rolled');
                }
            } else {
                document.querySelector('.news--item:not(.extended)').classList.add('rolled');
            }
        } else {
            eventParentItemNodeClass.remove('extended');
            if (innerWidth >= 900) {
                if (eventParentItemNodeClass.contains('one')) {
                    document.querySelector('.news--item.two').classList.remove('rolled');
                }
                if (eventParentItemNodeClass.contains('two')) {
                    document.querySelector('.news--item.three').classList.remove('rolled');
                }
            } else {
                document.querySelector('.news--item.rolled').classList.remove('rolled');
            }

        }
    }


}());