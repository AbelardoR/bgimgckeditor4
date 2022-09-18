# bgimgckeditor4
this is a plugin to add a block with background image
This plugin works with ckeditor 4

## To add the plugin complete the following steps
1. download the repository
2. place it inside yourpath/ckeditor/plugins folder
3. add the following code to your editor settings:
`plugins.addExternal('bgimg', pluginspath+'bgimg/plugin.js');`
`config.extraPlugins = 'bgimg';`
`config.allowedContent = true;`

Note: it is necessary to configure the file browser correctly. 