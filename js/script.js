$(document).ready(function () {


    $("#btnEncode").click(startEncode);
    $("#btnDecode").click(startDecode);
    
    
    var sampleText = '<font size="20"> era uma vez um otario que ficava tentando quebrar o sistema colocando '+" por ' tudo ' conte lugar</font>" 
    var sampleText2 = SpecialCharsEncoder.encode(sampleText)
    
    function startEncode() {
        console.log(SpecialCharsEncoder.encode(sampleText))
    }

    function startDecode() {
        console.log(SpecialCharsEncoder.decode(sampleText2))
    }


});