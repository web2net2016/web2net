
$(document).ready(function ()
{
    adjustStyle();
    $(window).resize(function ()
    {
        adjustStyle();
    });

    new AZSlideshow(
        {
            azSlideshowId: "az-slideshow-1",
            azSlideshowArrows: true,
            azSlideshowTimer: 3000,
            azSlideshowFadeIn: 1000,
            azSlideshowFadeOut: 1000
        });

    $("#section-container-cms-col1, #section-container-cms-col2").matchHeight();
    $("#section-container-woocommerce-col1, #section-container-woocommerce-col2").matchHeight();
    $("#section-container-tools-col1, #section-container-tools-col2, #section-container-tools-col3").matchHeight();
    $("#section-container-allincluded-col1, #section-container-allincluded-col2").matchHeight();

    $("#cmdWordPress").off("click").on("click", function ()
    {
        navigateTo("produkter.html?ScrollTo=container-2");
    });
    $("#cmdStatiskWeb").off("click").on("click", function ()
    {
        navigateTo("produkter.html?ScrollTo=container-4");
    });
    $("#cmdWooCommerce").off("click").on("click", function ()
    {
        navigateTo("produkter.html?ScrollTo=container-woocommerce");
    });
    $("#cmdWebmasterTools").off("click").on("click", function ()
    {
        navigateTo("produkter.html?ScrollTo=container-6&Accordion=3");
    });
    $("#cmdGoogleAnalytics").off("click").on("click", function ()
    {
        navigateTo("produkter.html?ScrollTo=container-6&Accordion=4");
    });
    $("#cmdSosialeMedier").off("click").on("click", function ()
    {
        navigateTo("produkter.html?ScrollTo=container-6&Accordion=5");
    });
    $("#cmdAltInkludert").off("click").on("click", function ()
    {
        navigateTo("produkter.html?ScrollTo=container-6&Accordion=0");
    });
    $("#cmdServiceavtale").off("click").on("click", function ()
    {
        navigateTo("produkter.html?ScrollTo=container-6&Accordion=1");
    });

    var _$SectionCMS = $("#section-cms")
    var _SectionCMSBottom = parseInt((_$SectionCMS.position().top + _$SectionCMS.outerHeight()) / 1.5);

    $.subscribe("functionlib/azWindowScroll", function (e, data)
    {
        if (data.azWindowScrollDir == "down" && data.azWindowScrollTop > 400)
        {
            if (window.innerWidth > 991)
            {
                if (!$(".az-navbar-top-content").hasClass("az-navbar-small"))
                {
                    $(".az-navbar-top-content").addClass("az-navbar-small");
                    $("#container-navbar").removeClass("az-container").addClass("az-container-fluid");
                    $(".az-navbar-top").addClass("az-navbar-sticky");
                    $(".az-navbar > .az-navbar-top-content > .az-navbar-branding").css({ "width": "85px", "margin": "12px 0 0 70px" });
                    $(".az-navbar > .az-navbar-top-content > .az-navbar-menu-wrapper > .az-navbar-menu.az-display-left").css({ "margin": "4px 0 0 120px" });
                    $(".az-navbar > .az-navbar-top-content > .az-navbar-menu-wrapper > .az-navbar-menu.az-display-left > li > a").css({ "font-size": "14px" });
                    $(".az-navbar > .az-navbar-top-content > .az-navbar-menu-wrapper > .az-navbar-menu.az-display-right").css({ "margin-top": "4px" });
                }
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
        if (data.azWindowScrollDir == "down")
        {
            if ($(window).scrollTop() >= _SectionCMSBottom)
            {
                if (!$("#container-woocommerce").hasClass("container-woocommerce-left"))
                {
                    $("#container-woocommerce").addClass("container-woocommerce-left").animate(
                        {
                            left: '0',
                            opacity: '1'
                        }, 500);
                }
            }

        }
        if (data.azWindowScrollDir == "up" && data.azWindowScrollTop < 400)
        {
            $("#container-woocommerce").removeClass("container-woocommerce-left").removeAttr('style');
        }
    });
});




//$("#container-woocommerce").addClass("container-woocommerce-left").animate(
//{
//    left: '0',
//    opacity: '1'
//},
//{
//    duration: 500,
//    specialEasing: {
//        width: "linear",
//        height: "easeOutBounce"
//    },
//    complete: function ()
//    {
//        var _Self = $(this);
//        window.setTimeout(function ()
//        {
//            _Self.find("img").css({ "transform": "rotate(-10deg)" });
//        }, 500);
//    }
//});
//$("#section-woocommerce").animate(
//    {
//        left: '0',
//        opacity: '1'
//    }, 500);
//$("#section-woocommerce").animate(
//    {
//        left: '-1000px',
//        opacity: '0'
//    }, 500);
//$("#section-woocommerce").addClass("section-woocommerce-active");