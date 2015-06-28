(function() {
    var config = {
        lowOpacity: 0
    };
    var s = Snap('#Layer_1');
    if (s === null) return; 

    var $context = $('#context')
    $context.on('click', function(ev) {
        ev.stopPropagation();
    });

    function showTemplate(templateId, set, css, ev) {
        console.log('hi');
        ev.stopPropagation();

        $context.show();
        reduceAllOpacity(s);
        set.attr({opacity: 1});
        $context.html($(templateId).html()); 
        $context.css(css);
    }

    function setNext(selector) {
        var set = s.selectAll('.svg');
        set.forEach(function(el) {
            el.removeClass('next-view');
        });

        set = s.selectAll(selector);
        set.forEach(function(el) {
            el.addClass('next-view');
        });
    }

    setNext("#animal_constr");

    // Animal constructor.
    setupClickHandler({
        clickSelector: '#animal_constr, #animal_label, #monkey_inst, #monkey_label',
        showSelector: '.svg-animal, .svg-monkey',
        templateSelector: '#animal_constr_template',
        css: {
            left: '900px',
            marginTop: '-780px'
        },
        next: "#animal_proto"
    });


    // Animal.prototype
    setupClickHandler({
        clickSelector: '#animal_proto, #animal_proto_label',
        showSelector: '.svg-proto',
        templateSelector: '#animal_proto_template',
        css: {
            left: '900px',
            marginTop: '-705px'
        },
        next: "#human_proto"
    });

    // Human.prototype
    setupClickHandler({
        clickSelector: '#human_proto, #human_proto_label',
        showSelector: '.svg-subclass',
        templateSelector: '#human_proto_template',
        css: {
            left: '900px',
            marginTop: '-805px'
        },
        next: "#human_constr"
    });


    // Set up blur event.
    $('html').on('click', function() {
        increaseOpacity(s);
        $context.hide();
    });

    function setupClickHandler(opts) {
        var clickSelector = opts.clickSelector;
        var showSelector = opts.showSelector;
        var templateSelector = opts.templateSelector;
        var css = opts.css;

        var clickSet = s.selectAll(clickSelector);
        var showSet = s.selectAll(showSelector);
        clickSet.forEach(function(el){
            el.click(function(ev) {
                showTemplate(templateSelector, showSet, css, ev);
                setNext(opts.next);
            }); 
        });
    }

    function reduceAllOpacity(s) {
        s.selectAll('polygon, circle, line, path, text, textPath').attr({opacity: config.lowOpacity})
    }

    function increaseOpacity(s) {
        s.selectAll('polygon, circle, line, path, text, textPath').attr({opacity: 1})
    }

})();


