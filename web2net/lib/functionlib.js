// Site info
var AppName = "ebf";
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

// AZ Slideshow
function initSlideshow(Options)
{
    var main = this;
    var _Defaults =
    {
        azSlideshowId: "",
        azSlideshowArrows: false,
        azSlideshowTimer: 3000,
        azSlideshowFadeIn: 1000,
        azSlideshowFadeOut: 1000
    };
    main.Options = $.extend({}, _Defaults, Options || {});

    if (main.Options.azSlideshowId != "")
    {
        main.$Slideshow = $("#" + main.Options.azSlideshowId);
        main.$Slides = main.$Slideshow.children("slide");
        main._SlideIndex = 0;
        main._SlideShowTimer = 0;

        $.subscribe("functionlib/windowResize", function (e, data)
        {
            main.$Slideshow.height(main.$Slides.eq(0).height());
        });

        main.$Slides.not(":first").hide();
        main.$Slideshow.height(main.$Slides.eq(0).height());
        runSlides();

        function runSlides()
        {
            main.$Slides.eq(main._SlideIndex).fadeOut(main.Options.azSlideshowFadeOut);
            main._SlideIndex = (main._SlideIndex != main.$Slides.length - 1) ? main._SlideIndex + 1 : 0;
            main.$Slides.eq(main._SlideIndex).fadeIn(main.Options.azSlideshowFadeIn, function ()
            {
                main._SlideShowTimer = window.setTimeout(runSlides, main.Options.azSlideshowTimer)
            });
        }
    }
}