
$(document).ready(function ()
{
    if ("serviceWorker" in navigator)
    {
        navigator.serviceWorker.register("/service-worker.js").then(function (registration)
        {
            //console.log('Service Worker registration successful with scope: ', registration.scope);
        }).catch(function (err)
        {
            //console.log('Service Worker registration failed: ', err);
        });
    }

    $(".az-email").off("click").on("click", function (e)
    {
        var _HREF = $(this).attr("data-content").toLowerCase().replace('(at)', '@');
        window.location.href = "mailto:" + _HREF;
        e.preventDefault();
    });
});

// All Pages
function openContactForm()
{
    closeNavbarMobile();
    new AZModalDialog(
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

// produkter.html
function openContentInfo()
{
    closeNavbarMobile();
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
    closeNavbarMobile();
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
    closeNavbarMobile();
    initializeModalDialog(
        {
            dialogModal: false,
            dialogNoParentScroll: true,
            dialogDraggable: false,
            dialogTitle: SelectedId,
            dialogWidth: 450,
            dialogHeight: 280,
            dialogText: $("#" + SelectedId).html()
        });
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












//function AZAjaxSuccess(Options)
//{
//    var _Defaults =
//    {
//        Request: "",
//        Title: ObjPageData.Values.AZPage.ObjLanguage.SingleDefaultElements.informationTitle,
//        Text: ObjPageData.Values.AZPage.ObjLanguage.SingleDefaultElements.alertTransferError,
//        WindowModal: true,
//        WindowModal: true,
//        WindowAfterOpen: [],
//        WindowAfterClose: [],
//        RunFunctionName: "",
//        RunFunctionArgs: []
//    };
//    _Options = $.extend({}, _Defaults, Options || {});

//    var _AZWindow = {};
//    if (_Options.WindowAfterOpen.length > 0)
//    {
//        $.subscribeonce("functionlib/azWindowAfterOpen", function (e, data)
//        {
//            $.each(_Options.WindowAfterOpen, function (Index, Value)
//            {
//                if (window[Value] != undefined)
//                {
//                    window[Value].apply();
//                }
//            });
//        });
//    }
//    if (_Options.WindowAfterClose.length > 0)
//    {
//        $.subscribeonce("functionlib/azWindowAfterClose", function (e, data)
//        {
//            _AZWindow.azWindowClose();
//            $.each(_Options.WindowAfterClose, function (Index, Value)
//            {
//                if (window[Value] != undefined)
//                {
//                    window[Value].apply();
//                }
//            });
//        });
//    }
//    if (_Options.Request === "AZWindow")
//    {
//        new AZWindow(
//            {
//                azWindowTitle: _Options.Title,
//                azWindowText: _Options.Text,
//                azWindowModal: _Options.WindowModal
//            });
//    }
//    if (_Options.RunFunctionName != "" && window[_Options.RunFunctionName] != undefined)
//    {
//        window.setTimeout(function ()
//        {
//            window[_Options.RunFunctionName].apply(null, _Options.RunFunctionArgs);
//        }, 200);
//    }
//}

//function AZAjaxError(Options)
//{
//    var _Defaults =
//    {
//        Request: "AZWindow",
//        Title: ObjPageData.Values.AZPage.ObjLanguage.SingleDefaultElements.informationTitle,
//        Text: ObjPageData.Values.AZPage.ObjLanguage.SingleDefaultElements.alertTransferError,
//        WindowModal: true,
//        WindowAfterOpen: [],
//        WindowAfterClose: [],
//        RunFunctionName: "",
//        RunFunctionArgs: []
//    };
//    _Options = $.extend({}, _Defaults, Options || {});

//    var _AZWindow = {};
//    if (_Options.WindowAfterOpen.length > 0)
//    {
//        $.subscribeonce("functionlib/azWindowAfterOpen", function (e, data)
//        {
//            $.each(_Options.WindowAfterOpen, function (Index, Value)
//            {
//                if (window[Value] != undefined)
//                {
//                    window[Value].apply();
//                }
//            });
//        });
//    }
//    if (_Options.WindowAfterClose.length > 0)
//    {
//        $.subscribeonce("functionlib/azWindowAfterClose", function (e, data)
//        {
//            _AZWindow.azWindowClose();
//            $.each(_Options.WindowAfterClose, function (Index, Value)
//            {
//                if (window[Value] != undefined)
//                {
//                    window[Value].apply();
//                }
//            });
//        });
//    }
//    if (_Options.Request === "AZWindow")
//    {
//        _AZWindow = new AZWindow(
//            {
//                azWindowTitle: _Options.Title,
//                azWindowText: _Options.Text,
//                azWindowModal: _Options.WindowModal
//            });
//    }
//    if (_Options.Request === "RoleAlert")
//    {
//        AZHideCoverSpin();
//        $('[role="alert"]').text(Options.Text).removeClass('az-alert-info').addClass('az-alert-danger').show();
//        window.setTimeout(function ()
//        {
//            $('[role="alert"]').text(ObjPageData.Values.AZPage.ObjLanguage.SingleElements.DefaultMessage).removeClass('az-alert-danger').addClass('az-alert-info').show();
//        }, 3000);
//    }
//    if (_Options.RunFunctionName != "" && window[_Options.RunFunctionName] != undefined)
//    {
//        window.setTimeout(function ()
//        {
//            window[_Options.RunFunctionName].apply(null, _Options.RunFunctionArgs);
//        }, 200);
//    }
//}

//function AZSetContentMenu(ContentMenuList)
//{
//    $.each(ContentMenuList, function (Index, ContentMenuObj)
//    {
//        if (ContentMenuObj.hasOwnProperty("PageName") === true && ContentMenuObj.PageName === ObjPageData.Values.AZPage.PageName)
//        {
//            $.each(ContentMenuObj, function (Key, Value)
//            {
//                if (Array.isArray(Value) === true)
//                {
//                    $.each(Value, function (Index, Value)
//                    {
//                        $("#" + Key).find('[value="' + Value + '"]').remove();
//                    });
//                }
//                else
//                {
//                    $("." + Key + ", #" + Key).css({ "display": "" + Value + "" });
//                }
//            });
//        }
//    });
//}

//function AZCheckLocalSettingsList(LocalSettingsObj, LocalSettingsList)
//{
//    var _IsValid = true;
//    if (LocalSettingsList.length > 0 && IsEmpty(LocalSettingsObj) === false)
//    {
//        $.each(LocalSettingsList, function (Index, Value)
//        {
//            if (LocalSettingsObj.hasOwnProperty(Value) === true)
//            {
//                if (LocalSettingsObj[Value].hasOwnProperty(Value) === false)
//                {
//                    _IsValid = false;
//                    return false;
//                }
//            }
//            else
//            {
//                _IsValid = false;
//                return false;
//            }
//        });
//    }
//    else
//    {
//        _IsValid = false;
//    }
//    $.publish("azframework/AZCheckLocalSettingsList", { IsValid: _IsValid });
//}

//function CheckLocalSettings()
//{
//    var _ListLocalSettings = [];
//    _ListLocalSettings = AZClientStorage("get", "localsettings");
//    if (_ListLocalSettings != null && _ListLocalSettings != undefined)
//    {
//        _ListLocalSettings = $.parseJSON(_ListLocalSettings);
//        GetLocalSettings();
//    }
//    else
//    {
//        _ListLocalSettings = [];
//        GetLocalSettings();
//    }

//    function GetLocalSettings()
//    {
//        var _SetLocalSettings = false;
//        var _ObjSettingsTypes = {};
//        $.each(ObjPageData.Values.ObjCustomerInfo.UserSignIn.ListLocalSettings, function (index, ObjLocalSettings)
//        {
//            _ObjSettingsTypes[ObjLocalSettings.RelatedType] = VerifyGetSettings(_ListLocalSettings, ObjLocalSettings.RelatedType);
//            if (_ObjSettingsTypes[ObjLocalSettings.RelatedType] === true)
//            {
//                _SetLocalSettings = true;
//            }
//        });

//        var _SettingsTransferClass = {};
//        _SettingsTransferClass.TransferType = "getsettings";
//        _SettingsTransferClass.Token = ObjPageData.Elements.$Token.val();
//        _SettingsTransferClass.ObjSettingsTypes = _ObjSettingsTypes;

//        var _azAjaxOptions =
//        {
//            azAjaxUrl: "/api/settings/settings" + ObjPageData.Values.AZPage.ApiVersion,
//            azAjaxObjToSend: _SettingsTransferClass
//        };
//        var _AZAjax = new AZAjax(_azAjaxOptions);
//        _AZAjax.always(function (data, textStatus, jqXHR)
//        {
//            if (jqXHR.status === 200 && data.Transfer == "200")
//            {
//                ObjPageData.Values.ObjCustomerInfo.Today = data.Today;
//                AZClientStorage("set", "customerinfo", ObjPageData.Values.ObjCustomerInfo);

//                if (_SetLocalSettings === true)
//                {
//                    $.each(ObjPageData.Values.ObjCustomerInfo.UserSignIn.ListLocalSettings, function (index, ObjLocalSettings)
//                    {
//                        if (data[ObjLocalSettings.RelatedType][ObjLocalSettings.RelatedType].length > 0)
//                        {
//                            _ObjSettingsTypes[ObjLocalSettings.RelatedType] = data[ObjLocalSettings.RelatedType];
//                        }
//                        else
//                        {
//                            _ObjSettingsTypes[ObjLocalSettings.RelatedType] = _ListLocalSettings[ObjLocalSettings.RelatedType];
//                        }
//                    });
//                    AZClientStorage("set", "localsettings", _ObjSettingsTypes);
//                }
//            }
//            else
//            {

//            }
//        });
//    }
//}

//function VerifyGetSettings(MainList, SubList)
//{
//    var _ObjReturn = {};
//    if (MainList.hasOwnProperty(SubList) && MainList[SubList].hasOwnProperty(SubList) && MainList[SubList][SubList].length > 0)
//    {
//        _ObjReturn = getSelectedObj(ObjPageData.Values.ObjCustomerInfo.UserSignIn.ListLocalSettings, "RelatedType", SubList);
//        if (_ObjReturn.SettingValue === MainList[SubList].SettingValue)
//        {
//            return false;
//        }
//        else
//        {
//            return true;
//        }
//    }
//    else
//    {
//        return true;
//    }
//}

//function CheckTimeDiff()
//{
//    CheckTimeDiff();

//    var _Local = moment();
//    var _Server = moment(ObjPageData.Values.ObjCustomerInfo.Today);
//    if (_Local.diff(_Server, "minutes") > 0)
//    {
//        new AZSnackbar(
//            {
//                azSnackbarId: "TimeDiff",
//                azSnackbarText: ObjPageData.Values.AZPage.ObjLanguage.SingleElements.TimeDiff + " " + moment(ObjPageData.Values.ObjCustomerInfo.Today).format("LTS"),
//                azSnackbarPosition: "right-bottom",
//                azSnackbarClose: true
//            });
//    }
//}

//function AZGridView(Options)
//{
//    if (this instanceof AZGridView === true)
//    {
//        var _Main = this;

//        if (IsEmpty(Options) === false && Options.hasOwnProperty("ObjLanguage") && Options.hasOwnProperty("ObjValidation"))
//        {
//            if (Options.hasOwnProperty("$Area") && IsEmpty(Options.$Area) === false)
//            {
//                _Main.$Area = Options.$Area;
//            }
//            else
//            {
//                _Main.$Area = "";
//            }

//            _Main.ObjLanguage = Options.ObjLanguage;
//            _Main.ObjValidation = Options.ObjValidation;

//            var _$Header = "";
//            $(".HeaderStyle > th", _Main.$Area).each(function (index) 
//            {
//                _$Header = $(this);
//                if (_Main.ObjValidation.hasOwnProperty($("a", _$Header).text()) && _Main.ObjValidation[$("a", _$Header).text()].sort == true)
//                {
//                    $("a", _$Header).text(_Main.ObjLanguage.SingleElements["labelHeader" + $("a", _$Header).text()]);
//                }
//                else
//                {
//                    _$Header.text(_Main.ObjLanguage.SingleElements["labelHeader" + $("a", _$Header).text()]);
//                }
//            });

//            var _ObjJsonReturn = {};
//            var _ObjSpanCheckBox = {};
//            var _ObjCheckBox = {};
//            $(".RowStyle > td, .AlternatingRowStyle > td", _Main.$Area).each(function (index)
//            {
//                _ObjJsonReturn = getSelectedObj(_Main.ObjValidation, "tabindex", $(this).index());
//                if (_ObjJsonReturn.datatype === "date")
//                {
//                    $(this).text(moment($(this).text()).format('L'));
//                }
//                else if (_ObjJsonReturn.datatype === "datetime")
//                {
//                    $(this).text(moment($(this).text()).format('L') + " - " + moment($(this).text()).format('LT'));
//                }
//                else if (_ObjJsonReturn.datatype === "time")
//                {
//                    $(this).text(moment('01/01/1900 ' + $(this).text()).format('LT'));
//                }
//                else if (_ObjJsonReturn.datatype === "militarytime")
//                {
//                    $(this).text(moment('01/01/1900 ' + $(this).text()).format('HH:mm'));
//                }
//                else if (_ObjJsonReturn.datatype === "decimal")
//                {
//                    $(this).text(numeral($(this).text()).format('0.00'));
//                }
//                else if (_ObjJsonReturn.datatype === "bytes")
//                {
//                    $(this).text(bytesToSize($(this).text()));
//                }
//                else if (_ObjJsonReturn.datatype === "int")
//                {
//                    $(this).text(_Main.ObjLanguage.SingleElements["labelRow" + $(this).text()]);
//                }
//                if ($(this).children().is("span") === true)
//                {
//                    _ObjSpanCheckBox = $(this).children();
//                    _ObjCheckBox = _ObjSpanCheckBox.find(":input");
//                    if (_ObjCheckBox.is(":input") === true)
//                    {
//                        _ObjCheckBox.attr("id", _ObjSpanCheckBox.attr("data-id"));
//                        _ObjCheckBox.addClass("az-checkbox");
//                    }
//                }
//            });
//            $(window).one("beforeunload", function (e) { AZShowCoverSpin() });
//            $.publish("functionlib/AZGridView");
//        }
//        else
//        {
//            consoleLog({ consoleType: "error", consoleText: "AZGridView - Options is empty or missing some properties" });
//        }
//    }
//    else
//    {
//        return new AZGridView(Options);
//    }
//}

//function setCheckbox()
//{
//    var $chkboxes = $('.az-checkbox');
//    var lastChecked = null;
//    $chkboxes.click(function (e) 
//    {
//        if (!lastChecked) 
//        {
//            lastChecked = this;
//            return;
//        }
//        if (e.shiftKey)
//        {
//            var start = $chkboxes.index(this);
//            var end = $chkboxes.index(lastChecked);
//            $chkboxes.slice(Math.min(start, end), Math.max(start, end) + 1).prop('checked', lastChecked.checked);
//        }
//        lastChecked = this;
//    });
//}

//function getSounds(SelectedSound)
//{
//    var _Sounds =
//    {
//        "sms3": "/lib/images/sms-alert-3.wav",
//        "sms4": "/lib/images/sms-alert-4.wav"
//    }
//    return _Sounds[SelectedSound];
//}

//function PlaySound(SelectedSound)
//{
//    var _Sound = new Audio(getSounds(SelectedSound));
//    _Sound.play();
//}