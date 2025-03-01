function selectListItem(listItem) {
    $('#list-container li').css('color', 'white');
    $(listItem).css('color', '#0052CD');

    var index = $(listItem).index();
    switch (index) {
        case 0:
            one();
            break;
        case 1:
            two();
            break;
        case 2:
            three();
            break;
        case 3:
            four();
            break;
        case 4:
            five();
            break;
        case 5:
            six();
            break;
        case 6:
            seven();
            break;
        case 7:
            eight();
            break;
        case 8:
            nine();
            break;
        case 9:
            ten();
            break;
        case 10:
            eleven();
            break;
        default:
            break;
    }
}

function one() {
    $("#beyond-bookshell-img").attr("src", "img/Mobile Service Page Images/Android Application Development.png");
    $("#image-title").text("Android Application Development");
    $("#paragraph").html("<ul><li>Build high-performance, scalable Android applications using Kotlin and Java to deliver seamless user experiences across diverse devices. </li><li>Our custom Android app development services ensure intuitive UI/UX and optimized performance for the Google Play Store.</li></ul>");
}

function two() {
    $("#beyond-bookshell-img").attr("src", "img/Mobile Service Page Images/iOS Application Development.png");
    $("#image-title").text("iOS Application Development");
    $("#paragraph").html("<ul><li>Develop secure and feature-rich iOS applications using Swift to provide a premium experience on iPhones and iPads. </li><li>We ensure our iOS applications provides a smooth performance and are compliance with latest App Store guidelines.</li></ul>");
}

function three() {
    $("#beyond-bookshell-img").attr("src", "img/Mobile Service Page Images/Flutter Application Development.png");
    $("#image-title").text("Flutter Application Development");
    $("#paragraph").html("<ul> <li>Leverage Google’s Flutter framework for cross-platform mobile apps with a single codebase that runs natively on Android and iOS. </li><li>Our Flutter mobile app development services offer fast performance, expressive UI, and cost-effective scalability.</li></ul>");
}

function four() {
    $("#beyond-bookshell-img").attr("src", "img/Mobile Service Page Images/React Native Application Development.png");
    $("#image-title").text("React Native Application Development");
    $("#paragraph").html("<ul> <li>Develop high-quality react native mobile apps that deliver near-native performance on both iOS and Android. </li><li>Our expertise in react native mobile application development ensures smooth functionality, and rich UI experience.</li></ul>");
}

function five() {
    $("#beyond-bookshell-img").attr("src", "img/Mobile Service Page Images/Progressive Web Application Development.png");
    $("#image-title").text("Progressive Web Application Development");
    $("#paragraph").html("<ul> <li>Develop fast, reliable, and engaging progressive web apps (PWAs) that combine the best of web and mobile experiences. </li><li>Our progressive mobile application development services ensure seamless performance, offline functionality, push notifications, and improved user engagement across all devices.</li></ul>");
}

function six() {
    $("#beyond-bookshell-img").attr("src", "img/Mobile Service Page Images/Enterprise Mobile Application Development.png");
    $("#image-title").text("Enterprise Mobile Application Development");
    $("#paragraph").html("<ul> <li>Build secure and scalable enterprise mobile applications tailored to streamline business operations, enhance productivity, and integrate seamlessly with ERP, CRM, and other platforms. </li><li>Our enterprise app development services focus on performance, security, and custom functionality to meet business-specific needs. </li></ul>");
}








