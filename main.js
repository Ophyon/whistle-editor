
var code;
var editor = CodeMirror.fromTextArea(document.getElementById('input'), {
    mode: 'javascript',
    theme: localStorage.getItem("whistletheme")|| 'yonce',
    lineNumbers: true,
    autoCloseBrackets: true
});

editor.setSize(screen.width - 15, screen.height - 130)
function run() {
    code = editor.getValue()
}
