// mainWindowController.js

// Function to show a specific main window by ID
function showMainWindow(id) {
    var mainWindows = document.querySelectorAll('.main-window');
    mainWindows.forEach(function(window) {
        if (window.id === id) {
            window.classList.remove('hidden');
        } else {
            window.classList.add('hidden');
        }
    });
    // Hide all mini-windows
    hideAllMiniWindows();
}

// Function to hide all mini-windows
function hideAllMiniWindows() {
    var miniWindows = document.querySelectorAll('.mini-window');
    miniWindows.forEach(function(window) {
        window.classList.add('hidden');
        // Remove data attributes to allow reloading if needed
        window.removeAttribute('data-content-loaded');
    });
}
