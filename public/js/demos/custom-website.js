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
        default:
            break;
    }
}

function one() {
    $("#beyond-bookshell-img").attr("src", "img/Website DevelopmentImages & Icons/Custom Website Development.png");
    $("#image-title").text("Custom Website Development");
    $("#paragraph").html("<ul><li>Develop high-performance, scalable websites using modern frameworks like React, Angular, and Vue.js to ensure seamless functionality across all devices.</li><li>Our custom web development services focus on responsive UI/UX, optimized code, and seamless third-party integrations for enhanced user experience and business growth.</li></ul>");
}

function two() {
    $("#beyond-bookshell-img").attr("src", "img/Website DevelopmentImages & Icons/Responsive Web Design.png");
    $("#image-title").text("Responsive Web Design");
    $("#paragraph").html("<ul><li>Build fully responsive websites with fluid layouts and adaptive components to deliver a consistent experience across desktops, tablets, and smartphones.</li><li>Our approach ensures optimized loading speeds, intuitive navigation, and mobile-friendly interactions for improved user engagement.</li></ul>");
}

function three() {
    $("#beyond-bookshell-img").attr("src", "img/Website DevelopmentImages & Icons/E-Commerce Development.png");
    $("#image-title").text("E-Commerce Development");
    $("#paragraph").html("<ul> <li>Design and develop feature-rich e-commerce platforms with secure payment gateways, inventory management, and seamless order processing.</li><li>Our solutions include custom shopping carts, AI-driven recommendations, and omnichannel integrations to boost sales and customer retention.</li></ul>");
}

function four() {
    $("#beyond-bookshell-img").attr("src", "img/Website DevelopmentImages & Icons/Web Application Development.png");
    $("#image-title").text("Web Application Development");
    $("#paragraph").html("<ul><li>Develop interactive and high-performance web applications using modern tech stacks, including MERN, MEAN, and serverless architectures.<li>Our solutions include real-time data processing, secure API integrations, and microservices-based structures for scalable applications.</li></ul>");
}

function five() {
    $("#beyond-bookshell-img").attr("src", "img/Website DevelopmentImages & Icons/Progressive Web Apps.png");
    $("#image-title").text("Progressive Web Apps");
    $("#paragraph").html("<ul><li>Create fast, reliable, and engaging Progressive Web Apps that work offline and load instantly, even on low-speed networks.</li><li>Our PWA solutions provide push notifications, home screen access, and seamless performance across all browsers and devices.</li></ul>");
}

function six() {
    $("#beyond-bookshell-img").attr("src", "img/Website DevelopmentImages & Icons/UX Design & Development.png");
    $("#image-title").text("UI/UX Design & Development");
    $("#paragraph").html("<ul><li>Design visually appealing, user-friendly interfaces with a focus on intuitive navigation, accessibility, and seamless interactions.</li><li>Our UI/UX design process includes wireframing, A/B testing, and real-time user feedback to enhance engagement and conversions.</li></ul>");
}

function seven(){
    $("#beyond-bookshell-img").attr("src","img/Website DevelopmentImages & Icons/Cloud-Based Web Solutions.png");
    $("#image-title").text("Cloud-Based Web Solutions");
    $("#paragraph").html("<ul><li>Deploy cloud-hosted web applications with AWS, Azure, and Google Cloud for enhanced scalability, security, and performance.</li><li>Our cloud-based solutions include auto-scaling, load balancing, and CI/CD pipelines to streamline application deployment and management.</li></ul>");
}


