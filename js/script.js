(function(){

  var showIDs = function() {
    $(".card-short-id").removeClass("hide");
  };

  var mutationObserver = new MutationObserver(showIDs);
  var boardNode = document.querySelector('#board');
  mutationObserver.observe(boardNode, {childList: true, subtree: true});

  showIDs();

})();
