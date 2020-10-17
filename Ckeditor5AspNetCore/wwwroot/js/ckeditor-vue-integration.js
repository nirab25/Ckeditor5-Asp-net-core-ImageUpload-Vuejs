Vue.use(CKEditor);

const app = new Vue({
    el: '#app',
    data: {
        editor: ClassicEditor,
        editorData: '<p>Content of the editor.</p>',
        editorConfig: {
            // The configuration of the editor.
            extraPlugins: [this.MyCustomUploadAdapterPlugin]
        }
    },
    methods: {
        MyCustomUploadAdapterPlugin(editor) {
            this.editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
                // Configure the URL to the upload script in your back-end here!
                return new MyUploadAdapter(loader);
            };
        }
    }
});