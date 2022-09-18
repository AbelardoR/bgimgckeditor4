CKEDITOR.dialog.add( 'bgimgDialog', function( editor ) {
    const component = {
        title: editor.lang.bgimg.componentTitle,
        minWidth: 400,
        minHeight: 200,
        contents: [
            {
                id: 'tab-basic',
                label: editor.lang.bgimg.tabs.bas,
                elements: [
                    {
                        type: 'hbox',
                        widths: [ '70%', '30%' ],
                        children: [
                            /* Creating a text field with the id imgUrl and the label url. */
                            {
                                type: 'text',
                                id: 'imgUrl',
                                inputStyle : 'padding:10px;',
                                label: editor.lang.bgimg.image.urlSet,
                                validate: CKEDITOR.dialog.validate.notEmpty( editor.lang.bgimg.image.urlMissing ),
                                setup: function( element ) {
                                    this.setValue( element.getStyle( "background-image" ) );
                                },
                                commit: function( element ) {
                                    var imageURL = "url(" + this.getValue() + ")";
                                    element.setStyle( 'background-image', imageURL );
                                }
                            },
                            /* Creating a button that will open the file browser. */
                            {
                                type: 'button',
                                id: 'browse',
                                style : `padding: 6px;background: rgb(13 110 253 / 35%);margin-top: 18px;`,
                                label: editor.lang.bgimg.browseServer,
                                hidden: true,
                                filebrowser :
                                {
                                    /* The file browser. */
                                    action : 'Browse', // required
                                    target : 'tab-basic:imgUrl', // required
                                    params : // optional
                                    {
                                        type : 'image'
                                    },
                                },
                                'for' : [ 'tab-basic', 'imgUrl' ]
                            },
                            /* This is a hidden field that is used to identify the data-widget. */
                            {
                                type: 'text',
                                id: 'widget',
                                inputStyle : 'padding:10px;',
                                hidden: true,
                                label: 'widget',
                                'default':'image-bg',
                                setup: function( element ) {
                                    this.setValue( element.getAttribute( "data-widget" ) );
                                },
                                commit: function( element ) {
                                    var widget = this.getValue();
                                    if ( widget ) element.setAttribute( 'data-widget', widget );
                                }
                            },
                        ]
                    },
                ]
            },
            {
                id: 'tab-adv',
                label: editor.lang.bgimg.tabs.adv,
                elements: [
                    {
                        type: 'hbox',
                        widths: [ '50%', '50%'],
                        children: [
                            /* This is creating a text field with the id of
                            id and the label of id. */
                            {
                                type: 'text',
                                id: 'id',
                                label: editor.lang.bgimg.attrs.id,
                                inputStyle: 'padding:10px;',
                                setup: function( element ) {
                                    this.setValue( element.getAttribute( "id" ) );
                                },
                                commit: function( element ) {
                                    var id = this.getValue();
                                    if ( id ) element.setAttribute( 'id', id );
                                }
                            },
                            /* This is creating a text field with the id
                            of class and the label of  class. */
                            {
                                type: 'text',
                                id: 'class',
                                label: editor.lang.bgimg.attrs.class,
                                inputStyle: 'padding:10px;',
                                setup: function( element ) {
                                    this.setValue( element.getAttribute( "class" ) );
                                },
                                commit: function( element ) {
                                    var classes = this.getValue();
                                    if ( classes ) element.setAttribute( 'class', classes );
                                }
                            },
                        ]
                    },
                    {
                        /* Creating a dropdown menu with the options of no-repeat, repeat, repeat-x,
                        repeat-y, space, and round. */
                        type: 'select',
                        labelLayout: 'horizontal',
                        id: 'repeat',
                        label: editor.lang.bgimg.styles.repeat,
                        items: [
                            ['no-repeat'],
                            ['repeat'],
                            ['repeat-x'],
                            ['repeat-y'],
                            ['space'],
                            ['round']
                        ],
                        'default': 'no-repeat',
                        setup: function( element ) {
                            this.setValue( element.getStyle( "background-repeat" ) );
                        },
                        commit: function( element ) {
                            element.setStyle( 'background-repeat', this.getValue() );
                        }
                    },
                    {
                        /* This is creating a dropdown menu with the options of scroll, fixed, and
                        local. */
                        type: 'select',
                        labelLayout: 'horizontal',
                        id: 'attachment',
                        label: editor.lang.bgimg.styles.attachment,
                        items: [
                            ['scroll'],
                            ['fixed'],
                            ['local'],
                        ],
                        'default': 'scroll',
                        setup: function( element ) {
                            this.setValue( element.getStyle( "background-attachment" ) );
                        },
                        commit: function( element ) {
                            element.setStyle( 'background-attachment', this.getValue() );
                        }
                    },
                    {
                        /* This is creating a dropdown menu with the options of auto, cover, contain,
                        and 50%. */
                        type: 'select',
                        labelLayout: 'horizontal',
                        id: 'size',
                        label: editor.lang.bgimg.styles.size,
                        items: [
                            ['auto'],
                            ['cover'],
                            ['contain'],
                            ['50%'],
                        ],
                        'default': 'auto',
                        setup: function( element ) {
                            this.setValue( element.getStyle( "background-size" ) );
                        },
                        commit: function( element ) {
                            element.setStyle( 'background-size', this.getValue() );
                        }
                    },
                    {
                        /* This is creating a dropdown menu with the options of auto, cover, contain,
                                                and 50%. */
                        type: 'select',
                        labelLayout: 'horizontal',
                        id: 'position',
                        label: editor.lang.bgimg.styles.position,
                        items: [
                            ['left top'],
                            ['left center'],
                            ['left bottom'],
                            ['right top'],
                            ['right center'],
                            ['right bottom'],
                            ['center top'],
                            ['center center'],
                        ],
                        'default': 'center center',
                        setup: function( element ) {
                            this.setValue( element.getStyle( "background-position" ) );
                        },
                        commit: function( element ) {
                            element.setStyle( 'background-position', this.getValue() );
                        }
                    }
                ]
            }
        ],
        onShow: function() {
            var selection, element;
            selection = editor.getSelection();
            element = selection.getStartElement();

            if ( element )
                element = element.getAscendant( 'div', true );

            if ( !element || element.getName() != 'div' ) {
                element = editor.document.createElement( 'div' );
                element.appendHtml('<p> </p>');
                this.insertMode = true;
            }
            else
                this.insertMode = false;

            this.element = element;
            if ( !this.insertMode )
                this.setupContent( this.element );
        },
        onOk: function() {
            var dialog = this;
            var element = this.element;
            dialog.commitContent( element );

            if ( this.insertMode )
                editor.insertElement( element );
        }
    };

    return component;
});
