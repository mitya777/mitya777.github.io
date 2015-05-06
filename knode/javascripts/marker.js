// Persistent wrapper around DOM Ranges using empty spans as range boundaries.
// This makes the range more persistent when DOM is dynamically updated.
// Native Range objects can be generated on the fly from the relative Marker positions.

// Dependencies:
//  Underscore
//  Rangy
(function(){
  var Marker = window.Marker = {};

  // A BoundaryNode is an empty span node marking a location in the DOM.
  var BoundaryNode = Marker.BoundaryNode = function(locationRange, options) {
    // Marker Pair which contains this Boundary.
    if (options.parentPair) this.parentPair = options.parentPair;
    // Setup element.
    this.node = document.createElement('span');
    this.node.className = 'marker-boundary' + (options.className ? options.className : '');
    if (options.id) {
      this.node.id = (options.start ? 'start_' : 'end_') + options.id + '_' + _.uniqueId();
    }
    // Setup data attributes.
    var data = options.data || {};
    _.each(data, function(key, value) {
      this.node.dataset[key] = value;
    }, this);
    // Range.insertNode inserts at the beginning of the Range.
    var range;
    if (options.start) { 
      this.node.dataset.start = true;
      range = locationRange.cloneRange();
    }else{
      this.node.dataset.start = false;
      range = locationRange.cloneRange();
      range.collapse(false);
    } 
    range.insertNode(this.node);
    // Cleanup.
    range.detach();
    this.node.parentNode.normalize();
  }

  // A start and end  BoundaryNode, analogous to a Range.
  var Pair = Marker.Pair = function(range, options) {
    // Each Pair consists of a start and end BoundaryNode, indicated by start option.
    this.startBoundary = new BoundaryNode(range, _.extend(options, {
      start: true,
      parentPair: this
    }));
    this.endBoundary = new BoundaryNode(range, _.extend(options, {
      start: false,
      parentPair: this
    }));
    // The Chain containing this Marker Pair.
    if (options.parentChain) {
      this.parentChain = options.parentChain;
    }
  }
  _.extend(Pair.prototype, {
    getRange: function(exterior) {
      return Helpers.getRange(this.startBoundary.node, this.endBoundary.node, exterior);
    }
  });

  // An area of the DOM spanning multiple Marker Pairs. 
  var Chain = Marker.Chain = function(range, options) {
    var options = options || {};
    this.pairs = [];
    this.pairs = this._setPairs(range, options);
  };

  // Define Chain constructor's prototype.
  _.extend(Chain.prototype, {
    getRange: function(exterior) {
      var startNode = this.getStartNode();
      var endNode = this.getEndNode();
      return Helpers.getRange(startNode, endNode, exterior);
    },

    getRanges: function() {
      var ranges = [];
      _.each(this.pairs, function(pair) {
        ranges.push(pair.getRange(true));
      }, this);
      return ranges;
    },

    getStartBoundary: function() {
      return this.pairs[0].startBoundary;
    },

    getEndBoundary: function() {
      return this.pairs[this.pairs.length-1].endBoundary;
    },

    getStartNode: function() {
      return this.getStartBoundary().node;
    },

    getEndNode: function() {
      return this.getEndBoundary().node;
    },

    _setPairs: function(range, options) {
      var pairs;
      var range = new rangy.WrappedRange(range);
      if (range.canSurroundContents()) {
        range = range.nativeRange;
        pairs = [ new Pair(range, _.extend(options, {parentChain: this})) ];
      }else{
        range = range.nativeRange;
        var startPair = this._setStartPair(range, options);
        var middlePairs = this._setMiddlePairs(range, options);
        var endPair = this._setEndPair(range, options);
        pairs = [startPair, middlePairs, endPair];
      }
      // Flatten the  nested arrays of Pairs returned by recursion.
      return _.flatten(pairs);
    },

    _setStartPair: function(range, options) {
      // Set markers around the part of the range contained in the first non-text element.
      var head = this._getRangeHead(range);
      return new Pair(head, _.extend(options, {parentChain: this}));
    },

    _setMiddlePairs: function(range, options) {
      // Set markers around the part of the range between the start and end containers.
      var nonTextStartContainer = this._getNonTextParent(range.startContainer);
      var nonTextEndContainer = this._getNonTextParent(range.endContainer);
      var middleRange = document.createRange();
      middleRange.setStartAfter(nonTextStartContainer);
      middleRange.setEndBefore(nonTextEndContainer);
      if (middleRange.collapsed) return [];
      // Return a Pair around this range if it can be surrounded.
      if (new rangy.WrappedRange(middleRange).canSurroundContents()) {
        return new Pair(middleRange, _.extend(options, {parentChain: this}));
      }else{ 
        // If this part of the range also spans multiple non-text parents, recursively set Pairs.
        return this._setPairs(middleRange, options); 
      }
    },

    _setEndPair: function(range, options) {
      var tail = this._getRangeTail(range);
      return new Pair(tail, _.extend(options, {parentChain: this}));
    },

    _getRangeHead: function(range) { 
      // Get the portion of range contained by start container.
      var head = document.createRange();
      head.selectNodeContents(range.startContainer);
      head.setStart( range.startContainer, range.startOffset);
      return head;
    },

    _getRangeTail: function(range) { 
      // Get the portion of range contained by start container.
      var tail = document.createRange();
      tail.selectNodeContents(range.endContainer);
      tail.setEnd( range.endContainer, range.endOffset);
      return tail;
    },

    _getNonTextParent: function(node) {
      // If Text, CDataSection or Comment node return parent.
      if (_.contains([3,4,8], node.nodeType)) {
        return node.parentNode;
      }
      return node;
    }
  });

  var Helpers = Marker.Helpers = {
    // Given two nodes, get the containing or surrounded Range.
    getRange: function(startNode, endNode, exterior) { 
      var range = document.createRange();
      if (exterior) {
        // Create Range outside the markers.
        range.setStartBefore(startNode);
        range.setEndAfter(endNode);
      }else{
        // Create Range inside the markers.
        range.setStartAfter(startNode);    
        range.setEndBefore(endNode);
      }
      return range;
    },
    destruct: function() {},
    extend: function(proto) {
      
    }
  };
})();
