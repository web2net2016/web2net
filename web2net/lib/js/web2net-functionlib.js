
$(document).ready(function()
{
    $("a.nav-link").bind("click", function(event)
    {
        var $anchor = $(this);
        $("html, body").stop().animate(
        {
            scrollTop: $($anchor.attr("href")).offset().top
        }, 1500, "easeInOutExpo");
        event.preventDefault();
    });
});

function adjustStyle()
{
    if (StyleMode == true)
    {
	    if ($("#div-window-size").length == 0)
	    {    
	        $("body").append("<div id=\"div-window-size\" style=\"position: fixed; z-index: 499999; top: 0; left: 0; width: 100%; height: 20px; text-align: center;\"></div>");
		}
    }
    var _WindowWidth = parseInt($(window).width());
    if (_WindowWidth >= 1200)
    {
        $("#size-stylesheet").attr("href", "lib/css/xl.css");
        $("#div-window-size").css({ "background-color": "#428bca" }).text("xl.css - >= 1200");
    }
    else if (_WindowWidth >= 992 && _WindowWidth < 1200)
    {
        $("#size-stylesheet").attr("href", "lib/css/lg.css");
        $("#div-window-size").css({ "background-color": "#5cb85c" }).text("lg.css - >= 992");
    }
    else if (_WindowWidth >= 768 && _WindowWidth < 991)
    {
        $("#size-stylesheet").attr("href", "lib/css/md.css");
        $("#div-window-size").css({ "background-color": "#5bc0de" }).text("md.css - >= 768");
    }
    else if (_WindowWidth >= 544 && _WindowWidth < 767)
    {
        $("#size-stylesheet").attr("href", "lib/css/sm.css");
        $("#div-window-size").css({ "background-color": "#f0ad4e" }).text("sm.css - >= 544");
    }
    else
    {
        $("#size-stylesheet").attr("href", "lib/css/xs.css");
        $("#div-window-size").css({ "background-color": "#d9534f" }).text("xs.css - < 543");
    }
}

function setCSSInlineStyle(SelectedArea)
{
    var _WindowWidth = parseInt($(window).width());
    if (_WindowWidth >= 1200)
    {
        _WindowWidth = "xl";
    }
    else if (_WindowWidth >= 992 && _WindowWidth < 1200)
    {
        _WindowWidth = "lg";
    }
    else if (_WindowWidth >= 768 && _WindowWidth < 991)
    {
        _WindowWidth = "md";
    }
    else if (_WindowWidth >= 544 && _WindowWidth < 767)
    {
        _WindowWidth = "sm";
    }
    else
    {
        _WindowWidth = "xs";
    }
    if (_WindowWidth != "")
    {
        var ClassName = "";
        var ClassItem = "";
        var ObjExistsStyle = {};
        var ObjSetStyle = {};
        if (SelectedArea != "" && SelectedArea != undefined && SelectedArea != null)
        {
            SelectedArea = $(SelectedArea);
        }
        else
        {
            SelectedArea = "";
        }
        $("[class*='web2net-']", SelectedArea).each(function()
        {
            var _Self = $(this);
            ObjExistsStyle = {};
            ClassName = "";
            ClassItem = "";
            if (_Self.attr("style") != "" && _Self.attr("style") != null && _Self.attr("style") != undefined)
            {
                ClassName = _Self.attr("style").split(";");
                $.each(ClassName, function(i, value)
                {
                    if (value.indexOf(":") > -1)
                    {
                        ClassItem = value.split(":");
                        ObjExistsStyle[ClassItem[0].replace(/ /g, "")] = ClassItem[1].replace(/ /g, "");
                    }
                });
            }
            ClassName = "";
            ClassItem = "";
            ObjSetStyle = {};
            ClassName = (this.className.match(/[\w-]*web2net-[\w-.#%]*/g));
            if (ClassName.length > 0)
            {
                $.each(ClassName, function(i, SelectedElement)
                {
                    ClassItem = SelectedElement.split("-");
                    if (ClassItem.length > 3)
                    {
                        if (ClassItem[1] == _WindowWidth || ClassItem[1] == "all")
                        {
                            if (ObjSetStyle.hasOwnProperty(ClassItem[2]) == false)
                            {
                                if (ClassItem.length == 4)
                                {
                                    ObjSetStyle[ClassItem[2]] = ClassItem[3];
                                }
                                else if (ClassItem.length == 5)
                                {
                                    ObjSetStyle[ClassItem[2]] = ClassItem[3] + " " + ClassItem[4];
                                }
                                else if (ClassItem.length == 6)
                                {
                                    ObjSetStyle[ClassItem[2]] = ClassItem[3] + " " + ClassItem[4] + " " + ClassItem[5];
                                }
                            }
                            else
                            {
                                if (ClassItem[1] == _WindowWidth)
                                {
                                    if (ClassItem.length == 4)
                                    {
                                        ObjSetStyle[ClassItem[2]] = ClassItem[3];
                                    }
                                    else if (ClassItem.length == 5)
                                    {
                                        ObjSetStyle[ClassItem[2]] = ClassItem[3] + " " + ClassItem[4];
                                    }
                                    else if (ClassItem.length == 6)
                                    {
                                        ObjSetStyle[ClassItem[2]] = ClassItem[3] + " " + ClassItem[4] + " " + ClassItem[5];
                                    }
                                }
                            }
                        }
                    }
                });
            }
            _Self.removeAttr("style");
            _Self.css($.extend(ObjSetStyle, ObjExistsStyle))
        });
    }
}
