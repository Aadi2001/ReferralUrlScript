// Script to check that the url original source
// for hubspot
function AppendIframeUrl() {
    const iframes = document.querySelectorAll("iframe");

    if (iframes.length === 0) {
        console.log("No iframes found on the page.");
        return;
    }

    const referrer = document.referrer;
    const currentPageUrl = window.location.href;

    iframes.forEach(function (iframe) {
        const iframeSrc = iframe.getAttribute("src");

        if (iframeSrc && iframeSrc.includes("www.google.com")) {
            const parsedUrl = new URL(iframeSrc);
            const encodedReferrer = encodeURIComponent(referrer);
            const encodedCurrentPageUrl = encodeURIComponent(currentPageUrl);

            parsedUrl.searchParams.set("referrer", encodedReferrer);
            parsedUrl.searchParams.set("currentPageUrl", encodedCurrentPageUrl);
            iframe.setAttribute("src", parsedUrl.toString());

            console.log("URL modified:", parsedUrl.toString());
        }
    });
}



var EmailWebsites = [
    "email",
    "gmail",
    "yahoo",
    "outlook",
    "aol",
    "icloud",
    "hotmail",
    "protonmail",
    "mail",
    "inbox",
    "zoho",
    "fastmail",
    "yandex",
    "gmx",
    "tutanota",
    "riseup",
    "mailinator",
    "disroot",
    "runbox",
    "cock.li",
    "hushmail"
]
var SocialMediaWebsite = [
    "paidsocial",
    "facebook",
    "instagram",
    "twitter",
    "linkedIn",
    "youTube",
    "pinterest",
    "snapchat",
    "whatsApp",
    "tikTok",
    "reddit",
    "tumblr",
    "quora",
    "weChat",
    "telegram",
    "viber",
    "vKontakte",
    "line",
    "medium",
    "flickr",
    "weibo"
];
var SearchEngineSource = [
    "google",
    "bing",
    "yahoo",
    "duckduckgo",
    "baidu",
    "yandex",
    "ask",
    "aol",
    "qwant",
    "startpage",
    "ecosia",
    "search encrypt",
    "boardreader",
    "dogpile",
    "gibiru",
    "gigablast",
    "yippy",
    "mojeek",
    "searx",
    "disconnect search",
    "swisscows",
    "metager",
    "lycos",
    "webcrawler",
    "info.com",
    "excite",
    "onesearch",
    "wolfram alpha",
    "yaga",
    "goodgopher",
    "faroo",
    "mamma",
    "goo",
    "deeperweb",
    "oscobo",
    "wannalearn",
    "ekoru",
    "ekoru carbon negative",
    "hotbot",
    "search.com",
    "infospace",
    "gigago",
    "slideshare",
    "draze",
    "webzsearch",
    "goduckgo",
    "mozbot",
    "soovle",
    "zoo",
    "lilo",
    "entireweb"
];

var paidSource = ["ppc",
    "cpc",
    "adwords",
    "paid",
    "gclid"
];
var otherCampaign = ["email", "adword", "ppc","cpc"];

function CheckReferralUrl() {
    $("#Original_Source").val(hasQueryParameters());
    $("#hs_analytics_source_data_1").val(document.referrer);
    $("#hs_analytics_source_data_2").val(document.referrer);
    console.log(document.referrer);
}

