// apiService.js

// Function to send a POST request to a specified URL with provided data
function postData(url, data) {
    return fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        body: data
    })
    .then(function(response) {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    });
}

// Function to send a GET request to a specified URL
function getData(url) {
    return fetch(url, {
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
    });
}
