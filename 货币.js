function changeTheSymbol(selectId, symbolId) {
    var selectElement = document.getElementById(selectId);
    var selectedValue = selectElement.options[selectElement.selectedIndex].value;
    var symbol;
    switch (selectedValue) {
        case '欧元':
            symbol="€";
            break;
        case '人民币':
            symbol="¥";
            break;
        case '日元':
            symbol="￥";
            break;
        case '韩元':
            symbol="₩";
            break;
        case '美元':
            symbol="$";
            break;
        default:
            symbol = "Unknown";
            break;
    }
    document.getElementById(symbolId).innerText = symbol;
}
function symbolChange(){
    changeTheSymbol("select1", "symbol1");
    changeTheSymbol("select2", "symbol2");
}
symbolChange();
//以上为从option标签获取货币符号的函数
function getTheCurrency(){
    var currency=document.getElementById("select1");
    var selectedCurrency=currency.options[currency.selectedIndex].value;
    var baseCurrency;
    switch(selectedCurrency){
        case '欧元':
            baseCurrency="EUR";
            break;
        case '人民币':
            baseCurrency="CNY";
            break;
        case '日元':
            baseCurrency="JPY";
            break;
        case '韩元':
            baseCurrency="KRW";
            break;
        case '美元':
            baseCurrency="USD";
            break;
        default:
            baseCurrency = "Unknown";
            break;
    }
    var xhr=new XMLHttpRequest();
    xhr.open("get","https://api.exchangeratesapi.io/latest?base=codeDictionary?base+'baseCurrency'",true);
    xhr.send(null);
    var result=JSON.parse(xhr.ResponseText);
//    var inputValue=document.getElementById("input")；
}