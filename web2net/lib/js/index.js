﻿
$(document).ready(function ()
{
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