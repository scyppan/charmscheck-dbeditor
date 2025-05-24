<?php

// Enqueue your JavaScript file and localize variables
function my_enqueue_scripts() {
    wp_enqueue_script( 'my-custom-script', get_stylesheet_directory_uri() . '/js/custom-script.js', array(), '1.0', true );

    wp_localize_script( 'my-custom-script', 'my_ajax_object', array(
        'ajaxurl' => admin_url( 'admin-ajax.php' ),
        'nonce'   => wp_create_nonce( 'my_ajax_nonce' )
    ) );
}

function load_miniwindow_content_callback() {
    check_ajax_referer( 'my_ajax_nonce', 'nonce' );

    if ( isset( $_POST['miniwindow_id'] ) ) {
        $miniwindow_id = sanitize_text_field( $_POST['miniwindow_id'] );
        $offset = isset( $_POST['offset'] ) ? intval( $_POST['offset'] ) : 0;
        $limit = 100;

        // Unique cache key based on miniwindow ID and offset
        $cache_key = 'miniwindow_content_' . $miniwindow_id . '_offset_' . $offset;
        $content = get_transient( $cache_key );

        // Check cache; if empty, load fresh
        if ( false === $content ) {
            $miniwindow_content = array(
                'mini-window-add-creature-part'       => '[formidable id=53]',
                'mini-window-edit-creature-parts'     => '[display-frm-data id=7556]',
                'mini-window-add-creature'            => '[formidable id=48]',
                'mini-window-edit-creatures'          => '[display-frm-data id=7587]',
                'mini-window-add-named-creature'      => '[formidable id=170]',
                'mini-window-edit-named-creatures'    => '[display-frm-data id=7593]',
                'mini-window-add-creature-attack'     => '[formidable id=51]',
                'mini-window-edit-creature-attack'    => '[display-frm-data id=7595]',
                'mini-window-add-creature-ability'    => '[formidable id=52]',
                'mini-window-edit-creature-ability'   => '[display-frm-data id=7600]',
                'mini-window-add-plant-part'          => '[formidable id=43]',
                'mini-window-edit-plant-parts'        => '[display-frm-data id=7602]',
                'mini-window-add-plant'               => '[formidable id=2]',
                'mini-window-edit-plants'             => '[display-frm-data id=7604]',
                'mini-window-add-named-plant'         => '[formidable id=1042]',
                'mini-window-edit-named-plants'       => '[display-frm-data id=7611]',
                'mini-window-add-preparation'         => '[formidable id=908]',
                'mini-window-edit-preparations'       => '[display-frm-data id=7635]',
                'mini-window-add-spell'               => '[formidable id=2]',
                'mini-window-edit-spells'             => '[display-frm-data id=7637]',
                'mini-window-add-proficiency'         => '[formidable id=944]',
                'mini-window-edit-proficiencies'      => '[display-frm-data id=7651]',
                'mini-window-add-item'                => '[formidable id=964]',
                'mini-window-edit-items'              => '[display-frm-data id=7656]',
				'mini-window-add-general-item'        => '[formidable id=126]',
                'mini-window-edit-general-items'      => '[display-frm-data id=4359]',
                'mini-window-add-book'                => '[formidable id=8]',
                'mini-window-edit-books'              => '[display-frm-data id=7658]',
                'mini-window-add-potion'              => '[formidable id=34]',
                'mini-window-edit-potions'            => '[display-frm-data id=7660]',
            );

            if ( array_key_exists( $miniwindow_id, $miniwindow_content ) ) {
                // Process the shortcode
                $content = do_shortcode( $miniwindow_content[ $miniwindow_id ] );

                // Verify shortcode output
                if ( empty( $content ) ) {
                    error_log("Shortcode returned empty for miniwindow_id: $miniwindow_id");
                    $content = '<p>Error loading content. Please try again.</p>';
                } else {
                    set_transient( $cache_key, $content, 12 * HOUR_IN_SECONDS );
                }
            } else {
                $content = '<p>No content found for this mini-window.</p>';
            }
        }
        echo $content;
    } else {
        echo '<p>Invalid request.</p>';
    }
    wp_die();
}


add_action( 'wp_ajax_load_miniwindow_content', 'load_miniwindow_content_callback' );
add_action( 'wp_ajax_nopriv_load_miniwindow_content', 'load_miniwindow_content_callback' );
add_action( 'wp_ajax_load_miniwindow_content', 'load_miniwindow_content_callback' );
add_action( 'wp_ajax_nopriv_load_miniwindow_content', 'load_miniwindow_content_callback' );
add_action( 'wp_enqueue_scripts', 'my_enqueue_scripts' );