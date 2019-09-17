/**
*Block Name: Berichtsheft Block Final
*/

( function( blocks, editor, element ) {
    var el = element.createElement;
    var RichText = editor.RichText;
    var AlignmentToolbar = editor.AlignmentToolbar;
    var BlockControls = editor.BlockControls;
 
    blocks.registerBlockType( 'johann/bericht-final', {
        title: 'Berichtsheft Final',
        icon: 'universal-access-alt',
        category: 'layout',
 
        attributes: {
            content: {
                type: 'array',
                source: 'children',
                selector: 'p',
            },
            alignment: {
                type: 'string',
                default: 'none',
            },
        },
 
        edit: function( props ) {
            var content = props.attributes.content;
            var alignment = props.attributes.alignment;
 
            function onChangeContent( newContent ) {
                props.setAttributes( { content: newContent } );
            }
 
            function onChangeAlignment( newAlignment ) {
                props.setAttributes( { alignment: newAlignment === undefined ? 'none' : newAlignment } );
            }
 
            return [
                el(
                    'wochenueberschrift',
                    {className: null},
                    '01. Woche',
                ),
                
                el(
                    'tage01',
                    { className: props.className + '-tage' },
                    'Montag' + ' Dienstag' + ' Mittwoch' + ' Donnerstag' + ' Freitag',
                ),

                el(
                    BlockControls,
                    { key: 'controls' },
                    el(
                        AlignmentToolbar,
                        {
                            value: alignment,
                            onChange: onChangeAlignment,
                        }
                    )
                ),
                el(
                    RichText,
                    {
                        key: 'richtext',
                        tagName: 'p',
                        style: { textAlign: alignment },
                        className: props.className,
                        onChange: onChangeContent,
                        value: content,
                    }
                ),
            ];
        },
 
        save: function( props ) {
            return el( RichText.Content, {
                tagName: 'p',
                className: 'johann-bericht-align-' + props.attributes.alignment,
                value: props.attributes.content,
            } );
        },
    } );
}(
    window.wp.blocks,
    window.wp.editor,
    window.wp.element
) );
