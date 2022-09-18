CKEDITOR.plugins.setLang('bgimg', 'es', {
    btnLabel: 'Insertar un bloque con imagen de fondo',
    menuItemLabel: 'Editar imagen de fondo',
	componentTitle : 'Imagen de fondo',
    browseServer:'Administrador de archivos',
    image: {
        urlSet:'URL de la imagen',
        urlMissing:'Falta la URL de la imagen.',
    },
    attrs: {
        id: 'Identificador',
        class: 'Clase de estilo'
    },
    styles:{
        repeat	   : 'Repetición del fondo',
        attachment : 'Modo del fondo',
        position   : 'Posición del fondo',
        size	   : 'Expanción del fondo'
    },
    tabs: {
        bas : 'Ajustes básicos',
        adv : 'Ajustes avanzados'
    }

});
