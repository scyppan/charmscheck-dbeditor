// contentLoader.js

// Function to load content into a mini-window via AJAX, with optional offset for pagination
function loadContentViaAjax(id, windowContent, offset = 0) {
    if (windowContent.getAttribute('data-loading-in-progress') === 'true') {
        return;
    }
    windowContent.setAttribute('data-loading-in-progress', 'true');

    var data = new FormData();
    data.append('action', 'load_miniwindow_content');
    data.append('miniwindow_id', id);
    data.append('nonce', my_ajax_object.nonce);
    data.append('offset', offset);

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

// Function to fetch data for specific mini-windows from an API endpoint
function fetchDataForMiniWindow(id, windowContent, miniWindow) {
    var apiUrl = '';
    var editPageUrl = '';

    // Full switch statement with all cases
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
            apiUrl = '/wp-json/frm/v2/forms/170/entries?page_size=10000';
            editPageUrl = 'https://charmscheck.com/enter-named-creature/?frm_action=edit&entry=';
            break;
        case 'mini-window-edit-creature-attack':
            apiUrl = '/wp-json/frm/v2/forms/51/entries?page_size=10000';
            editPageUrl = 'https://charmscheck.com/add-creature-attack/?frm_action=edit&entry=';
            break;
        case 'mini-window-edit-creature-ability':
            apiUrl = '/wp-json/frm/v2/forms/51/entries?page_size=10000';
            editPageUrl = 'https://charmscheck.com/add-creature-attack/?frm_action=edit&entry=';
            break;
        case 'mini-window-edit-plant-parts':
            apiUrl = '/wp-json/frm/v2/forms/43/entries?page_size=10000';
            editPageUrl = 'https://charmscheck.com/plant-part-entry/?frm_action=edit&entry=';
            break;
        case 'mini-window-edit-named-plants':
            apiUrl = '/wp-json/frm/v2/forms/1042/entries?page_size=10000';
            editPageUrl = 'https://charmscheck.com/add-named-plant/?frm_action=edit&entry=';
            break;
        case 'mini-window-edit-general-items':
            apiUrl = '/wp-json/frm/v2/forms/4359/entries?page_size=10000';
            editPageUrl = 'https://charmscheck.com/add-general-items/?frm_action=edit&entry=';
            break;
        default:
            windowContent.innerHTML = '<p>Invalid mini-window ID.</p>';
            return;
    }

    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-WP-Nonce': my_ajax_object.nonce
        },
        credentials: 'same-origin'
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
        miniWindow.removeAttribute('data-content-loaded');
    });
}
