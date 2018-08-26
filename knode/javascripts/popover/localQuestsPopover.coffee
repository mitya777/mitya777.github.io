window.Knov.LocalQuestsPopover = class LocalQuestsPopover extends Knovigator.Frame
    constructor: ->
        window.addEventListener 'message', (ev) =>
            if ev.source == @frame.contentWindow and ev.data.action == 'resize'
                height = ev.data.height
                top = Math.max(0, parseInt(@frame.offsetTop, 10) - parseInt(height, 10)/2)
                @setStyle
                    top: top + 'px'
                    height: height + 'px'
        super

    show: (rect) ->
        @setStyle({
            display: 'block'
        })

        height = $(@frame.contentWindow.document.body).find('.container').height() + 20

        top = Math.max(0, parseInt(rect.top, 10) - parseInt(height, 10)/2)
        left = parseInt(window.innerWidth, 10) - parseInt(@frame.style.width, 10)

        @position({
            top: top,
            left: left,
            height: height
        })


    hide: () ->
        @setStyle({
            display: 'none'
        })

    position: (coords) ->
        top =  coords.top
        left = coords.left
        height = coords.height
        @setStyle({
            top: top + 'px',
            left: left + 'px',
            height: height + 'px'
        })
