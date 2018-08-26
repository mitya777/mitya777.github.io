// Generated by CoffeeScript 1.10.0
(function() {
  var LocalQuestsPopover,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  window.Knov.LocalQuestsPopover = LocalQuestsPopover = (function(superClass) {
    extend(LocalQuestsPopover, superClass);

    function LocalQuestsPopover() {
      window.addEventListener('message', (function(_this) {
        return function(ev) {
          var height, top;
          if (ev.source === _this.frame.contentWindow && ev.data.action === 'resize') {
            height = ev.data.height;
            top = Math.max(0, parseInt(_this.frame.offsetTop, 10) - parseInt(height, 10) / 2);
            return _this.setStyle({
              top: top + 'px',
              height: height + 'px'
            });
          }
        };
      })(this));
      LocalQuestsPopover.__super__.constructor.apply(this, arguments);
    }

    LocalQuestsPopover.prototype.show = function(rect) {
      var height, left, top;
      this.setStyle({
        display: 'block'
      });
      height = $(this.frame.contentWindow.document.body).find('.container').height();
      top = Math.max(0, parseInt(rect.top, 10) - parseInt(height, 10) / 2);
      left = parseInt(window.innerWidth, 10) - parseInt(this.frame.style.width, 10);
      return this.position({
        top: top,
        left: left,
        height: height
      });
    };

    LocalQuestsPopover.prototype.hide = function() {
      return this.setStyle({
        display: 'none'
      });
    };

    LocalQuestsPopover.prototype.position = function(coords) {
      var height, left, top;
      top = coords.top;
      left = coords.left;
      height = coords.height;
      return this.setStyle({
        top: top + 'px',
        left: left + 'px',
        height: height + 'px'
      });
    };

    return LocalQuestsPopover;

  })(Knovigator.Frame);

}).call(this);
