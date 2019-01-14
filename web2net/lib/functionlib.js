$(document).ready(function ()
{
    $('.az-email').click(function (e)
    {
        var _Href = $(this).data("content").toLowerCase().replace('(at)', '@');
        window.location.href = "mailto:" + _Href;
        e.preventDefault();
    });
});