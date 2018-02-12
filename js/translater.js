$(function() {
  chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    ajaxConecter(request.word);
    sendResponse({message:"OK"});
  });
});

function ajaxConecter(word){
  if(word != null && word.trim().length != 0){
    $.ajax({
      url:'https://ejje.weblio.jp/content/' + word,
      type:'GET'
    })
    .done(function(res){
      regexp = new RegExp(word + ':.*"');
      var result = res.results[0].match(regexp);
      result = result.toString().replace(/".*"/, "");
      result = result.toString().replace(/,/g, "<br>");
      $("#target").html(result);
    })
    .fail(function(){
    $("#target").html("error");
    });
  }
  else{
    $("#target").html("please input word");
  }
}
