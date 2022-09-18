CKEDITOR.plugins.setLang('bgimg', 'uk', {
    btnLabel: 'Вставте блок із фоновим зображенням',
    menuItemLabel: 'Редагувати фонове зображення',
	componentTitle : 'Фонове зображення',
    browseServer:'Файловий менеджер',
    image: {
        urlSet:'URL джерела зображення',
        urlMissing:'Відсутня URL-адреса джерела зображення.',
    },
    attrs: {
        id: 'Встановіть ідентифікатор',
        class: 'Встановити класи стилів'
    },
    styles:{
        repeat	   : 'Фоновий повтор',
        attachment : 'Прикріплення фону',
        position   : 'Фонове положення',
        size	   : 'Розмір фону'
    },
    tabs: {
        bas : 'Основні налаштування',
        adv : 'Розширені налаштування'
    }

});
