<?php
/**
*Block Name: Hinzufügen eines Quote Styls
*/

function editor_enqueue() {
    wp_enqueue_script(
        'johann-editor-script',
        get_template_directory_uri() . '/johann/editor.js',
        array( 'wp-blocks' )
    );
}
add_action( 'enqueue_block_editor_assets', 'editor_enqueue' );

function editor_change_stylesheet() {
    wp_enqueue_style( 
        'johann-editor-style', 
        get_template_directory_uri() . '/johann/style.css'
    );
}
add_action( 'enqueue_block_assets', 'editor_change_stylesheet' );


/**
 * Einzelne Template Blöcke Registieren
 */ 
function johann_register_template(){
    wp_register_script(
        'johann-template-script',
        get_template_directory_uri() . '/johann/template.js',
        array('wp-blocks', 'wp-element', 'wp-editor')
    );
    wp_register_style(
        'johann-template-style',
        get_template_directory_uri() . '/johann/template.css',
        array()
    );
    
    register_block_type( 'johann/register-template', array( 
        'style' => 'johann-template-style',
        'editor_script' => 'johann-template-script'
    ));
}
add_action( 'init', 'johann_register_template' );
