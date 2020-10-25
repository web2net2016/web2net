
$(document).ready(function ()
{
    $("#section-container-1-col1, #section-container-1-col2").matchHeight();
    $("#section-container-2-col1, #section-container-2-col2, #section-container-2-col3, #section-container-2-col4, #section-container-2-col5, #section-container-2-col6").matchHeight();



    //new AZSlideshow(
    //    {
    //        azSlideshowId: "az-slideshow-1",
    //        azSlideshowArrows: true,
    //        azSlideshowTimer: 3000,
    //        azSlideshowFadeIn: 1000,
    //        azSlideshowFadeOut: 1000
    //    });

    //$("#section-container-cms-col1, #section-container-cms-col2").matchHeight();
    //$("#section-container-woocommerce-col1, #section-container-woocommerce-col2").matchHeight();

    //$("#section-container-allincluded-col1, #section-container-allincluded-col2").matchHeight();

    //var _$SectionCMS = $("#section-cms")
    //var _SectionCMSBottom = parseInt((_$SectionCMS.position().top + _$SectionCMS.outerHeight()) / 1.5);

    //$.subscribe("functionlib/azWindowScroll", function (e, data)
    //{
    //    if (data.azWindowScrollDir == "down")
    //    {
    //        if ($(window).scrollTop() >= _SectionCMSBottom)
    //        {
    //            if (!$("#container-woocommerce").hasClass("container-woocommerce-left"))
    //            {
    //                $("#container-woocommerce").addClass("container-woocommerce-left").animate(
    //                    {
    //                        left: '0',
    //                        opacity: '1'
    //                    }, 500);
    //            }
    //        }

    //    }
    //    if (data.azWindowScrollDir == "up" && data.azWindowScrollTop < 400)
    //    {
    //        $("#container-woocommerce").removeClass("container-woocommerce-left").removeAttr('style');
    //    }
    //});
});