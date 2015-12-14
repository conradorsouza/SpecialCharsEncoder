var SpecialCharsEncoder = {};

var encodeList = ['"', "'", "<", ">"]
var decodeList = ['/"', "/'", "/<", "/>"]

SpecialCharsEncoder.encode = function(text){
	
	return parseText(text, encodeList, decodeList)
}

SpecialCharsEncoder.decode = function(text){
	
	return parseText(text, decodeList, encodeList)
}

function parseText(text, arrRead, arrWrite){
	
	for ( var i = 0; i < arrRead.length; i++)	{
		var findWhat = arrRead[i];
		var replaceFor = new RegExp(findWhat, 'g');
		text = text.replace(replaceFor, arrWrite[i]);
	}
	
	return text
}
