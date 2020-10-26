
$(document).ready(function ()
{
    //adjustStyle();
    //$(window).resize(function ()
    //{
    //    adjustStyle();
    //});

    $(".az-email").off("click").on("click", function (e)
    {
        var _HREF = $(this).attr("data-content").toLowerCase().replace('(at)', '@');
        window.location.href = "mailto:" + _HREF;
        e.preventDefault();
    });

    $.subscribe("functionlib/azWindowScroll", function (e, data)
    {
        if (window.innerWidth > 991 && data.azWindowScrollDir == "down" && data.azWindowScrollTop > 400)
        {
            if (!$(".az-navbar-top-content").hasClass("az-navbar-small"))
            {
                $(".az-navbar-top-content").addClass("az-navbar-small");
                $("#container-navbar").removeClass("az-container").addClass("az-container-fluid");
                $(".az-navbar-top").addClass("az-navbar-sticky");
                $(".az-navbar > .az-navbar-top-content > .az-navbar-branding").css({ "width": "85px", "margin": "18px 0 0 70px" });
                $(".az-navbar > .az-navbar-top-content > .az-navbar-menu-wrapper > .az-navbar-menu.az-display-left").css({ "margin": "4px 0 0 120px" });
                $(".az-navbar > .az-navbar-top-content > .az-navbar-menu-wrapper > .az-navbar-menu.az-display-left > li > a").css({ "font-size": "14px" });
                $(".az-navbar > .az-navbar-top-content > .az-navbar-menu-wrapper > .az-navbar-menu.az-display-right").css({ "margin-top": "4px" });
            }
        }
        if (data.azWindowScrollDir == "up" && data.azWindowScrollTop < 400)
        {
            if ($(".az-navbar-top-content").hasClass("az-navbar-small"))
            {
                $(".az-navbar-top-content").removeClass("az-navbar-small");
                $("#container-navbar").removeClass("az-container-fluid").addClass("az-container");
                $(".az-navbar-top").removeClass("az-navbar-sticky");
                $(".az-navbar > .az-navbar-top-content > .az-navbar-branding").removeAttr('style');
                $(".az-navbar > .az-navbar-top-content > .az-navbar-menu-wrapper > .az-navbar-menu.az-display-left").removeAttr('style');
                $(".az-navbar > .az-navbar-top-content > .az-navbar-menu-wrapper > .az-navbar-menu.az-display-left > li > a").removeAttr('style');
                $(".az-navbar > .az-navbar-top-content > .az-navbar-menu-wrapper > .az-navbar-menu.az-display-right").removeAttr('style');
            }
        }
    });
});

// All Pages
function openContactForm()
{
    closeNavbarMobile();
    AZModalDialogContactForm = new AZModalDialog(
        {
            azModalDialogId: "ContactForm",
            azModalDialogTitle: "Kontakt oss",
            azModalDialogWidth: 650,
            azModalDialogHeight: 450,
            azModalDialogNoParentScroll: true,
            azModalDialogDraggable: false,
            azModalDialogiFrameURL: "kontakt.html"
        });
}

function closeModalDialog(Options)
{
    var _Defaults =
    {
        RefreshPage: true,
        CloseModal: true,
        RunFunctionName: "",
        RunFunctionArgs: []
    };
    var _Options = $.extend({}, _Defaults, Options || {});

    if (_Options.RefreshPage === true)
    {
    }
    if (_Options.CloseModal === true)
    {
        AZModalDialogContactForm.azModalDialogClose();
        AZModalDialogContactForm = {};
    }
    if (_Options.RunFunctionName != "")
    {
        window.setTimeout(function ()
        {
            window[_Options.RunFunctionName].apply(null, _Options.RunFunctionArgs);
        }, 200);
    }
}

function closeNavbarMobile()
{
    var _$NavbarTopContent = $(".az-navbar-top-content");
    if (_$NavbarTopContent.hasClass("mobile"))
    {
        _$NavbarTopContent.removeClass("mobile");
    }
}

var _WindowWidth = 0;
function adjustStyle()
{
    if ($("#div-window-size").length == 0)
    {
        $("body").append('<div id="div-window-size" style="position: fixed; z-index: 499999; left: 0; bottom: 0; width: 100%; height: 20px; text-align: center;"></div>');
    }

    _WindowWidth = parseInt(window.innerWidth);
    if (_WindowWidth > 1199)
    {
        $("#div-window-size").css({ "background-color": "#337ab7", "color": "#ffffff" }).html("xl - (1200 - &#8734) - " + _WindowWidth + " px");
    }
    else if (_WindowWidth > 991 && _WindowWidth < 1200)
    {
        $("#div-window-size").css({ "background-color": "#5cb85c", "color": "#ffffff" }).html("lg - (992 - 1199) - " + _WindowWidth + " px");
    }
    else if (_WindowWidth > 767 && _WindowWidth < 993)
    {
        $("#div-window-size").css({ "background-color": "#5bc0de", "color": "#ffffff" }).html("md - (768 - 991) - " + _WindowWidth + " px");
    }
    else if (_WindowWidth > 576 && _WindowWidth < 768)
    {
        $("#div-window-size").css({ "background-color": "#f0ad4e", "color": "#ffffff" }).html("sm - (577 - 767) - " + _WindowWidth + " px");
    }
    else
    {
        $("#div-window-size").css({ "background-color": "#d9534f", "color": "#ffffff" }).html("xs - (0 - 576) - " + _WindowWidth + " px");
    }
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
                _Main.$Slideshow.height(parseInt($("slide:first", _Main.$Slides).height()) - 3);
            });

            $.subscribe("runSlides", function (e, data)
            {
                _Main.SlideShow = window.setTimeout(runSlides, _Main.Options.azSlideshowTimer);
            });

            _Main.$Slideshow.height(parseInt($("slide:first", _Main.$Slides).height()) - 3);
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
    else
    {
        return new AZSlideshow(Options);
    }
}