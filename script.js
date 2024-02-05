function run(){
    let html = document.querySelector("#html-code").value;
    let css = document.querySelector("#css-code").value;
    let js = document.querySelector("#js-code").value;
    let output = document.querySelector('iframe').contentDocument.body;
    
    output.innerHTML = html + '<style>' + css + '</style>';
    output.ownerDocument.defaultView.eval(js);
      
}
function addNewLine() {
    const editor = document.getElementById('editor');
    editor.innerHTML += '\n';  
}
 
document.getElementById('editor').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();  
        addNewLine();
    }
});


 