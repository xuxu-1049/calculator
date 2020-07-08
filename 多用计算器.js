function Basic(){
    document.getElementById("containerFrame").src="标准.html";
}
function Day(){
    document.getElementById("containerFrame").src="日期计算.html";
}
function Currency(){
    document.getElementById("containerFrame").src="货币.html";
}
function Capacity(){
    document.getElementById("containerFrame").src="容量.html";
}
function Length(){
    document.getElementById("containerFrame").src="长度.html";
}
function Weight(){
    document.getElementById("containerFrame").src="重量.html";
}
function Temperature(){
    document.getElementById("containerFrame").src="温度.html";
}
function Energy(){
    document.getElementById("containerFrame").src="能量.html";
}
function Area(){
    document.getElementById("containerFrame").src="面积.html";
}
function Speed(){
    document.getElementById("containerFrame").src="速度.html";
}
function Time(){
    document.getElementById("containerFrame").src="时间.html";
}
function Power(){
    document.getElementById("containerFrame").src="功率.html";
}
function Data(){
    document.getElementById("containerFrame").src="数据.html";
}
function Pressure(){
    document.getElementById("containerFrame").src="压力.html";
}
function Angle(){
    document.getElementById("containerFrame").src="角度.html";
}
//键盘逻辑部分
function getInputValue(){
    return document.getElementById("input").innerText;
}
function showInputValue(num){
    document.getElementById("input").innerText=num;
}
function getResultValue(){
    return document.getElementById("result").innerText;
}
function showResultValue(num){
    document.getElementById("result").innerText=num;
}
function getLastNumberIndex(){
    var value=getInputValue();
    for(var i=value.length-1;i>=0;i--){
        if(value[i]=="+"||value[i]=="-"||value[i]=="*"||value[i]=="/"){
            break;
        }
    }
    return i+1;
}
function getLastDotIndex(){
    var value=getInputValue();
    for(var i=value.length-1;i>=0;i--){
        if(value[i]=="."){
            break;
        }
    }
    return i;
}
//1.operator&dot不能叠加；2.operator&dot不能在首位；3.-表现负数；4.一个number不能有多个dot；5.只允许存在0.【num】形式
var number=document.getElementsByClassName("number");
for(i=0;i<number.length;i++){
    number[i].addEventListener("click",function(){
        var value=getInputValue();
        var i=getLastNumberIndex();
        var n=value.substr(-1);
        if(value[i]=="0"){
            if(value[i+1]=="."){
                value=value+this.innerText;
                showInputValue(value);
            }else if(!(isNaN(this.innerText))){
                showInputValue(value);
            }
        }else if(value==""){
            value=value+this.innerText.substr(-1);
            showInputValue(value);
        }else if(this.innerText=="00"){
            if(n=="+"||n=="-"||n=="/"||n=="*"){
                showInputValue(value+"0");
            }else{
                value=value+this.innerText;
                showInputValue(value);
            }
        }else{
            value=value+this.innerText;
            showInputValue(value);
        }
    })
}
var operator=document.getElementsByClassName("operator");
for(i=0;i<operator.length;i++){
    operator[i].addEventListener("click",function(){
        var value=getInputValue();
        var i=getLastDotIndex();
        var num=value.substr(i+1,value.length-1);
        var n=value.substr(-1);
        if(this.id=="reset"){
            showInputValue("");
            showResultValue("");
        }else if(this.id=="back"){
            value=value.substr(0,value.length-1);
            showInputValue(value);
        }else if(this.id=="equal"){
            value=eval(value);
            showResultValue(value.toString());
        }else if(isNaN(n)){
            showInputValue(value);
        }else if(value==""){
            if(this.id=="minus"){
                value=value+this.innerText;
                showInputValue(value);
            }else{
                showInputValue("");
            }
        }else{
            if(value[i]=="."&&!isNaN(num)){
                if(this.id=="dot"){
                    showInputValue(value);
                }
                else{
                value=value+this.innerText;
                showInputValue(value);
                }
            }else{
                value=value+this.innerText;
                showInputValue(value);
            }
        }
    })
}