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
    $("#beyond-bookshell-img").attr("src", "img/SaaS Service Images/SaaS App Development.png");
    $("#image-title").text("SaaS App Development");
    $("#paragraph").html("<ul><li>Build tailored solutions with industry-specific features to enhance business operations</li><li>Design cloud-native, high-performance SaaS applications that scale with user demand.</li><li>Ensure seamless access across web, mobile, and desktop platforms</li></ul>");
}

function two() {
    $("#beyond-bookshell-img").attr("src", "img/SaaS Service Images/API & Third-Party Integrations.png");
    $("#image-title").text("API & Third-Party Integrations");
    $("#paragraph").html("<ul><li>Integrate with CRMs, ERPs, and payment gateways to streamline business processes</li><li>Enable real-time data synchronization and workflow automation across multiple platforms</li><li>Develop secure and efficient custom APIs to extend functionality and improve interoperability</li></ul>");
}

function three() {
    $("#beyond-bookshell-img").attr("src", "img/SaaS Service Images/SaaS App Optimization.png");
    $("#image-title").text("SaaS App Optimization");
    $("#paragraph").html("<ul> <li>Optimize SaaS based application speed, responsiveness, and server efficiency for better user experience</li><li>Reduce operational costs by implementing efficient resource allocation and cloud usage</li><li>Strengthen security protocols to prevent data breaches and unauthorized access</li></ul>");
}

function four() {
    $("#beyond-bookshell-img").attr("src", "img/SaaS Service Images/Multi-Tenant Architecture Upgrade.png");
    $("#image-title").text("Multi-Tenant Architecture Upgrade");
    $("#paragraph").html("<ul><li>Efficiently manage multiple users or organizations with secure data isolation.</li><li>Ensure robust security measures for tenant data separation and compliance.</li><li>Allow seamless onboarding of new users without compromising system performance.</li></ul>");
}

function five() {
    $("#beyond-bookshell-img").attr("src", "img/SaaS Service Images/Technology Migration & Reengineering.png");
    $("#image-title").text("Technology Migration & Reengineering");
    $("#paragraph").html("<ul><li>Upgrade outdated applications to modern, cloud-based SaaS solutions.</li><li>Smoothly transition applications to new frameworks, databases, and cloud platforms for better efficiency.</li><li>Improve software structure, performance, and maintainability.</li></ul>");
}

function six() {
    $("#beyond-bookshell-img").attr("src", "img/SaaS Service Images/Analytics & Reporting.png");
    $("#image-title").text("Analytics & Reporting");
    $("#paragraph").html("<ul><li>Leverage AI and machine learning to generate predictive analytics and actionable insights.</li><li>Provide interactive dashboards to monitor business performance in real time.</li><li>Generate detailed reports on demand for better decision-making and compliance tracking.</li></ul>");
}



