document.addEventListener('DOMContentLoaded', function() {
    // Handle left panel menu item clicks
    var menuItems = document.querySelectorAll('.mainmenuitem');
    menuItems.forEach(function(menuItem) {
        menuItem.addEventListener('click', function() {
            var targetWindowId = menuItem.getAttribute('data-target-window');
            showMainWindow(targetWindowId);
        });
    });

    // Handle menu button clicks
    var menuButtons = document.querySelectorAll('.menu-button');
    menuButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var targetMiniWindowId = button.getAttribute('data-target-miniwindow');
            loadMiniWindowContent(targetMiniWindowId);
        });
    });

    // Handle refresh button clicks in miniwindows
    var refreshButtons = document.querySelectorAll('.mini-window .refresh-button');
    refreshButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var targetMiniWindowId = button.getAttribute('data-target-miniwindow');
            refreshMiniWindow(targetMiniWindowId);
        });
    });

    function showMainWindow(id) {
        var mainWindows = document.querySelectorAll('.main-window');
        mainWindows.forEach(function(window) {
            if (window.id === id) {
                window.classList.remove('hidden');
            } else {
                window.classList.add('hidden');
            }
        });
        // Hide all miniwindows
        hideAllMiniWindows();
    }

    function loadMiniWindowContent(id) {
        // Hide all miniwindows
        hideAllMiniWindows();
        // Show the target miniwindow
        var miniWindow = document.getElementById(id);
        if (miniWindow) {
            miniWindow.classList.remove('hidden');
            // Check if content is already loaded
            if (!miniWindow.getAttribute('data-content-loaded')) {
                // Show a loading indicator (optional)
                var windowContent = miniWindow.querySelector('.window-content');
                windowContent.innerHTML = '<p>Loading...</p>';

                // Make AJAX request to load content
                var data = new FormData();
                data.append('action', 'load_miniwindow_content');
                data.append('miniwindow_id', id);
                data.append('nonce', my_ajax_object.nonce);

                fetch(my_ajax_object.ajaxurl, {
                    method: 'POST',
                    credentials: 'same-origin',
                    body: data
                })
                .then(function(response) {
                    return response.text();
                })
                .then(function(html) {
                    windowContent.innerHTML = html;
                    miniWindow.setAttribute('data-content-loaded', 'true');
                })
                .catch(function(error) {
                    console.error('Error loading content:', error);
                    windowContent.innerHTML = '<p>Error loading content.</p>';
                });
            }
        }
    }

    function hideAllMiniWindows() {
        var miniWindows = document.querySelectorAll('.mini-window');
        miniWindows.forEach(function(window) {
            window.classList.add('hidden');
        });
    }

    function refreshMiniWindow(id) {
        var miniWindow = document.getElementById(id);
        if (miniWindow) {
            // Add animation class
            miniWindow.classList.add('mini-window-refreshing');

            // Reload the content
            var windowContent = miniWindow.querySelector('.window-content');
            windowContent.innerHTML = '<p>Loading...</p>';
            // Remove the 'data-content-loaded' attribute to force reload
            miniWindow.removeAttribute('data-content-loaded');
            // Reload content
            loadMiniWindowContent(id);

            // Remove the animation class after the animation duration
            setTimeout(function() {
                miniWindow.classList.remove('mini-window-refreshing');
            }, 1000); // Match this duration to the animation duration in CSS
        }
    }

    // Show default main window
    showMainWindow('main-window-creatures');
});