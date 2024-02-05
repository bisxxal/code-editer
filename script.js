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
    editor.innerHTML += '\n'; // Add a new line
}

// Event listener for keyboard input (Enter key)
document.getElementById('editor').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent default behavior (line break)
        addNewLine();
    }
});



// function run() {
//     const htmlCode = document.getElementById('html-code').value;
//     const cssCode = document.getElementById('css-code').value;
//     const jsCode = document.getElementById('js-code').value;

//     const outputFrame = document.getElementById('output').contentWindow.document;
//     const lineNumbersContainer = document.getElementById('line-numbers');

//     const lines = Math.max(htmlCode.split('\n').length, cssCode.split('\n').length, jsCode.split('\n').length);

//     lineNumbersContainer.innerHTML = '';
//     for (let i = 1; i <= lines; i++) {
//         lineNumbersContainer.innerHTML += `<div>${i}</div>`;
//     }

//     outputFrame.open();
//     outputFrame.write(`<style>${cssCode}</style>${htmlCode}<script>${jsCode}</script>`);
//     outputFrame.close();
// }
