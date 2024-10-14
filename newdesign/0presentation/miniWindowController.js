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

function refreshMiniWindow(id) {
    var miniWindow = document.getElementById(id);
    if (miniWindow) {
        var windowContent = miniWindow.querySelector('.window-content');
        windowContent.innerHTML = '<p>Loading...</p>';

        // Step 1: Clear the cache
        var cacheClearData = new FormData();
        cacheClearData.append('action', 'clear_miniwindow_cache');
        cacheClearData.append('miniwindow_id', id);
        cacheClearData.append('nonce', my_ajax_object.nonce);

        fetch(my_ajax_object.ajaxurl, {
            method: 'POST',
            credentials: 'same-origin',
            body: cacheClearData
        })
        .then(function(response) {
            return response.text();
        })
        .then(function(message) {
            console.log(message); // Optional: Log the success message for debugging

            // Step 2: Load the fresh content after clearing cache
            var contentLoadData = new FormData();
            contentLoadData.append('action', 'load_miniwindow_content');
            contentLoadData.append('miniwindow_id', id);
            contentLoadData.append('nonce', my_ajax_object.nonce);

            return fetch(my_ajax_object.ajaxurl, {
                method: 'POST',
                credentials: 'same-origin',
                body: contentLoadData
            });
        })
        .then(function(response) {
            return response.text();
        })
        .then(function(html) {
            windowContent.innerHTML = html;
        })
        .catch(function(error) {
            console.error('Error loading content:', error);
            windowContent.innerHTML = '<p>Error loading content.</p>';
        });
    }
}

