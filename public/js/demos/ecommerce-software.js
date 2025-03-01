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
    $("#beyond-bookshell-img").attr("src", "img/eCommerce Service Icons & Images/eCommerce Service Icons & Images/Product Catalog Management.png");
    $("#image-title").text("Product Catalog Management");
    $("#paragraph").html("<ul><li>Our ecommerce platform's product catalog management streamlines the addition of new products, enabling businesses to efficiently track and manage inventory with features like stock updates, low-stock alerts, and backorder management.</li><li>It also allows businesses to define product attributes and deliver detailed product information, ensuring a seamless and informative shopping experience for customers.</li></ul>");
}

function two() {
    $("#beyond-bookshell-img").attr("src", "img/eCommerce Service Icons & Images/eCommerce Service Icons & Images/Aggregator Portals.png");
    $("#image-title").text("Aggregator Portals");
    $("#paragraph").html("<ul><li>Our aggregator portal streamlines ecommerce by consolidating product catalogs, deals, and discounts from multiple vendors. </li><li>It enables price comparison, enhances user engagement, and drives sales through diverse options and special offers all in one platform.</li></ul>");
}

function three() {
    $("#beyond-bookshell-img").attr("src", "img/eCommerce Service Icons & Images/eCommerce Service Icons & Images/Multi-Language and Multi-Currency Support.png");
    $("#image-title").text("Multi-Language and Multi-Currency Support");
    $("#paragraph").html("<ul> <li>Our ecommerce platform’s multilingual and multi-currency support enables businesses to engage a global audience effortlessly. </li><li>By offering content and transactions in preferred languages and currencies, it ensures a seamless shopping experience, simplifies international transactions, and boosts customer satisfaction and sales.</li></ul>");
}

function four() {
    $("#beyond-bookshell-img").attr("src", "img/eCommerce Service Icons & Images/eCommerce Service Icons & Images/Secure Payment Processing.png");
    $("#image-title").text("Secure Payment Processing");
    $("#paragraph").html("<ul> <li>Our ecommerce platform supports diverse payment methods like credit/debit cards, digital wallets, and bank transfers, offering flexibility to customers. </li><li>With secure payment gateway integration, our system protects the user’s sensitive data and enable international transactions, ensuring compliance and thus helping in expanding your business global reach.</li></ul>");
}

function five() {
    $("#beyond-bookshell-img").attr("src", "img/eCommerce Service Icons & Images/eCommerce Service Icons & Images/Personalized Ecommerce Products Recommendation.png");
    $("#image-title").text("Personalized Ecommerce Products Recommendation");
    $("#paragraph").html("<ul> <li>Our personalized ecommerce product recommendation feature uses customer data, including past purchases, browsing history, and search queries, to offer tailored suggestions. </li><li>The dynamic recommendation engine adapts in real-time based on customer interactions, displaying relevant products instantly.</li><li>Additionally, businesses can segment recommendations by demographics, psychographics, or purchase lifecycle to target specific customer groups effectively.</li></ul>");
}

function six() {
    $("#beyond-bookshell-img").attr("src", "img/eCommerce Service Icons & Images/eCommerce Service Icons & Images/Order Tracking.png");
    $("#image-title").text("Order Tracking");
    $("#paragraph").html("<ul> <li>Our order tracking feature provides real-time updates at every stage of the order process, from confirmation to delivery. </li><li>Integrated with logistics providers, our system ensures to provide  accurate and timely information. </li><li>With visual tracking interface, our system allows customers to view the journey of their order on a map, offering a seamless and transparent tracking experience.</li></ul>");
}

function seven() {
    $("#beyond-bookshell-img").attr("src", "img/eCommerce Service Icons & Images/eCommerce Service Icons & Images/User-Friendly Navigation.png");
    $("#image-title").text("User-Friendly Navigation");
    $("#paragraph").html("<ul> <li>Our intuitive, UI-friendly menu design ensures seamless navigation across the platform for a smooth user experience. </li><li>Search bar helps users quickly find products using keywords.</li><li>Filter and sort options allow users for easy refinement of product searches by price, popularity, and other criteria.</li></ul>");
}

function eight() {
    $("#beyond-bookshell-img").attr("src", "img/eCommerce Service Icons & Images/eCommerce Service Icons & Images/Advanced Product Search.png");
    $("#image-title").text("Advanced Product Search");
    $("#paragraph").html("<ul> <li>Our advanced product search allows users to refine results using multiple criteria and custom tags specific to your business. </li><li>The dynamic filters adjust based on product attributes, enabling precise search refinement. </li><li>Additionally, automatic product suggestions provide relevant recommendations as users type, enhancing search efficiency.</li></ul>");
}

function nine() {
    $("#beyond-bookshell-img").attr("src", "img/eCommerce Service Icons & Images/eCommerce Service Icons & Images/Order Tracking.png");
    $("#image-title").text("Complaint Management System");
    $("#paragraph").html("<ul> <li>Customers can submit their complaints via email, online forms, or direct messages.</li><li>Complaints are classified by type (e.g. Product Quality, Delivery, Payment Issues) and prioritized based on severity.</li><li>Each complaint automatically generates a ticket for efficient tracking and resolution.</li><li>Customers can track the status of their complaints in real-time for transparency and certainty during resolution.</li></ul>");
}

function ten() {
    $("#beyond-bookshell-img").attr("src", "img/eCommerce Service Icons & Images/eCommerce Service Icons & Images/Secure Payment Processing.png");
    $("#image-title").text("Ecommerce Customer Service Support");
    $("#paragraph").html("<ul> <li>Customers can reach your business via Live Chat, Email, Phone Support, and more.</li><li>Our AI customer support chat ensures round-the-clock assistance.</li><li>Our system integration with CRM software to maintain a comprehensive customer record and provide seamless support across all touchpoints.</li></ul>");
}








