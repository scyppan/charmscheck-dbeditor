function loadMiniWindowContent(id, offset = 0) {
    // Hide all mini-windows
    hideAllMiniWindows();

    // Show the target mini-window
    var miniWindow = document.getElementById(id);
    if (miniWindow) {
        miniWindow.classList.remove('hidden');
        var windowContent = miniWindow.querySelector('.window-content');
        if (offset === 0) {
            windowContent.innerHTML = '<p>Loading...</p>';
        }

        // Check if content is already loaded
        if (!miniWindow.getAttribute('data-content-loaded')) {
            // Determine if this is an "Edit" mini-window
            if (id.startsWith('mini-window-edit-')) {
                // Fetch data from the API
                fetchDataForMiniWindow(id, windowContent, miniWindow);
            } else {
                // Load content via AJAX (original functionality)
                loadContentViaAjax(id, windowContent, offset);
            }
            miniWindow.setAttribute('data-content-loaded', 'true');
        }
    }
}

function refreshMiniWindow(id) {
    var miniWindow = document.getElementById(id);
    if (miniWindow) {
        // Reload the content
        var windowContent = miniWindow.querySelector('.window-content');
        windowContent.innerHTML = '<p>Loading...</p>';
        // Remove the 'data-content-loaded' attribute to force reload
        miniWindow.removeAttribute('data-content-loaded');
        // Reload content
        loadMiniWindowContent(id);
    }
}
