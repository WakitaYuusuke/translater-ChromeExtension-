$(function() {
  $(document).on('selectionchange', function(){
    var word = document.getSelection().toString();
    sendWord(word);
  });
});

function sendWord(word){
  chrome.runtime.sendMessage({
      word: word
  },
  function(response){
    console.log(response.message);
  });
}
