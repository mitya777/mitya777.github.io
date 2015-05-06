// User this to only setup Gates on initial page load.
var initLoad = $.Deferred();
var gates = {};


Knov.getPageQuests = function(url, callback) {
    $.ajax(Knov.host + "/quests/page",{
        type: "GET",
        data: {
            "url": url
        }
    }).done(function(quests){
        console.log(quests);
        //console.log("Page Quests: " + JSON.stringify(quests));
        if (quests && quests.length){
            callback(quests);
        }
    });
    
}

Knov.getPageQuests(window.location.href, function bgMessageHandler(quests) {
    console.log(quests);
    //groupedQuests = groupQuests(quests);
    if (!(quests && quests.length)) return;
    // If first load then mark the inspirations on the page.
    if (initLoad.state() !== "resolved"){
        var selections = [];
        var sel;
        var range;
        var topOffset = $(window).scrollTop();
        // Find 'maxMatches' number of instances of quest.inspiration appearing in document.
        // Cache the associated ranges on the quest to attach Gates.
        var maxMatches = 3;
        // TODO This seems to cause the 'can't use "in" operator to search for 0' error. Has something to do with JSON.parse maybe?
        _.each(quests, function(quest){
            quest.ranges = [];
            var inspiration = quest.inspiration;
            if (inspiration && inspiration.match(/\S/)){
                var count = 0;
                // Collect first 3 the places inspiration appears.
                while (window.find(inspiration) && count < maxMatches) {
                    count++;
                    sel = document.getSelection();
                    range = sel.getRangeAt(0);
                    if (range) quest.ranges.push(range);
                } 
            }
            clearSelection(sel);
        });
        // Return page to correct postion after running window.find;
        $(window).scrollTop(topOffset);
        // Setup popover for each inspiration.
        _.each(quests, function(quest) {
            _.each(quest.ranges, function(range, index) {
                var chain = new Marker.Chain(range, {
                  id: quest.id
                });
                // Get Range contained by Marker Chain.
                setupGate(quest, chain);
            });
        });
        // We only setup on initial page load.
        initLoad.resolve();
    }
});


function setupGate(quest, chain) {
    var endNode = chain.getEndNode();
    // Check whether adjacent gate exists.
    var gateNode = getAdjacentGateNode(endNode);
    // Create Gate.
    if (!gateNode) {
      gate = new Gate(quest, chain);
    }else{
      gateNode.knovGate.addQuestChain(quest, chain);
    }
}

function clearSelection(sel) {
  // Sets the selection to the beginning of the document for next window.find iteration.
  if (sel) sel.collapse(document.body, 0);
  // Clear selection.
  if (sel) sel.removeAllRanges();
}

function getAdjacentGateNode(node) {
  // Am I a Gate or text node?
  if (node.nodeType === 3) {
    // If textnode then there is no Gate.
    return "text";
  }
  else if (node.className.indexOf('knov-gate') > -1) {
    // Found a Gate.
    return node;
  }

  // Traversal if no gate or text node found.
  var gateNode = null;
  // Check child nodes first.
  if (node.hasChildNodes()) {
    gateNode = getAdjacentGateNode(node.firstChild);
  }
  // Check siblings.
  if (!gateNode && node.nextSibling) {
    gateNode = getAdjacentGateNode(node.nextSibling);
  }
  // Check siblings of ancestors.
  if (!gateNode) {
    var ancestor = node.parentNode;
    // Find first ancestor with siblings.
    while (ancestor && !ancestor.nextSibling) {
      ancestor = ancestor.parentNode;
    }
    if (ancestor) {
      gateNode = getAdjacentGateNode(ancestor.nextSibling);
    }
  }
  if (gateNode === "text") gateNode = null;
  return gateNode;
}
