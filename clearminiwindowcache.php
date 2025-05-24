<?php

// Function to clear cache based on mini-window ID
function clear_miniwindow_cache() {
    check_ajax_referer( 'my_ajax_nonce', 'nonce' );

    if ( isset( $_POST['miniwindow_id'] ) ) {
        $miniwindow_id = sanitize_text_field( $_POST['miniwindow_id'] );
        $offset = isset( $_POST['offset'] ) ? intval( $_POST['offset'] ) : 0;

        // Define the cache key
        $cache_key = 'miniwindow_content_' . $miniwindow_id . '_offset_' . $offset;

        // Delete the specific cache entry
        delete_transient( $cache_key );

        echo 'Cache cleared for mini-window: ' . esc_html( $miniwindow_id );
    } else {
        echo 'Invalid request.';
    }

    wp_die();
}

// Register the AJAX action for logged-in and non-logged-in users
add_action( 'wp_ajax_clear_miniwindow_cache', 'clear_miniwindow_cache' );
add_action( 'wp_ajax_nopriv_clear_miniwindow_cache', 'clear_miniwindow_cache' );