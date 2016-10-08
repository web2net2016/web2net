$(document).ready(function()
{
    // Navnbar Link 
    $("a.nav-link").bind("click", function(event)
    {
        var $anchor = $(this);
        $("html, body").stop().animate(
        {
            scrollTop: $($anchor.attr("href")).offset().top
        }, 1500, "easeInOutExpo");
        event.preventDefault();
    });

    // Navnbar Left / Right
    $(".cd-navbar").click(function()
    {
        var options = {};
        var direction = "left";
        if ($(this).hasClass("cd-right"))
        {
            direction = "right";
        }
        if ($(".cd-panel").hasClass("is-visible") == true)
        {
            $(".cd-panel").removeClass("is-visible");
            options[direction] = 0;
            $(this).animate(options, 200);
            $(".cd-lines", this).removeClass("cd-lines-rotated");
        }
        else
        {
            $(".cd-panel").addClass("is-visible");
            var _PanelContainerPosition = parseInt($(".cd-panel-container").width());
            options[direction] = _PanelContainerPosition;
            $(this).animate(options, 200);
            $(".cd-lines", this).addClass("cd-lines-rotated");
        }
    });
});

function adjustWidth()
{
    var _WindowWidth = parseInt($(window).width());
    if (_WindowWidth >= 1200)
    {
        $("#section1-table").css({ "height": "" + $("#section1-image").height() + "px" });
        $("#section1-logo").css({ "margin-left": "0" });
        if ($("#section6-blockquote").hasClass("blockquote-reverse") == false)
        {
            $("#section6-blockquote").addClass("blockquote-reverse");
        }
    }
    else if (_WindowWidth >= 992 && _WindowWidth < 1200)
    {
        $("#section1-table").css({ "height": "0" });
        $("#section1-logo").css({ "margin-left": "" + -($("#section1-logo").width() / 2) + "px" });
        if ($("#section6-blockquote").hasClass("blockquote-reverse") == false)
        {
            $("#section6-blockquote").addClass("blockquote-reverse");
        }
    }
    else if (_WindowWidth >= 768 && _WindowWidth < 991)
    {
        $("#section1-table").css({ "height": "0" });
        $("#section1-logo").css({ "margin-left": "" + -($("#section1-logo").width() / 2) + "px" });
        if ($("#section6-blockquote").hasClass("blockquote-reverse") == false)
        {
            $("#section6-blockquote").addClass("blockquote-reverse");
        }
    }
    else if (_WindowWidth >= 544 && _WindowWidth < 767)
    {
        $("#section1-table").css({ "height": "0" });
        $("#section1-logo").css({ "margin-left": "" + -($("#section1-logo").width() / 2) + "px" });
        if ($("#section6-blockquote").hasClass("blockquote-reverse") == true)
        {
            $("#section6-blockquote").removeClass("blockquote-reverse");
        }
    }
    else
    {
        $("#section1-table").css({ "height": "0" });
        $("#section1-logo").css({ "margin-left": "" + -($("#section1-logo").width() / 2) + "px" });
        if ($("#section6-blockquote").hasClass("blockquote-reverse") == true)
        {
            $("#section6-blockquote").removeClass("blockquote-reverse");
        }
    }
}