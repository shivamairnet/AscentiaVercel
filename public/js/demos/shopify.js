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
    $("#beyond-bookshell-img").attr("src", "img/Shopify Images & Icons/Custom Shopify Store Development.png");
    $("#image-title").text("Custom Shopify Store Development");
    $("#paragraph").html("<ul><li>Build high-performance, scalable Shopify stores with custom themes and advanced functionality to enhance user experience and drive sales.</li><li>Our development approach ensures seamless navigation, optimized UI/UX, and mobile responsiveness for maximum customer engagement.</li></ul>");
}

function two() {
    $("#beyond-bookshell-img").attr("src", "img/Shopify Images & Icons/Shopify Theme Customization.png");
    $("#image-title").text("Shopify Theme Customization");
    $("#paragraph").html("<ul><li>Customize Shopify themes to align with your brand identity, ensuring a unique and visually appealing storefront.</li><li>Enhance user experience with intuitive layouts, optimized performance, and tailored design elements for better conversions.</li></ul>");
}

function three() {
    $("#beyond-bookshell-img").attr("src", "img/Shopify Images & Icons/Shopify App Integration.png");
    $("#image-title").text("Shopify App Integration");
    $("#paragraph").html("<ul> <li>Integrate powerful third-party apps for payment gateways, marketing automation, and inventory management to streamline store operations.</li><li>Develop custom Shopify apps to extend functionality and provide unique solutions tailored to your business needs.</li></ul>");
}

function four() {
    $("#beyond-bookshell-img").attr("src", "img/Shopify Images & Icons/Shopify Store Migration.png");
    $("#image-title").text("Shopify Store Migration");
    $("#paragraph").html("<ul><li>Migrate your existing store from platforms like WooCommerce, Magento, or BigCommerce to Shopify with zero data loss.</li><li>Ensure smooth transition by securely transferring product listings, customer data, and order history without disrupting operations.</li></ul>");
}

function five() {
    $("#beyond-bookshell-img").attr("src", "img/Shopify Images & Icons/Custom Checkout & Payment Solutions.png");
    $("#image-title").text("Custom Checkout & Payment Solutions");
    $("#paragraph").html("<ul><li>Integrate multiple payment gateways like Shopify Payments, and PayPal for secure and seamless transactions.</li><li>Optimize checkout flow with customized layouts, upselling features, and one-page checkout to reduce cart abandonment.</li></ul>");
}

function six() {
    $("#beyond-bookshell-img").attr("src", "img/Shopify Images & Icons/Inventory & Order Management.png");
    $("#image-title").text("Inventory & Order Management");
    $("#paragraph").html("<ul><li>Automate stock tracking and real-time inventory updates to prevent overselling and stock shortages.</li><li>Simplify order fulfillment with streamlined workflows, bulk order processing, and automated notifications for better efficiency.</li></ul>");
}

function seven() {
    $("#beyond-bookshell-img").attr("src", "img/Shopify Images & Icons/Shopify Multi-Store Setup.png");
    $("#image-title").text("Shopify Multi-Store Setup");
    $("#paragraph").html("<ul><li>Set up and manage multiple Shopify stores for different regions, languages, or product categories with a centralized system.</li><li>Implement advanced store syncing for inventory, pricing, and customer data management across multiple storefronts.</li></ul>");
}



