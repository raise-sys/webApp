let text_form = document.getElementById('text_form');
let output = document.getElementById('output');

text_form.addEventListener('keypress', test_ivent);


function test_ivent(e) {
    if (e.keyCode === 13) {
      output.innerHTML = text_form.value;
      text_form.value = '';
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
