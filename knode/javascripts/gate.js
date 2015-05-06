/*
This is the annotation marker which when clicked on displays the Quests related to the text this Gate is annotating.
*/

(function() {
  var highlightColor = "blue";
  var popoverId = 0;

  var Gate = window.Gate = function(quest, chain, options) {
    // Map Quest ids to the associated Quest objects, and the array of Chains associated with that Quest.
    // A Quest's Chain wraps the part of the DOM displaying text matching a Quest's inspiration.
    options = options || {};
    this.options = _.extend({
      tag: 'div',
      className: 'knov-gate'
    }, options);
    // Insert into DOM and attach behavior.
    this.node = this._insertGate(chain, this.options);
    //$(this.node).popover();
    this.questChains = {};
    this.addQuestChain(quest, chain);
    this.node.knovGate = this;
  }

  // Setup gate prototype.
  _.extend(Gate.prototype, {
    // Chains are groups of DOM ranges but marked off by html node markers.
    // They represent text which inspired the associated Quest (search).
    addQuestChain: function(quest, chain) {
      this.questChains[quest.id] = {
        quest: quest,
        chains: [chain]
      };
      this._setupHover();
      this._setupPopover();
    },

    getNode: function() {
      return this.node; 
    },

    getQuests: function() {
      // Get the quests associated with this Gate.
    },
    
    style: {
      "vertical-align": "super",
      "font-size": "smaller",
      "display": "inline-block",
      "height": "7px",
      "width": "7px",
      "border": "solid 1px rgb(0, 82, 255)",
      "border-radius": "1px",
      "background-color": "rgb(181, 190, 236)",
      "margin": "0px",
      "margin-left": "1px",
      "cursor": "pointer"
    },
    
    _insertGate: function(chain, options) {
      var node = document.createElement(options.tag);
      node.gate = this;
      node.className = options.className;
      // Get exterior:true Range surrounding the Marker Chain.
      var range = chain.getRange(true);
      insertNodeAtEnd.call(range, node);
      range.detach();
      $(node).css(this.style);
      return node;
    },

    _setupPopover: function() {
      // Popover was initialized in the Gate constructor.
      var quests = _.pluck(this.questChains, 'quest');
      var id = popoverId;
      popoverId++;
      //var popoverTemplate = window.Handlebars.templates["knodePopover"];
      $.get('/knode/templates/knodePopover.handlebars', function(html) {
          var popoverTemplate = Handlebars.compile(html);
          var localQuestsHTML = popoverTemplate({
              quests: quests,
              inspiration: this.longestInspiration,
              js: Knov.getURL('/knode/javascripts/popover/frame/localQuests.js'),
              css: Knov.getURL('/knode/css/frame/knovPopover.css'),
              iconsCss: Knov.getURL('/knode/vendor/font-awesome-4.2.0/css/font-awesome.min.css'),
              jqueryJs: Knov.getURL('/bower_components/jquery/dist/jquery.js'), 
              qTipCss: Knov.getURL('/knode/vendor/qtip/jquery.qtip.min.css'),
              qTipJs: Knov.getURL('/knode/vendor/qtip/jquery.qtip.min.js')
          });
          if (this.questsFrame) {
            $(this.questsFrame.frame).remove();
            this.questsFrame.delete;
          }
          this.questsFrame = new Knovigator.LocalQuestsPopover({
            id: 'localQuestsPopover-' + id,
            className: 'knodePopover',
            srcdoc: localQuestsHTML,
            style: {
              position: 'absolute',
              width: '550px',   
              margin: '0', 
              display: 'none',
              zIndex: '100000'
            }
          });
          var popoverFrame = this.questsFrame.frame;
          $(popoverFrame).load(function(ev) {
            this._setupPopoverEvents(popoverFrame, quests, document.title, document.location.href);
          }.bind(this));
          var $node = $(this.getNode());
          // Inject popover content.
          //$node.popover("content", popoverFrame.frame);
          var spans;
          var self = this;
          $node.on("click", function(event) {
            event.preventDefault();
            event.stopPropagation();
            // Get active spans set by hover handler.
            spans = Gate.activeSpans;
            offset = $node.offset();
            self.questsFrame.show({top: offset.top, right: offset.left + $node.width(), bottom: offset.top + $node.height(), left: offset.left});
            _.each(spans, function(span) {
              var $span = $(span);
              // This keeps the selection colored while the popover is showing.
              $span.addClass("gate-k");
            });
            // Set up handler to remove popover.
            $("html").on("click", function removePopover(event){
              self.questsFrame.hide();
              _.each(spans, function(span) {
                var $span = $(span);
                $span.removeClass("gate-k");
                if (!$span.hasClass('hover-k')) {
                  Helper.cssColor.call(span, highlightColor, "off");
                  Helper.removeSpan(span);
                }
              });
              $('html').off('click', removePopover);
            });
          });
      }.bind(this));
    },

    _setupHover: function() {
      // Get quests associated with this Gate.
      var $node = $(this.getNode());
      var quests = _.pluck(this.questChains, 'quest');
      // Get quest with longest inspiration, and the chain associated with that quest.
      quests = _.sortBy(quests, function(quest) {
        quest.inspiration.length;
      });
      var longestInspiration = quests[quests.length - 1];
      var shortestInspiration = quests[0];
      var chain = this.questChains[longestInspiration.id].chains[0];
      // Surround the Chain's ranges with spans so we can manipulate those ranges.
      // Make spans available in both hover in and out callback.
      var gate = this; 
      gate.longestInspiration = longestInspiration.inspiration;
      var spans;
      // Unbind old hover.
      $node.off('mouseenter mouseleave');
      $node.hover(function(event) { 
        // Make these spans available to hover out handler and the popover's click event in _setupPopover.
        spans = Gate.activeSpans = Helper.surroundWithSpans(chain);
        _.each(spans, function(span) { 
          $(span).addClass("hover-k");
          Helper.cssColor.call(span, highlightColor, "on");
        });
      }, function(event) { 
        // Uncolor, and remove spans.
        _.each(spans, function(span) {
          var $span = $(span);
          $span.removeClass('hover-k');
          // Only remove if gate is not showing.
          if (!$span.hasClass('gate-k')) {
            Helper.cssColor.call(span, highlightColor, 'off');
            Helper.removeSpan(span);
          }
          Gate.activeSpans = null;
        });
      });
    },

    _setupPopoverEvents: function(popoverFrame, quests, title, address) {
        var context = popoverFrame.contentDocument;

        // Unbind any existing handlers.
        //$('.question a', context).off('click');
        $('.question a', context).on('click', function(ev) {
            if ($(ev.currentTarget).attr('href') == '') {
                return false;
            }else{
                inspiration = _.pluck(quests, 'inspiration')[0];
                chrome.extension.sendMessage( {"script": "searchGate", "userSelection": inspiration, "url": {"address": address, "title": title}});
            }
        });

        // Unbind any existing handlers.
        //$('.vote', context).off('click');
        $('.vote', context).on('click',  function(ev) {
            votableId = $(ev.currentTarget).data('votable-id');
            votableType = $(ev.currentTarget).data('votable-type');
            votableValue = $(ev.currentTarget).data('votable-value');
            console.log('vote: ', votableId, votableType, votableValue, window.knovHost);
            $.ajax({
                url: window.knovHost + '/votes/register',
                type: 'POST',
                data: {
                    votable_id: votableId,
                    votable_type: votableType,
                    value: votableValue
                }
            }).done(function(data) {
                console.log(data);
                if (data.success) {
                    $('.vote-value[data-votable-id="'+votableId+'"][data-votable-type="'+votableType+'"]', context).html(data.vote_value);
                    $('.vote[data-votable-id="'+votableId+'"][data-votable-type="'+votableType+'"]', context).removeClass('voted');
                    if (data.user_vote > 0)
                        $('.vote-up[data-votable-id="'+votableId+'"][data-votable-type="'+votableType+'"]', context).addClass('voted');
                    else if (data.user_vote < 0)
                        $('.vote-down[data-votable-id="'+votableId+'"][data-votable-type="'+votableType+'"]', context).addClass('voted');
                }
            });
        }); 
    }
  });
  

  var Helper = {
    surroundWithSpans: function(chain) { 
      var ranges = chain.getRanges();
      var spans = [];
      _.each(ranges, function(range) {
        spans.push(Helper.surroundWithTag(range, "span"));
      });
      return spans;
    },
    
    surroundWithTag: function(range, tag) {
      var el = document.createElement(tag);
      el.className = "knov";
      range.surroundContents(el);
      return el;
    },

    removeSpan: function(parent) {
      while(parent.firstChild){
        parent.parentNode.insertBefore(parent.firstChild, parent);
      }
      var gParent = parent.parentNode;
      if (gParent) {
        gParent.removeChild(parent);
        gParent.normalize();
      }
    },

    cssColor: function(color, onOrOff){
      $this = $(this);
      if (onOrOff === "on"){
          $this.find("*").andSelf().css("color", color);
      }else if(!$this.hasClass("gate")){
          $this.find("*").andSelf().css("color", "");
      }
    }
  };

  function insertNodeAtEnd(node) {
    var range = this.cloneRange();
    range.collapse(false);
    range.insertNode(node);
    range.detach();
    this.setEndAfter(node);
  };

})();
