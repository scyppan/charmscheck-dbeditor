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

    // Show default main window
    showMainWindow('window-creatures');
});
