/**
 *
 * Need to take in text
 * Split text into an array
 * Count total words and store into tWordCount
 * Find unique words, total how mamny unique words there are
 *    store into uWordCount
 * Find average word length and store into avgWordLength
 *
 */
function getText() {
  return $('#user-text').val().toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();;
}

function getTotalWordCount(text) {
	$('.js-wc').append(text.length);
}

function getUniqueWordCount(text) {
  var words       = text;
  var uniqueArray = [];
  for (var i = 0; i < words.length; i++) {
    if(!(uniqueArray.includes(words[i]))){
      uniqueArray.push(words[i]);
    }
  }
	$('.js-uc').append(uniqueArray.length);
}

function getAvgLength(text) {
	var Tlength = text.length;
	totalChars = 0;
	for (var i = 0 ; i < Tlength; i++){
		for (var j = 0; j < text[i].length; j++){
			totalChars ++;
		}
	}
	$('.js-avgL').append(totalChars/Tlength);
}

$("form").submit(function(event) {
	$('dl').removeClass('hidden');
  $('.js-results').empty();
  event.preventDefault();
	getAvgLength(getText());
	getUniqueWordCount(getText());
	getTotalWordCount(getText());
});
