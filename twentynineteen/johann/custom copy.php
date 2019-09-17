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
//add_action( 'enqueue_block_assets', 'editor_change_stylesheet' );


/**
*Block Name: Berichtsheft Block
*/
function bericht_01_register_block() {
    wp_register_script(
        'johann-bericht-01',
        get_template_directory_uri() . '/johann/block.js',
        array( 'wp-blocks', 'wp-element' )
    );
 
    register_block_type( 'johann/bericht-01-basic', array(
        'editor_script' => 'johann-bericht-01',
    ) );
 
}
add_action( 'init', 'bericht_01_register_block' );


/**
 * Block Name: Berichtsheft Block mit Stylesheets
 */
function bericht_02_register_block() {
    wp_register_script(
        'johann-bericht-02-script',
        get_template_directory_uri() . '/johann/block_style.js',
        array( 'wp-blocks', 'wp-element' )
    );

    wp_register_style(
        'johann-bericht-02-editor-style',
        get_template_directory_uri() . '/johann/editor.css',
        array( 'wp-edit-blocks' )
    );
   
    wp_register_style(
        'johann-bericht-02-frontend-style',
        get_template_directory_uri() . '/johann/style.css',
        array()
    );
    
    register_block_type( 'johann/bericht-02-stylesheet', array(
        'editor_script' => 'johann-bericht-02-script',
        'editor_style' => 'johann-bericht-02-editor-style',
        'style' => 'johann-bericht-02-frontend-style'
    ) );
}
add_action( 'init', 'bericht_02_register_block' );


/**
 * Block Name: Berichtsheft Block Final
 */
function bericht_block_register_block(){
    wp_register_script(
        'johann-berichtsheft-final-script',
        get_template_directory_uri() . '/johann/block_bericht.js',
        array('wp-blocks', 'wp-element', 'wp-editor')
    );

    wp_enqueue_style(
        'johann-berichtsheft-final-editor-style',
        get_template_directory_uri() . '/johann/editor.css',
        array('wp-editor-blocks')
    );

    wp_enqueue_style(
        'johann-berichtsheft-final-frontend-style',
        get_template_directory_uri() . '/johann/style.css',
        array()
    );
    
    register_block_type( 'johann/bericht-final', array(
        'editor_script' => 'johann-berichtsheft-final-script',
        'editor_style'  => 'johann-berichtsheft-final-editor-style',
        'style'         => 'johann-berichtsheft-final-frontend-style'
    ));
}
add_action( 'init', 'bericht_block_register_block' );

/**
 * Hinzufügen eines Custom Templates mit eigenem Stylesheet: BLOCKS_TEMPLATE Berichtsheft
 */

function johann_register_template(){
    wp_register_script(
        'johann-template-script',
        get_template_directory_uri() . '/johann/template.js',
        array('wp-blocks', 'wp-element')
    );
    wp_register_style(
        'johann-template-style',
        get_template_directory_uri() . '/johann/template_style.css',
        array()
    );
    register_block_type( 'johann/register-template', array( 
        'style' => 'johann-template-style',
        'editor_script' => 'johann-template-script'
    ));
}
add_action( 'init', 'johann_register_template' );


/**
 * Einzelne Template Blöcke Registieren
 */
 
function johann_register_template_blocks(){
    wp_enqueue_script(
        'johann-template-blocks-script',
        get_template_directory_uri() . '/johann/template.js',
        array('wp-blocks', 'wp-element')
    );
    wp_register_style(
        'johann-template-blocks-style',
        get_template_directory_uri() . '/johann/template.css',
        array()
    );
    
    register_block_type( 'johann/register-template-blocks', array( 
        'style' => 'johann-template-blocks-style',
        'editor_script' => 'johann-template-blocks-script'
    ));
}
add_action( 'init', 'johann_register_template_blocks' );
