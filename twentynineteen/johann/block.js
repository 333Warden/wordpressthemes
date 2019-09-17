/*
Lädt den Normalen Custom Block
*/
( function( blocks, element ) {
    var el = element.createElement;
 
    var blockStyle = {
        backgroundColor: '#900',
        color: '#fff',
        padding: '20px',
    };
 
    blocks.registerBlockType( 'johann/bericht-01-basic', {
        title: 'Berichtsheft',
        icon: 'universal-access-alt',
        category: 'layout',
        edit: function() {
            return el(
                'p',
                { style: blockStyle },
                'Hello World, step 1 (from the editor).'
            );
        },
        save: function() {
            return el(
                'p',
                { style: blockStyle },
                'Hello World, step 1 (from the frontend).'
            );
        },
    } );
}(
    window.wp.blocks,
    window.wp.element
) );
console.log('loaded block.js');