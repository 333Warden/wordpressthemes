/**
* Custom Template BLOCKS_TEMPLATE
*/

const el = wp.element.createElement;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;

const BLOCKS_TEMPLATE = [
    ['core/separator', {className: 'is-style-wide'}],
    ['core/columns', {}, [
        ['core/column', {className: 'column_head'}, [
            ['core/paragraph', {className: 'head', content: '00. Woche'}],
        ]],
        ['core/column', {}, [
            ['core/paragraph', {className: 'timespan', placeholder: 'Zeitspanne!'}],
        ]],
    ]],
    ['core/separator', {color: '#55d347',customColor: '#4761d3'}],
    ['core/columns', {columns: 5, align: 'wide'}, [
        ['core/column', {}, [
            ['core/paragraph', {className:'day', content: 'Montag'} ],
            ['core/paragraph', {className:'date-color', placeholder: 'Datum'}],
            ['core/paragraph', {className:'filling-text', placeholder: 'Beschreibung hinzufügen!'}],
        ] ],
        ['core/column', {}, [
            ['core/paragraph', {className:'day', content: 'Dienstag'} ],
            ['core/paragraph', {className:'date-color', placeholder: 'Datum'}],
            ['core/paragraph', {className:'filling-text', placeholder: 'Beschreibung hinzufügen!'}],
        ] ],
        ['core/column', {}, [
            ['core/paragraph', {className:'day', content: 'Mittwoch'} ],
            ['core/paragraph', {className:'date-color', placeholder: 'Datum'}],
            ['core/paragraph', {className:'filling-text', placeholder: 'Beschreibung hinzufügen!'}],
        ] ],
        ['core/column', {}, [
            ['core/paragraph', {className:'day', content: 'Donnerstag'} ],
            ['core/paragraph', {className:'date-color', placeholder: 'Datum'}],
            ['core/paragraph', {className:'filling-text', placeholder: 'Beschreibung hinzufügen!'}],
        ] ],
        ['core/column', {}, [
            ['core/paragraph', {className:'day', content: 'Freitag'} ],
            ['core/paragraph', {className:'date-color', placeholder: 'Datum'}],
            ['core/paragraph', {className:'filling-text', placeholder: 'Beschreibung hinzufügen!'}],
        ] ],
    ] ],
];
 
registerBlockType( 'johann/register-template', {
    title: 'Berichtsheft Gesammtblock',
    category: 'widgets',
    edit: ( props ) => {
        return el( InnerBlocks, {
            template: BLOCKS_TEMPLATE,
            templateLock: 'ALL'
        });
    },
    save: ( props ) => {
        return el( InnerBlocks.Content, {} );
    },
});




/**
 * Einzelne Custom Templates für den Testbericht
 */

 /**
  * Wochenüberschirft und Zeitspanne
  */
const BLOCKS_TEMPLATE_HEADER = [
    ['core/separator', {className: 'is-style-wide'}],
    ['core/columns', {}, [
        ['core/column', {className: 'head_column_single', width: 50,}, [
            ['core/paragraph', {className: 'head_single', content: '00. Woche'}],
        ]],
        ['core/column', {className: 'timespan_column_single', width: 150,}, [
            ['core/paragraph', {className: 'timespan_single', placeholder: '(00.00.-00.00.2000)'}],
        ]],
    ]],
    ['core/separator', {className: 'separator_single'}],
];

registerBlockType( 'johann/register-template-head', {
    title: 'Berichtsheft Überschrift',
    category: 'widgets',
    edit: ( props ) => {
        return el( InnerBlocks, {
            template: BLOCKS_TEMPLATE_HEADER,
            templateLock: 'ALL'
        });
    },
    save: ( props ) => {
        return el( InnerBlocks.Content, {} );
    },
});

/**
 * Spalten für Tage einfügen
 */

const BLOCKS_TEMPLATE_COLUMNS = [
    ['core/columns',{}],
];

registerBlockType( 'johann/register-template-columns', {
    title: 'Berichtsheft Spalten',
    category: 'widgets',
    edit: ( props ) => {
        return el( InnerBlocks, {
            template: BLOCKS_TEMPLATE_COLUMNS,
            templateLock: 'ALL'
        });
    },
    save: ( props ) => {
        return el( InnerBlocks.Content, {} );
    },
});


/**
 * Spalte für einzelnen Tage
 */

const BLOCKS_TEMPLATE_DAY_COLUMN = [
        ['core/column', {}, [
            ['core/paragraph', {className:'day_single', placeholder: 'Wochentag'} ],
            ['core/paragraph', {className:'date_single', placeholder: 'Datum'}],
            ['core/paragraph', {className:'article_single', placeholder: 'Hier Beitrag einfügen!'}]
        ] ],
];

registerBlockType( 'johann/register-template-day', {
    title: 'Berichtsheft Tage',
    category: 'widgets',
    edit: ( props ) => {
        return el( InnerBlocks, {
            template: BLOCKS_TEMPLATE_DAY_COLUMN,
            templateLock: 'ALL'
        });
    },
    save: ( props ) => {
        return el( InnerBlocks.Content, {} );
    },
});

/**
 * Neuen Artickel erstellen
 */
const BLOCKS_TEMPLATE_ARTICLE = [
        ['core/paragraph', {className:'article_single', placeholder: 'Hier Beitrag einfügen!'}]
];

registerBlockType( 'johann/register-article', {
title: 'Berichtsheft Artikel',
category: 'widgets',
edit: ( props ) => {
    return el( InnerBlocks, {
        template: BLOCKS_TEMPLATE_ARTICLE,
        templateLock: 'ALL'
    });
},
save: ( props ) => {
    return el( InnerBlocks.Content, {} );
},
});
