/* Adding a new plugin to the editor. */
CKEDITOR.plugins.add( 'bgimg', {
    icons: 'bgimg',
    lang: 'en,es,uk',
    init: function( editor ) {
        /* Adding a new command to the editor. */
        editor.addCommand( 'bgimg', new CKEDITOR.dialogCommand( 'bgimgDialog' ) );
        /* Adding a button to the toolbar. */
        editor.ui.addButton( 'bgimg', {
            label: editor.lang.bgimg.btnLabel,
            command: 'bgimg',
            toolbar: 'colors',
            icon: this.path + 'icons/bgimg.png'
        });

        if ( editor.contextMenu ) {
            editor.addMenuGroup( 'bgimgGroup' );
            editor.addMenuItem( 'bgimgItem', {
                label: editor.lang.bgimg.menuItemLabel,
                icon: this.path + 'icons/bgimg.png',
                command: 'bgimg',
                group: 'bgimgGroup'
            });

            editor.contextMenu.addListener( function( element ) {
                if ( element.getAscendant( 'div', true ) ) {
                   return { bgimgItem: CKEDITOR.TRISTATE_OFF };
                }
            });
        }
        CKEDITOR.dialog.add( 'bgimgDialog', this.path + 'dialogs/bgimg.js' );
    }

});
