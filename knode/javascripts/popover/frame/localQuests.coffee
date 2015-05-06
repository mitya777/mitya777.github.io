# This is injected into the popover iframe.
$(document).ready ->
    width = $('body').width()
    height = $('body').height()
    window.parent.postMessage({action: 'resize', width: width, height: height}, '*')

    $('.content input').on 'input', (ev) ->
        console.log('typing')
        href = 'https://google.com/search?q=' + encodeURIComponent($.trim($(ev.currentTarget).val()))
        console.log('HREF:', href)
        $(ev.currentTarget).closest('.question').find('a').attr('href', href)


    $('.content input').on 'focus', (ev) ->
        $('.launch-quest').addClass('focused')

    $('.content input').on 'blur', (ev) ->
        $('.launch-quest').removeClass('focused')

    $('.question').not('.new-question-container').hover (ev) ->
        $('.launch-quest').removeClass('focused')

    $('.question.new-question-container').hover (ev) ->
        if $('.question.new-question-container input').is(':focus')
            $('.launch-quest').addClass('focused')


    tipStyle = {
        classes: 'qtip-dark qtip-shadow qtip-custom'
    }

    $('.launch-quest').qtip({
        content:
            attr: 'data-tooltip'

        position:
            my: 'right center',
            at: 'left center',

        style: tipStyle
    })

    $('.launch-quest').on('click', (ev) ->
        $(ev.currentTarget).qtip('hide')
    )
