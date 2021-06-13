let text_form = document.getElementById('text_form');
let output = document.getElementById('output');
let iRow =1;

text_form.addEventListener('keypress', test_ivent);

window.onload = function(){
    document.getElementById("text_form").focus();
    }

function test_ivent(e) {
    if (e.keyCode === 13) {
        let table = document.getElementById('targetTable');
        let newRow = table.insertRow();
        
        let newCell = newRow.insertCell();
        let newText = document.createTextNode(iRow);
        newCell.appendChild(newText);
        
        newCell = newRow.insertCell();
        newText = document.createTextNode(text_form.value);
        newCell.appendChild(newText);

        text_form.value = '';
        iRow = iRow +1;

        window.navigator.vibrate(200);

        return false;  
    }  
}

function checkForm($this)
{
    var str=$this.value;
    while(str.match(/[^A-Z^a-z\d\-]/))
    {
        str=str.replace(/[^A-Z^a-z\d\-]/,"");
    }
    $this.value=str;
}