function hasQueryParameters() {
    var url = document.referrer;
    var queryString = new URL(url).search;
    if (queryString.length > 0) {
        var CheckUrl = new URL(url);
        const source = (CheckUrl.searchParams.get("utm_source") || CheckUrl.searchParams.get("source")).toLowerCase();
        //if contains paidSource array then this is paid
        const campaign = (CheckUrl.searchParams.get("utm_campaign")).toLowerCase();
        const medium = (CheckUrl.searchParams.get("utm_medium").toLowerCase());

        switch (true) {
            case paidSource.includes(source) || SearchEngineSource.includes(source):
                return "PAID_SEARCH";
            case SocialMediaWebsite.includes(source) || medium == "paidsocial":
                return "PAID_SOCIAL";
            case EmailWebsites.include(source) || EmailWebsites.include(source) || EmailWebsites.include(source):
                return "EMAIL_MARKETING";
            case (!paidSource.includes(source) || source == "email"):
                return "OTHER_CAMPAIGNS";
            case SocialMediaWebsite.include(source) || SocialMediaWebsite.include(source) == "social":
                return "SOCIAL_MEDIA";
            case (otherCampaign.includes(medium) || otherCampaign.includes(source) || otherCampaign.includes(campaign)):
                return "OTHER_CAMPAIGNS"
        }

    }
}
//    else {
//        if (document.referrer == '') {
//            var referringUrl = document.referrer.split('www.')[1].replace('.com', '');
//            if (SearchEngineSource.includes(referringUrl.toLowerCase())) {
//                //this is organic search
//                return "ORGANIC_SEARCH";
//            }
//            else if (SocialMediaWebsite.includes(referringUrl))
//            {
//                return "SOCIAL_MEDIA";
//            }
//            else if(EmailWebsites.includes(referringUrl))
//            {
//                return "DIRECT_TRAFFIC";
//            }
//            else {
//                return "DIRECT_TRAFFIC";
//            }
//    }
//};


//    function CheckforSource(source, medium, campaign) {
//        soruce = source.toLowerCase();
//        medium = medium.toLowerCase();
//        campaign = campaign.toLowerCase();
//        if (paidSource.includes(source) || paidSource.includes(source)) {
//            $("#Original_Source").val("PAID_SEARCH");
//        }
//        if (SocialMediaWebsite.includes(source) || medium == "paidsocial") {
//            $("#Original_Source").val("PAID_SOCIAL");
//        }
//        if (source == "email" || medium == "email" || campaign == "email") {
//            $("#Original_Source").val("EMAIL_MARKETING");
//            $("#hs_analytics_source_data_1").val(medium);
//            $("#hs_analytics_source_data_2").val(campaign);
//        }
//        if (!paidSource.includes(source) || source == "email") {
//            $("#Original_Source").val("OTHER_CAMPAIGNS");

//        }
//    }
//};



//function mainUrlParameter() {
//    if (window.location.href != null) {
//        var CheckUrl = new URL(window.location.href);
//        const source = CheckUrl.searchParams.get("utm_source");//if contains paidSource array then this is paid 
//        const campaign = CheckUrl.searchParams.get("utm_campaign");
//        const medium = CheckUrl.searchParams.get("utm_medium");
//        const googleclickid = CheckUrl.searchParams.get("gclid");
//        CheckforSource(source, medium, campaign);
//    }
//    else {
//        if (document.referrer != '') {
//            var referringUrl = document.referrer.split('www.')[1].replace('.com', '');
//            var tryengine = arr.includes(referringUrl.toLowerCase());
//            if (tryengine) {
//                //this is organic search
//                $("#Original_Source").val("ORGANIC_SEARCH");
//                $("#hs_analytics_source_data_1").val(referringUrl);

//            }
//            else {
//                $("#Original_Source").val("DIRECT_TRAFFIC");

//            }
//        }
//    }
//};

//function CheckforSource(source,medium,campaign) {
//    if (paidSource.includes(source.toLowerCase())) {
//        $("#Original_Source").val("PAID_SEARCH");
//    }
//    if (SocialMediaWebsite.includes(source.toLowerCase())) {
//        $("#Original_Source").val("PAID_SOCIAL");
//    }
//    if (source.toLowerCase() == "email" || medium.toLowerCase() == "email" || campaign.toLowerCase() == "email") {
//        $("#Original_Source").val("EMAIL_MARKETING");
//        $("#hs_analytics_source_data_1").val(medium);
//        $("#hs_analytics_source_data_2").val(campaign);
//    }
//};

