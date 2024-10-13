// Enqueue your JavaScript file and localize variables
function my_enqueue_scripts() {
    wp_enqueue_script( 'my-custom-script', get_stylesheet_directory_uri() . '/js/custom-script.js', array(), '1.0', true );

    wp_localize_script( 'my-custom-script', 'my_ajax_object', array(
        'ajaxurl' => admin_url( 'admin-ajax.php' ),
        'nonce'   => wp_create_nonce( 'my_ajax_nonce' )
    ) );
}

// Handle AJAX request for loading mini-window content
function load_miniwindow_content_callback() {
    check_ajax_referer( 'my_ajax_nonce', 'nonce' );

    // Check for the miniwindow_id parameter
    if ( isset( $_POST['miniwindow_id'] ) ) {
        $miniwindow_id = sanitize_text_field( $_POST['miniwindow_id'] );

        // Map miniwindow IDs to their shortcodes
// Map miniwindow IDs to their shortcodes
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
    
    'mini-window-add-book'                => '[formidable id=8]',
    'mini-window-edit-books'              => '[display-frm-data id=7658]',
    
    'mini-window-add-potion'              => '[formidable id=34]',
    'mini-window-edit-potions'            => '[display-frm-data id=7660]',
);


        if ( array_key_exists( $miniwindow_id, $miniwindow_content ) ) {
            // Process the shortcode to get the content
            $content = do_shortcode( $miniwindow_content[ $miniwindow_id ] );

            // Additional HTML wrapping if needed
            if ( $miniwindow_id === 'mini-window-add-named-creature' ) {
                $content = '<div><a href="https://charmscheck.com/creature-maker/" target="_blank">Creature Maker Randomizer</a></div>' . $content;
            }

            echo $content;
        } else {
            echo '<p>No content found for this mini-window.</p>';
        }
    } else {
        echo '<p>Invalid request.</p>';
    }

    wp_die(); // All AJAX handlers should call wp_die() when finished
}

add_action( 'wp_ajax_load_miniwindow_content', 'load_miniwindow_content_callback' );
add_action( 'wp_ajax_nopriv_load_miniwindow_content', 'load_miniwindow_content_callback' );
add_action( 'wp_enqueue_scripts', 'my_enqueue_scripts' );