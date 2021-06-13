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


// 発言を作成
const uttr = new SpeechSynthesisUtterance()

// 文章 (コンストラクタの引数以外に、この方法でも指定できます)
uttr.text = "とある山田９７８４８３９９６０２２３"

// 言語 (日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)
uttr.lang = "ja-JP"

// 速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5)
uttr.rate = 1.5

// 高さ 0-2 初期値:1
uttr.pitch = 0.5

// 音量 0-1 初期値:1
uttr.volume = 0.75

// 再生 (発言キュー発言に追加)
speechSynthesis.speak(uttr)





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
