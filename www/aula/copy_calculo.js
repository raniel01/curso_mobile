// This is a JavaScript file
$(document).on("click","#somar",function(){
    var valor1 = $("#valor1").val();
    var valor2 = $("#valor2").val();
    
    var result = parseInt(valor1) + parseInt(valor2);
    
    $("#result").val(result);
    });
