<?php

function enqueue_ajax_shortcode() {
    wp_enqueue_script( 'ajax-shortcode', get_stylesheet_directory_uri() . '/js/ajax-shortcode.js', array('jquery'), '1.0', true );
    wp_localize_script( 'ajax-shortcode', 'ajax_obj', array(
        'ajaxurl' => admin_url( 'admin-ajax.php' ),
        'nonce'   => wp_create_nonce( 'ajax_shortcode_nonce' )
    ) );
}
add_action( 'wp_enqueue_scripts', 'enqueue_ajax_shortcode' );

function ajax_shortcode_callback() {
    check_ajax_referer( 'ajax_shortcode_nonce', 'nonce' );

    $key = isset( $_POST['key'] ) ? sanitize_text_field( $_POST['key'] ) : '';

    $shortcodes = array(
    	'formidable' => '[formidable id=48]',
	);


    if ( isset( $shortcodes[ $key ] ) ) {
        $content = do_shortcode( $shortcodes[ $key ] );
        if ( empty( $content ) ) {
            $content = '<p>Content evanesced mysteriously.</p>';
        }
    } else {
        $content = '<p>Invalid shortcode identifier.</p>';
    }
    echo $content;
    wp_die();
}
add_action( 'wp_ajax_ajax_shortcode', 'ajax_shortcode_callback' );
add_action( 'wp_ajax_nopriv_ajax_shortcode', 'ajax_shortcode_callback' );