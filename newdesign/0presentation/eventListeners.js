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
            loadMiniWindowContent(targetMiniWindowId, 0); // Start loading from offset 0
        });
    });

    // Handle refresh button clicks in mini-windows
    var refreshButtons = document.querySelectorAll('.mini-window .refresh-button');
    refreshButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var targetMiniWindowId = button.getAttribute('data-target-miniwindow');
            refreshMiniWindow(targetMiniWindowId);
        });
    });

    // Show default main window
    showMainWindow('main-window-creatures');
});