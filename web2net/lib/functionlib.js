
// Site info
var AppName = "web2net";
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

// All Pages
function openContactForm()
{
    initializeModalDialog(
    {
        dialogNoParentScroll: true,
        dialogDraggable: false,
        dialogTitle: "Kontakt oss",
        dialogWidth: 650,
        dialogHeight: 450,
        dialogiFrameURL: "kontakt.html"
    });
}

// produkter.html
function openContentInfo()
{
    initializeModalDialog(
    {
        dialogModal: false,
        dialogNoParentScroll: true,
        dialogDraggable: false,
        dialogTitle: "Seksjoner",
        dialogWidth: 700,
        dialogHeight: 750,
        dialogText: $("#ContentInfo").html()
    });
}

function openDesign()
{
    $('html, body').stop().animate(
    {
        scrollTop: $("#accordion-2").offset().top
    },
    {
        easing: 'easeInOutExpo',
        duration: 1500
    });
    setAccordion(2);
}

function openSocialMedia(SelectedId)
{
    initializeModalDialog(
    {
        dialogModal: false,
        dialogNoParentScroll: true,
        dialogDraggable: false,
        dialogTitle: SelectedId,
        dialogWidth: 450,
        dialogHeight: 280,
        dialogText: $("#" + SelectedId).html()
    });
}

// AZ Slideshow
function AZSlideshow(Options)
{
    var _Main = this;
    var _Defaults =
    {
        azSlideshowId: "",
        azSlideshowArrows: false,
        azSlideshowTimer: 3000,
        azSlideshowFadeIn: 1000,
        azSlideshowFadeOut: 1000
    };
    _Main.Options = $.extend({}, _Defaults, Options || {});

    if (_Main.Options.azSlideshowId != "")
    {
        _Main.$Slideshow = $("#" + _Main.Options.azSlideshowId);
        _Main.$Slides = $(".az-slides", _Main.$Slideshow);
        _Main.SlideShowTimer = 0;
        _Main.SlideIndex = 0;

        if (_Main.Options.azSlideshowArrows)
        {
            _Main.$Slideshow.append('<div class="az-arrows az-arrow-left az-display-left" onclick="plusDivs(-1)">&#10094;</div><div class="az-arrows az-arrow-right az-display-right" onclick="plusDivs(1)">&#10095;</div>');
            $(".az-arrows", _Main.$Slideshow).on("mouseenter", function ()
            {
                $.unsubscribe("runSlides");
                window.clearTimeout(_Main.SlideShowTimer);

            }).on("mouseleave", function ()
            {
                $.subscribe("runSlides", function (e, data)
                {
                    _Main.SlideShowTimer = window.setTimeout(runSlides, _Main.Options.azSlideshowTimer);
                });
                window.setTimeout(runSlides, _Main.SlideShowTimer);
            })
        }

        $.subscribe("functionlib/azWindowResize", function (e, data)
        {
            _Main.$Slideshow.height($("slide:first", _Main.$Slides).height());
        });

        $.subscribe("runSlides", function (e, data)
        {
            _Main.SlideShowTimer = window.setTimeout(runSlides, _Main.Options.azSlideshowTimer);
        });

        _Main.$Slideshow.height($("slide:first", _Main.$Slides).height());
        $("slide:gt(0)", _Main.$Slides).hide();
        window.setTimeout(runSlides, _Main.Options.azSlideshowTimer);

        function runSlides()
        {
            $("slide", _Main.$Slides).eq(_Main.SlideIndex).fadeOut(_Main.Options.azSlideshowFadeOut);
            _Main.SlideIndex = (_Main.SlideIndex != $("slide", _Main.$Slides).length - 1) ? _Main.SlideIndex + 1 : 0;
            $("slide", _Main.$Slides).eq(_Main.SlideIndex).fadeIn(_Main.Options.azSlideshowFadeIn, function ()
            {
                $.publish("runSlides");
            });
        }

        plusDivs = function (n)
        {
            $.unsubscribe("runSlides");
            window.clearTimeout(_Main.SlideShowTimer);
            _Main.SlideIndex += n;
            showDivs();
        }

        showDivs = function ()
        {
            if (_Main.SlideIndex > $("slide", _Main.$Slides).length - 1)
            {
                _Main.SlideIndex = 0;
            }
            if (_Main.SlideIndex < 0)
            {
                _Main.SlideIndex = $("slide", _Main.$Slides).length - 1;
            };
            $("slide", _Main.$Slides).hide();
            $("slide", _Main.$Slides).eq(_Main.SlideIndex).show();
        }
    }
}