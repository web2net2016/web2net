// Site info
var AppName = "Gunnar og Inges Bilservice";
var AppVersion = "1.0.1";
var ApiVersion = "_1";

$(document).ready(function ()
{
    $('.az-email').click(function (e)
    {
        var _HREF = $(this).data("content").toLowerCase().replace('(at)', '@');
        window.location.href = "mailto:" + _HREF;
        e.preventDefault();
    });
});


function initializeSlideshow(Options)
{
    var _Defaults =
    {
        setArrows: false,
        timer: 3000,
        fadein: 1000,
        fadeout: 1000
    };
    var _Options = $.extend({}, _Defaults, Options || {});

    var _$Slideshow = $(".az-slideshow");
    var _SlideShowTimer = 0;
    var _SlideIndex = 0;

    if (_$Slideshow.length > 0)
    {
        if (_Options.setArrows)
        {
            _$Slideshow.append('<div class="az-arrows az-arrow-left az-display-left" onclick="plusDivs(-1)">&#10094;</div><div class="az-arrows az-arrow-right az-display-right" onclick="plusDivs(1)">&#10095;</div>');
            $(".az-arrows", _$Slideshow).on("mouseenter", function ()
            {
                $.unsubscribe("functionlib/runSlides");
                window.clearTimeout(_SlideShowTimer);

            }).on("mouseleave", function ()
            {
                $.subscribe("functionlib/runSlides", function (e, data)
                {
                    _SlideShowTimer = window.setTimeout(runSlides, _Options.timer);
                });
                runSlides();
            })
        }

        $.subscribe("functionlib/runSlides", function (e, data)
        {
            _SlideShowTimer = window.setTimeout(runSlides, _Options.timer);
        });

        $("slide:gt(0)", _$Slideshow).hide();
        runSlides();

        function runSlides()
        {
            $("slide", _$Slideshow).eq(_SlideIndex).fadeOut(_Options.fadeout);
            _SlideIndex = (_SlideIndex != $("slide", _$Slideshow).length - 1) ? _SlideIndex + 1 : 0;
            $("slide", _$Slideshow).eq(_SlideIndex).fadeIn(_Options.fadein, function ()
            {
                $.publish("functionlib/runSlides");
            });
        }

        plusDivs = function (n)
        {
            $.unsubscribe("functionlib/runSlides");
            window.clearTimeout(_SlideShowTimer);
            _SlideIndex += n;
            showDivs();
        }

        showDivs = function ()
        {
            if (_SlideIndex > $("slide", _$Slideshow).length - 1)
            {
                _SlideIndex = 0;
            }
            if (_SlideIndex < 0)
            {
                _SlideIndex = $("slide", _$Slideshow).length - 1;
            };
            $("slide", _$Slideshow).hide();
            $("slide", _$Slideshow).eq(_SlideIndex).show();
        }
    }
}