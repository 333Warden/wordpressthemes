/**
* Einzelne Custom Templates für den Testbericht
*/
const el = wp.element.createElement;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;

/**
* Wochenüberschirft und Zeitspanne
*/
const BLOCKS_TEMPLATE_HEADER = [
    ['core/separator', {className: 'is-style-wide'}],
    ['core/columns', {className: 'headline'}, [
        ['core/column', {className: 'head_column_single', width: 50,}, [
            ['core/paragraph', {className: 'head_single', content: '00. Woche'}],
        ]],
        ['core/column', {className: 'timespan_column_single', width: 150,}, [
            ['core/paragraph', {className: 'timespan_single', placeholder: '(00.00.-00.00.2000)'}],
        ]],
    ]],
    ['core/separator', {className: 'separator_single'}],
];

registerBlockType( 'johann/register-template-header', {
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
    ['core/columns',{className: 'is-style-wide'}],
];

registerBlockType( 'johann/register-template-columns', {
    title: 'Berichtsheft Spalten',
    category: 'widgets',
    edit: ( props ) => {
        return el( InnerBlocks, {
            template: BLOCKS_TEMPLATE_COLUMNS,
            templateLock: false
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

registerBlockType( 'johann/register-template-day-column', {
    title: 'Berichtsheft Tage',
    category: 'widgets',
    edit: ( props ) => {
        return el( InnerBlocks, {
            template: BLOCKS_TEMPLATE_DAY_COLUMN,
            templateLock: false
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

console.log('loaded template.js');