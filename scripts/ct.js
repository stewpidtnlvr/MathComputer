/*
    ctaetcsh's Personal Script
    For questions, please ask me in Discord

    DO NOT MODIFY WITHOUT PRIOR NOTICE & PERMISSION
    This script is backed up as it is updated.

    Last updated: July 25, 2020
*/

//                      this script is basically a lot of random/pointless/useless code
//                      still dont delete it i might need it later thanks

// CT OpenCode data for this script.
var ct_opencodedata = {
    project: 'vibeos',
    lang: 'javascript',
    file: 'ct',
    dir: '/scripts/ct.js'
}
gdfgg
// Random Varibles
var ok = 'ok';
const urlParams = new URLSearchParams(window.location.search);

// Debugging Quickstart Check (ctsu) 
//                              MORE FUCKING SHIT THAT DOESNT FUCKING WORK WHY DO I EVEN TRY
const ctsp = urlParams.get('ctsu');
if (ctsp == true) {
    ctsu() 
} else if (ctsp == false) {
    ct_log("ctsp found false, ctsu not engaged");
} else {
    ct_error("ctsu checker","ctsp found nothing, presumed false, ctsu not engaged",false);
}

// sets stuff for debugging quickstart (ctsu)
function ctsu() {
    msize.w = 1920;
    msize.h = 1080;
    background.value = "wallpapers/ct.png";
}

// Fast way to initalize a webview for testing. DO NOT USE THIS IN SCRIPTS!
// This is only for usage in the Javascript terminal.
// 2020 07 18
function ct_initweb(url,proxy) {
    initWebView('CT QWC', 'mimetypes/16/html.png', url, 800, 600, proxy);
    return 'Initialized Webview. Proxy: '+proxy+' | URL: '+url;
}

// Function to test that ct.js loaded successfully, used for debugging.
// 2020 07 18
function ct_test() {
    return 'Successful';
}

// Function to process errors depending on severtiy
// 2020 07 18
function ct_error(script,reason,alert) {
    console.error('CT: Error occoured at '+script+' with reason: '+reason);
    if (alert == true) {
        alert("An error occoured in "+script+". Check the console for details.");
    } else {
        console.log("CT: Error was not prompted to user.");
    }
    return 'ok';
}


// alias for console.log
function ct_log(thing) {
    console.log(thing);
}

// [BROKEN] Function to get a cat from the CAT API
// This shit doesnt work because i suck with HTTP requests
// 2020 07 18
function ct_getcat() {
    var dnctv_cathttp = new XMLHttpRequest();
    var dnctv_caturl = 'https://api.thecatapi.com/v1/images';

    dnctv_cathttp.open("GET", dnctv_caturl);
    dnctv_cathttp.setRequestHeader('api-key','2b032810-c828-48e7-8c8c-c7a83907e312'); // pls no steal api key thank
    dnctv_cathttp.send();

    dnctv_cathttp.onreadystatechange = (e) => {
        console.log(dnctv_cathttp.responseText);
    }

    return 'as of 07 18 this does not work';
}


// [BROKEN] Function to import and apply profile data
// not done yet, maybe some of you can figure this shit out cause i cant
// 2020 07 18
function ct_importprofile() {

    fetch("https://raw.githubusercontent.com/vibedivde/vibeOS/master/debug.vosp.json?token=ALUVJHBVH6SXNCKKTPDMFWC7CQPRM").then(response => response.text()).then((response) => {
        var ct_profiledata = JSON.parse(response);
    })

    console.log(ct_profiledata.name+' '+ct_profiledata.type);
    return ok;
}
