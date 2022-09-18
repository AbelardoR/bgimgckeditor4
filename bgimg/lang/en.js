CKEDITOR.plugins.setLang('bgimg', 'en', {
    btnLabel: 'Insert a block with background image',
    menuItemLabel: 'Edit background image',
	componentTitle : 'Background image',
    browseServer:'File Manager',
    image: {
        urlSet:'Image source URL',
        urlMissing:'Image source URL is missing.',
    },
    attrs: {
        id: 'Set the id',
        class: 'Set the classes'
    },
    styles:{
        repeat	   : 'Background repeat',
        attachment : 'Background attachment',
        position   : 'Background position',
        size	   : 'Background size'
    },
    tabs: {
        bas : 'Basic Settings',
        adv : 'Advanced Settings'
    }

});
