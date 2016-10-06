$(document).ready(function()
{
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