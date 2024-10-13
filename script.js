// Function definitions moved outside the DOMContentLoaded event listener

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

function hideAllMiniWindows() {
    var miniWindows = document.querySelectorAll('.mini-window');
    miniWindows.forEach(function(window) {
        window.classList.add('hidden');
        // Remove data attributes to allow reloading if needed
        window.removeAttribute('data-content-loaded');
    });
}

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

function loadContentViaAjax(id, windowContent, offset = 0) {
    if (windowContent.getAttribute('data-loading-in-progress') === 'true') {
        return;
    }
    windowContent.setAttribute('data-loading-in-progress', 'true');

    var data = new FormData();
    data.append('action', 'load_miniwindow_content');
    data.append('miniwindow_id', id);
    data.append('nonce', my_ajax_object.nonce);
    data.append('offset', offset); // Include the offset parameter

    fetch(my_ajax_object.ajaxurl, {
        method: 'POST',
        credentials: 'same-origin',
        body: data
    })
    .then(function(response) {
        return response.text();
    })
    .then(function(html) {
        if (html.trim() === '') {
            windowContent.innerHTML += '<p>All data loaded.</p>';
            windowContent.setAttribute('data-all-data-loaded', 'true');
        } else {
            if (offset === 0) {
                windowContent.innerHTML = html;
            } else {
                windowContent.innerHTML += html;
            }
            windowContent.setAttribute('data-content-loaded', 'true');
        }
        windowContent.setAttribute('data-loading-in-progress', 'false');
    })
    .catch(function(error) {
        console.error('Error loading content:', error);
        windowContent.innerHTML += '<p>Error loading content.</p>';
        windowContent.setAttribute('data-loading-in-progress', 'false');
    });
}

function fetchDataForMiniWindow(id, windowContent, miniWindow) {
    var apiUrl = '';
    var editPageUrl = '';

    switch (id) {
        case 'mini-window-edit-creature-parts':
            apiUrl = '/wp-json/frm/v2/forms/53/entries?page_size=10000';
            editPageUrl = 'https://charmscheck.com/add-creature-part/?frm_action=edit&entry=';
            break;
        case 'mini-window-edit-creatures':
            apiUrl = '/wp-json/frm/v2/forms/48/entries?page_size=10000';
            editPageUrl = 'https://charmscheck.com/add-a-creature/?frm_action=edit&entry=';
            break;
        case 'mini-window-edit-plants':
            apiUrl = '/wp-json/frm/v2/forms/2/entries?page_size=10000';
            editPageUrl = 'https://charmscheck.com/add-plant/?frm_action=edit&entry=';
            break;
        case 'mini-window-edit-preparations':
            apiUrl = '/wp-json/frm/v2/forms/908/entries?page_size=10000';
            editPageUrl = 'https://charmscheck.com/preparations-entry/?frm_action=edit&entry=';
            break;
        case 'mini-window-edit-spells':
            apiUrl = '/wp-json/frm/v2/forms/191/entries?page_size=10000';
            editPageUrl = 'https://charmscheck.com/add-a-spell/?frm_action=edit&entry=';
            break;
        case 'mini-window-edit-proficiencies':
            apiUrl = '/wp-json/frm/v2/forms/944/entries?page_size=10000';
            editPageUrl = 'https://charmscheck.com/add-proficiency-new-form/?frm_action=edit&entry=';
            break;
        case 'mini-window-edit-items':
            apiUrl = '/wp-json/frm/v2/forms/964/entries?page_size=10000';
            editPageUrl = 'https://charmscheck.com/add-item/?frm_action=edit&entry=';
            break;
        case 'mini-window-edit-books':
            apiUrl = '/wp-json/frm/v2/forms/8/entries?page_size=10000';
            editPageUrl = 'https://charmscheck.com/add-a-book/?frm_action=edit&entry=';
            break;
        case 'mini-window-edit-potions':
            apiUrl = '/wp-json/frm/v2/forms/34/entries?page_size=10000';
            editPageUrl = 'https://charmscheck.com/add-a-potion/?frm_action=edit&entry=';
            break;
        case 'mini-window-edit-named-creatures':
            apiUrl='/wp-json/frm/v2/forms/170/entries?page_size=10000';
            editPageUrl = 'https://charmscheck.com/enter-named-creature/?frm_action=edit&entry=';
        break;
        case 'mini-window-edit-creature-attack':
            apiUrl='/wp-json/frm/v2/forms/51/entries?page_size=10000';
            editPageUrl = 'https://charmscheck.com/add-creature-attack/?frm_action=edit&entry=';
        break;
        case 'mini-window-edit-creature-ability':
            apiUrl='/wp-json/frm/v2/forms/51/entries?page_size=10000';
            editPageUrl = 'https://charmscheck.com/add-creature-attack/?frm_action=edit&entry=';
        break;
        case 'mini-window-edit-plant-parts':
            apiUrl='/wp-json/frm/v2/forms/43/entries?page_size=10000';
            editPageUrl = 'https://charmscheck.com/plant-part-entry/?frm_action=edit&entry=';
        break;
        case 'mini-window-edit-named-plants':
            apiUrl='/wp-json/frm/v2/forms/1042/entries?page_size=10000';
            editPageUrl = 'https://charmscheck.com/add-named-plant/?frm_action=edit&entry=';
        break;




        default:
            windowContent.innerHTML = '<p>Invalid mini-window ID.</p>';
            return;
    }

    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-WP-Nonce': my_ajax_object.nonce // Use nonce for authentication
        },
        credentials: 'same-origin' // Include credentials in the request
    })
    .then(function(response) {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(function(data) {
        displayDataInMiniWindow(data, windowContent, editPageUrl);
    })
    .catch(function(error) {
        console.error('Error fetching data:', error);
        windowContent.innerHTML = '<p>Error loading content.</p>';
        // Remove the 'data-content-loaded' attribute to allow retry
        miniWindow.removeAttribute('data-content-loaded');
    });
}

function displayDataInMiniWindow(data, windowContent, editPageUrl) {
    // Clear existing content
    windowContent.innerHTML = '';

    // Create a list element to hold the items
    var list = document.createElement('ul');
    list.className = 'edit-item-list';

    // Iterate over the data and create list items
    Object.values(data).forEach(function(entry) {
        var itemName = entry.meta.creaturepartname || entry.meta.creaturename || entry.meta.plantname || entry.meta.prepname || entry.meta['1nyqa13'] || entry.meta.fy85e || entry.meta.itemname || entry.meta.bookname || entry.meta.potionname || entry.meta.namedcreaturesname || entry.meta.creatureattackname || entry.meta.creatureabilityname || entry.meta.plantpartname || entry.meta.namedplantname || 'Unnamed Item';
        var itemId = entry.id;

        // Create a list item with a link
        var listItem = document.createElement('li');
        var link = document.createElement('a');
        link.href = editPageUrl + itemId;
        link.target = '_blank';
        link.textContent = itemName;
        listItem.appendChild(link);

        // Append the list item to the list
        list.appendChild(listItem);
    });

    // Append the list to the window content
    windowContent.appendChild(list);
}

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
