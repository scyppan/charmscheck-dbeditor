// miniWindowController.js

// Function to load content into a mini-window by ID, with optional offset for pagination
function loadMiniWindowContent(id, offset = 0) {
    hideAllMiniWindows();

    var miniWindow = document.getElementById(id);
    if (miniWindow) {
        removeClass(miniWindow, 'hidden'); // Use removeClass utility
        var windowContent = miniWindow.querySelector('.window-content');
        if (offset === 0) {
            windowContent.innerHTML = '<p>Loading...</p>';
        }

        if (!miniWindow.getAttribute('data-content-loaded')) {
            loadContentViaAjax(id, windowContent, offset);
            miniWindow.setAttribute('data-content-loaded', 'true');
        }
    }
}

// Function to refresh the content in a specific mini-window by ID
function refreshMiniWindow(id) {
    var miniWindow = document.getElementById(id);
    if (miniWindow) {
        var windowContent = miniWindow.querySelector('.window-content');
        windowContent.innerHTML = '<p>Loading...</p>';
        miniWindow.removeAttribute('data-content-loaded');
        
        loadMiniWindowContent(id);
    }
}
