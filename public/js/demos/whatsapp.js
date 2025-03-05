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
       
        default:
            break;
    }
}

function one() {
    $("#beyond-bookshell-img").attr("src", "img/Whastapp Integration Services/WhatsApp Business API.png");
    $("#image-title").text("WhatsApp Business API");
    $("#paragraph").html("<ul><li>Leverage the official WhatsApp Business API to enable secure, high-volume messaging for customer support, notifications, and marketing campaigns.</li><li>Ensure seamless integration with CRM, eCommerce, and other business tools for automated workflows and enhanced efficiency.</li></ul>");
}

function two() {
    $("#beyond-bookshell-img").attr("src", "img/Whastapp Integration Services/Automated Messaging & Chatbots.png");
    $("#image-title").text("Automated Messaging & Chatbots");
    $("#paragraph").html("<ul><li>Set up AI-powered chatbots to handle customer queries instantly, reducing response time and improving engagement.</li><li>Automate and simply mass communication and personalized responses with automated tools.</li></ul>");
}

function three() {
    $("#beyond-bookshell-img").attr("src", "img/Whastapp Integration Services/Multi-Agent Support & Team Inbox.png");
    $("#image-title").text("Multi-Agent Support & Team Inbox");
    $("#paragraph").html("<ul> <li>Manage customer conversations efficiently with a shared team inbox, allowing multiple agents to respond to queries in real time. </li><li> Assign conversations, track responses, and ensure seamless collaboration within your support team.</li></ul>");
}

function four() {
    $("#beyond-bookshell-img").attr("src", "img/Whastapp Integration Services/Broadcast Messaging & Bulk Notifications.png");
    $("#image-title").text("Broadcast Messaging & Bulk Notifications");
    $("#paragraph").html("<ul> <li>Send promotional messages, alerts, and updates to thousands of customers instantly while ensuring compliance with WhatsApp’s policies.</li><li>Personalize bulk messages with customer names and details for higher engagement and better response rates.</li></ul>");
}

function five() {
    $("#beyond-bookshell-img").attr("src", "img/Whastapp Integration Services/CRM & Third-Party Integrations.png");
    $("#image-title").text("CRM & Third-Party Integrations");
    $("#paragraph").html("<ul> <li>Connect WhatsApp with your CRM, eCommerce platform, or helpdesk software to sync customer data and streamline workflows.</li><li>Automate lead nurturing, sales follow-ups, and customer support by integrating WhatsApp with tools like HubSpot, Salesforce, and Shopify.</li></ul>");
}












