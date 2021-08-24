function calc(e){
    var operacao = e.value;

    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);

    var calculo = eval(n1+operacao+n2);
    
    if(!isNaN(calculo)){
        alert(calculo);
    }
}

function ola(x){
    var f = document.getElementById("frm")
    var txt = f.txtnome;
    txt.value = "Ola "+txt.value;
}

function limpar(){
    //alert("1");
    var f = document.getElementById("frm");
    var n1 = f.n1;
    var n2 = f.n2;
    n1.value = "";
    n2.value = "";
}

function writeNumber(ElementId){
    var outputValueTo = document.getElementById('field1');

    if (outputValueTo.value == '0' || outputValueTo.value == 'Syntax error'){
        outputValueTo.value = ElementId.textContent;
    } else {
        
        outputValueTo.value += ElementId.textContent
    }
}

function cleartxt(){
    document.getElementById('field1').value = '0';
    document.getElementById('dec').disabled = false;
}

function setOperator(elementId){
    var outputValueTo = document.getElementById('field1');

    if(outputValueTo.value == '0' || outputValueTo.value == 'Syntax error'){
       outputValueTo.value = '0'; 
    }else {
        outputValueTo.value += elementId.textContent;
        document.getelementById('dec').disabled = false;
    }
}

function setDecimal(elementId, status){
    var outputValueTo = document.getelementById('field1');
    outputValueTo.value += elementId.textContent;
    document.getelementById('dec').disabled = status;
}

function calculate(){
    try {

        var field1txt = document.getElementById('field1');
        if (field1txt.value != '') {
            var calculateResult = eval(field1txt.value);
            field1txt.value = calculateResult;
        }
    } catch (err) {

        field1text.value = 'Syntax error';
    }
}

function removeLastNumber(){
    var field1txt = document.getelementById('filed1');

    if(field1txt.value.length == 1 || field1txt.value == '0' || field1txt.value == 'Syntax error') {
    field1txt.value = '0';
    document.getElementById('dec').disabled = false;    
    } else {
        field1txt.value = field1txt.value.substring(0, field1txt.value.length - 1);
    }
}