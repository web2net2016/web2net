// Site info
var AppName = "web2net";
var AppVersion = "1.0.1";
var ApiVersion = "_1";
var deferredPrompt;

$(document).ready(function ()
{
    if ("serviceWorker" in navigator)
    {
        navigator.serviceWorker.register("/service-worker.js").then(function (registration)
        {
            //console.log('Service Worker registration successful with scope: ', registration.scope);
        }).catch(function (err)
        {
            //console.log('Service Worker registration failed: ', err);
        });
    }

    var _azLastScrollTop = 0;
    $(window).scroll(function ()
    {
        $.publish("functionlib/azWindowScroll",
            {
                azWindowScrollTop: parseInt($(window).scrollTop()),
                azWindowScrollDir: ($(window).scrollTop() > _azLastScrollTop) ? "down" : "up"
            });
        _azLastScrollTop = $(this).scrollTop();
    });

    window.setTimeout(function ()
    {
        $.publish("functionlib/azWindowResize",
            {
                azWindowWidth: parseInt(window.innerWidth),
                azWindowHeight: parseInt(window.innerHeight),
                azWindowScrollTop: parseInt($(window).scrollTop()),
                azWindowScrollLeft: parseInt($(window).scrollLeft()),
                azWindowOrientation: (window.innerHeight > window.innerWidth) ? "portrait" : "landscape"
            });
    }, 100);
    $(window).resize(function ()
    {
        $.publish("functionlib/azWindowResize",
            {
                azWindowWidth: parseInt(window.innerWidth),
                azWindowHeight: parseInt(window.innerHeight),
                azWindowScrollTop: parseInt($(window).scrollTop()),
                azWindowScrollLeft: parseInt($(window).scrollLeft()),
                azWindowOrientation: (window.innerHeight > window.innerWidth) ? "portrait" : "landscape"
            });
    });

    $(".az-email").off("click").on("click", function (e)
    {
        var _HREF = $(this).data("content").toLowerCase().replace('(at)', '@');
        window.location.href = "mailto:" + _HREF;
        e.preventDefault();
    });

    //if (window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true)
    //{
    //    console.log("standalone");
    //}
    //else
    //{
    //    $(window).off("beforeinstallprompt").on("beforeinstallprompt", function (e)
    //    {
    //        deferredPrompt = e.originalEvent;
    //        $("body").off("click", showInstallPromotion).on("click", showInstallPromotion);
    //    });
    //}
});

//function showInstallPromotion()
//{
//    deferredPrompt.prompt();
//    deferredPrompt.userChoice.then(function (choiceResult)
//    {
//        if (choiceResult.outcome === "accepted")
//        {
//            console.log('User accepted the A2HS prompt');
//        }
//        else
//        {
//            console.log('User dismissed the A2HS prompt');
//            $("body").off("click", showInstallPromotion);
//        }
//    });
//}

// All Pages
function openContactForm()
{
    closeNavbarMobile();
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
    closeNavbarMobile();
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
    closeNavbarMobile();
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
    closeNavbarMobile();
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
    if (this instanceof AZSlideshow === true)
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
            _Main.SlideShow;
            _Main.SlideIndex = 0;

            if (_Main.Options.azSlideshowArrows)
            {
                _Main.$Slideshow.append('<div class="az-arrows az-arrow-left az-display-left" onclick="plusDivs(-1)">&#10094;</div><div class="az-arrows az-arrow-right az-display-right" onclick="plusDivs(1)">&#10095;</div>');
                _Main.$Slideshow.off().on("mouseenter", "slide, .az-arrows", function ()
                {
                    $.unsubscribe("runSlides");
                    window.clearTimeout(_Main.SlideShow);

                }).on("mouseleave", function ()
                {
                    $.subscribe("runSlides", function (e, data)
                    {
                        _Main.SlideShow = window.setTimeout(runSlides, _Main.Options.azSlideshowTimer);
                    });
                    _Main.SlideShow = window.setTimeout(runSlides, _Main.Options.azSlideshowTimer);
                })
            }

            $.subscribe("functionlib/azWindowResize", function (e, data)
            {
                _Main.$Slideshow.height($("slide:first", _Main.$Slides).height());
            });

            $.subscribe("runSlides", function (e, data)
            {
                _Main.SlideShow = window.setTimeout(runSlides, _Main.Options.azSlideshowTimer);
            });

            _Main.$Slideshow.height($("slide:first", _Main.$Slides).height());
            $("slide:gt(0)", _Main.$Slides).hide();
            _Main.SlideShow = window.setTimeout(runSlides, _Main.Options.azSlideshowTimer);

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
                window.clearTimeout(_Main.SlideShow);
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
                $("slide", _Main.$Slides).fadeOut(100);
                $("slide", _Main.$Slides).eq(_Main.SlideIndex).fadeIn(100);
            }
        }
    }
}