// IFrame Manipulation Library.
(function() {
  var root = this;

  // Setup namespace.
  var Knovigator;
  if (root.Knovigator) Knovigator = root.Knovigator;
  else Knovigator = root.Knovigator = {};

  var Frame = Knovigator.Frame = function(props) { 
    console.log('Knov Frame Constructor');
    var frame = this.frame = document.createElement('iframe');
    props = props || {};
    // Set iframe id.
    if (props.id) {
      frame.id = props.id;
    }
    if (props.className) {
      frame.className = props.className;
    }
    // Set iframe content.
    if (props.srcdoc) {
      frame.setAttribute('srcdoc', props.srcdoc);
    } else if (props.src) {
      frame.setAttribute('src', props.src);
    }
    // Set iframe attributes.
    var attrs = props.attributes || {};
    attrs = _.defaults(attrs, this.defaultAttrs);
    _.each(attrs, function(value, key) {
      frame.setAttribute(key, value);
    });
    // LaunchGate style setup. 
    if (props.style) {
      this.setStyle(props.style);
    }
    document.body.appendChild(frame);
    this.initialize.apply(arguments);
  }

  _.extend(Frame.prototype, {
    initialize: function() {},
    defaultAttrs: {
      'frameborder': 0,
      'style': 'border:none',
      'scroll': 'none'
    },
    setStyle: function(style) {
      var frame = this.frame;
      _.each(style, function(value, key) {
        this.frame.style[key] = value;
      }, this);
    }
  });

  Frame.extend = function(protoProps) {
    var SuperConstructor = this; 
    var SubConstructor = function() {
      return SuperConstructor.apply(this, arguments);
    };

    var Surrogate = function() {
      this.constructor = SubConstructor;
    }
    Surrogate.prototype = SuperConstructor.prototype;
    SubConstructor.prototype = new Surrogate();

    if (protoProps) _.extend(SubConstructor.prototype, protoProps);
    return SubConstructor;
  }

})();
