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
            showMiniWindow(targetMiniWindowId);
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

    function showMiniWindow(id) {
        // Hide all miniwindows
        hideAllMiniWindows();
        // Show the target miniwindow
        var miniWindow = document.getElementById(id);
        if (miniWindow) {
            miniWindow.classList.remove('hidden');
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
            reloadMiniWindowContent(miniWindow);

            // Remove the animation class after the animation duration
            setTimeout(function() {
                miniWindow.classList.remove('mini-window-refreshing');
            }, 1000); // Match this duration to the animation duration in CSS
        }
    }

    function reloadMiniWindowContent(miniWindow) {
        // Get the original content from the data attribute
        var originalContent = miniWindow.getAttribute('data-original-content');
        if (originalContent) {
            // Replace the window content with the original content
            var windowContent = miniWindow.querySelector('.window-content');
            if (windowContent) {
                windowContent.innerHTML = originalContent;
            }
        }
    }

    // Store original content of miniwindows
    var miniWindows = document.querySelectorAll('.mini-window');
    miniWindows.forEach(function(miniWindow) {
        // Save the original HTML content of the window-content div
        var windowContent = miniWindow.querySelector('.window-content');
        if (windowContent) {
            miniWindow.setAttribute('data-original-content', windowContent.innerHTML);
        }
    });

    // Show default main window
    showMainWindow('main-window-creatures');
});