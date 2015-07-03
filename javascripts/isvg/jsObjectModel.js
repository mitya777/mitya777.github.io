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
        $context.show();
        reduceAllOpacity(s);
        set.attr({opacity: 1});
        $context.html($(templateId).html()); 
        $context.css(css);

        setupHover()
    }

    function setNext(selector) {
        var set = s.selectAll('.svg');
        set.forEach(function(el) {
            el.removeClass('next-view');
            el.removeClass('up-stroke-width');
            $('.svg').unbind('mouseenter mouseleave');
        });

        nextPols = s.selectAll(selector);
        nextPols.forEach(function(el) {
            el.addClass('next-view');
        });

        labelSelector = selector + "_label"
        nextLabels = s.selectAll(labelSelector);
        nextLabels.forEach(function(el) {
            el.addClass('next-view-label');
        });
  
        $(selector + ', ' + labelSelector).hover(function(ev) {
            s.select(selector).addClass('up-stroke-width');
        }, function() {
            s.select(selector).removeClass('up-stroke-width');
        })
    }

    setNext("#animal_constr");

    // Animal constructor.
    setupClickHandler({
        clickSelector: '#animal_constr, #animal_constr_label, #monkey_inst, #monkey_label',
        showSelector: '.svg-animal, .svg-monkey',
        templateSelector: '#animal_constr_template',
        css: {
            left: '900px',
            marginTop: '-780px'
        },
        next: "#animal_proto"
    });

    // Setup start.
    $('#start_btn').hover(function() {
        s.select('#animal_constr').addClass('up-stroke-width');
    }, function() {
        s.select('#animal_constr').removeClass('up-stroke-width');
    });

    $('#start_btn').on('click', function(ev) {
        ev.stopPropagation();
        showTemplate('#animal_constr_template', s.selectAll('.svg-animal, .svg-monkey'), {
            left: '900px',
            marginTop: '-780px'
        }, ev);
        setNext('#animal_proto');
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
        setNext('#animal_constr');
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
                ev.stopPropagation();
                showTemplate(templateSelector, showSet, css);
                setNext(opts.next);
            }); 
        });
    }

    function setupHover() {
        var hovers = [
            'animal_constr',
            'animal_proto',
            'monkey_inst'
        ]
        hovers.forEach(function(selector) {
            setupElementHover(selector);
        });
    }

    function setupElementHover(selector) {
        // Hover.
        $('.hover-' + selector.replace('_', '-')).hover(function(ev) {
            s.select('#' + selector).addClass('hovered');
        }, function(ev){ 
            s.select('#' + selector).removeClass('hovered');
        });
    }

    function reduceAllOpacity(s) {
        s.selectAll('polygon, circle, line, path, text, textPath').attr({opacity: config.lowOpacity})
    }

    function increaseOpacity(s) {
        s.selectAll('polygon, circle, line, path, text, textPath').attr({opacity: 1})
    }
})();


