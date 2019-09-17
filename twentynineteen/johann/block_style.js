/**
*Block Name: Berichtsheft mit Stylesheet
*/

( function( blocks, element ) {
    var el = element.createElement;
 
    blocks.registerBlockType( 'johann/bericht-02-stylesheet', {
        title: 'Berichtsheft Stylesheet',
        icon: 'universal-access-alt',
        category: 'layout',
        
        edit: function( props ) {
            return el(
                'p',
                { className: props.className },
                'Hello World, step 2 (from the editor, in green).'
            );
        },
        save: function() {
            return el(
                'p',
                {},
                'Hello World, step 2 (from the frontend, in red).'
            );
        },
    } );
}(
    window.wp.blocks,
    window.wp.element
) );
console.log('loaded block_style.js');


