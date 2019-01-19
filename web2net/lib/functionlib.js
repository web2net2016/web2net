
// Site info
var AppName = "web2net";
var AppVersion = "1.0.0";
var ApiVersion = "_1";

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
function openStaticInfo()
{
    initializeModalDialog(
    {
        dialogModal: false,
        dialogNoParentScroll: true,
        dialogDraggable: false,
        dialogTitle: "Sider og seksjoner",
        dialogWidth: 800,
        dialogHeight: 650,
        dialogText: $("#StaticInfo").html()
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