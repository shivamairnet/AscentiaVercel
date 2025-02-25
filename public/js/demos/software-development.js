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
        default:
            break;
    }
}

function one() {
    $("#beyond-bookshell-img").attr("src", "img/Software Development Service Page/Custom Software Development.png");
    $("#image-title").text("Custom Software Development");
    $("#paragraph").html("<ul><li>We specialize in developing custom software solutions that are specifically designed to address your unique business demands and challenges.</li><li>From initial concept to final deployment, we deliver scalable, efficient, and secure software solutions that align with your business goals.</li></ul>");
}

function two() {
    $("#beyond-bookshell-img").attr("src", "img/Software Development Service Page/Enterprise Software Development.png");
    $("#image-title").text("Enterprise Software Development");
    $("#paragraph").html("<ul><li>Our enterprise software development services provide businesses with robust and scalable software solutions. </li><li>We focus on building software's that integrate seamlessly with your existing infrastructure, improving collaboration, data management, and operational efficiency across your organization.</li></ul>");
}

function three() {
    $("#beyond-bookshell-img").attr("src", "img/Software Development Service Page/Software Product Development.png");
    $("#image-title").text("Software Product Development");
    $("#paragraph").html("<ul> <li>We offer full-cycle software product development services, turning your visionary ideas into functional, market-ready products. </li><li>From design and development to testing and deployment, we ensure the software delivers exceptional user experiences and meet with your unique business objectives.</li></ul>");
}

function four() {
    $("#beyond-bookshell-img").attr("src", "img/Software Development Service Page/Custom CRM Development.png");
    $("#image-title").text("Custom CRM Development");
    $("#paragraph").html("<ul> <li>Our custom CRM development services help businesses build customer relationship management systems that are tailored according to your unique business needs. </li><li>By enhancing data management, improving communication, and streamlining sales processes, we help you drive customer satisfaction and loyalty towards your business.</li></ul>");
}

function five() {
    $("#beyond-bookshell-img").attr("src", "img/Software Development Service Page/Cloud Based Software Solutions.png");
    $("#image-title").text("Cloud Based Software Solutions");
    $("#paragraph").html("<ul> <li>We provide secure and scalable cloud solutions that allow businesses to store, manage, and access data efficiently. </li><li>Our services help you move to the cloud with ease, improve collaboration, and reduce operational costs, all while ensuring high security and reliability.</li></ul>");
}

function six() {
    $("#beyond-bookshell-img").attr("src", "img/Software Development Service Page/UX Design.png");
    $("#image-title").text("UI/UX Design");
    $("#paragraph").html("<ul> <li>Our UI/UX design services focus on creating intuitive, engaging, and visually appealing interfaces. </li><li>By prioritizing user experience, we deliver designs that enhance customer satisfaction, increase user retention, and improve conversion rates across digital platforms.</li></ul>");
}











