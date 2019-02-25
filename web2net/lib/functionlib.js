
// Site info
var AppName = "web2net";
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

// All Pages
function openContactForm()
{
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
    initializeModalDialog(
    {
        dialogModal: false,
        dialogNoParentScroll: true,
        dialogDraggable: false,
        dialogTitle: SelectedId,
        dialogWidth: 450,
        dialogHeight: 250,
        dialogText: $("#" + SelectedId).html()
    });
}