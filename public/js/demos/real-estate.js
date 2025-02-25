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
        case 11:
            twelve();
            break;
        default:
            break;
    }
}

function one() {
    $("#beyond-bookshell-img").attr("src", "img/real-estate/Real Estate Icons-latest/Feature - Property Inventory Management.png");
    $("#paragraph").html("<ul><li>Property Management system enables real estate business service providers, property brokers to <strong> List, Exhibit, and Manage </strong> real estate properties.</li><li>Real-estate business providers and property professionals can quickly upload Property Details, High-Resolution <strong> Property Pictures, Realistic Property Videos </strong>, and <strong>Virtual Tours. </strong></li><li>Our property management system also allows real-estate business providers to manage <strong> Property Listings</strong>, including <strong>Editing Property Details</strong>, updating their <strong>Availability</strong>, and receiving <strong>Real-Time</strong> notifications for property inquiries, making our system best property management software system. </li></ul>");
}

function two() {
    $("#beyond-bookshell-img").attr("src", "img/real-estate/Real Estate Icons-latest/Feature - Broker Management Solution.png");
    $("#paragraph").html("<ul> <li>Store detailed broker profiles, including contact info, commission structures, projects, and communication history.</li><li>System can automatically calculate and process broker payments based on predefined commission rates when a property is listed for sale.</li><li>Reporting and analytics help assess broker performance, project profitability, and identify improvement areas.</li></ul>");
}

function three() {
    $("#beyond-bookshell-img").attr("src", "img/real-estate/Real Estate Icons-latest/Feature - Tenant Management.png");
    $("#paragraph").html("<ul> <li>Tenant management allows handling tenant data, including lease agreements, contact info, and payment history.</li><li>Lease management lets providers generate, monitor, and modify lease agreements, terms, rent, and renewal dates.</li><li>Integration with payment module ensures timely and easy payment collection.</li></ul>");
}

function four() {
    $("#beyond-bookshell-img").attr("src", "img/real-estate/Real Estate Icons-latest/Feature - Rental Management.png");
    $("#paragraph").html("<ul> <li>Track rental properties, including their availability and condition.</li><li>Advanced scheduling tools help businesses allocate properties, manage rental durations, and set return dates.</li><li>Reporting and analytics provide insights into rental utilization, revenue, and inventory trends for better decision-making.</li></ul>");
}

function five() {
    $("#beyond-bookshell-img").attr("src", "img/real-estate/Real Estate Icons-latest/Feature - Booking & Scheduling.png");
    $("#paragraph").html("<ul> <li>Customers can conveniently plan property viewings, and set appointments with real estate service providers.</li><li>Customers can quickly browse available time slots, choose the most convenient alternative, and schedule appointments.</li><li>Real estate agents and property owners may easily manage their availability, view booked appointments, and communicate with customers.</li></ul>");
}

function six() {
    $("#beyond-bookshell-img").attr("src", "img/real-estate/Real Estate Icons-latest/Feature - Map Integration.png");
    $("#paragraph").html("<ul> <li>Customers can easily find properties based on their preferred geographic locations, and area amenities.</li><li>Real estate providers and customers can acquire vital information about the amenities in the surrounding areas such as schools, parks, restaurants, and public transportation.</li><li>Customers can easily view the new and real-time availability of property listings to make more informed decision making.</li></ul>");
}

function seven() {
    $("#beyond-bookshell-img").attr("src", "img/real-estate/Real Estate Icons-latest/Feature - Mortage Calculator.png");
    $("#paragraph").html("<ul> <li>Our mortgage rate calculator works on a variety of factors such as property price, down payment amount, loan length, and interest rates, to create accurate monthly mortgage payment forecasts.</li><li>The advanced calculator includes property taxes and insurance fees for a complete picture of housing costs.</li><li>Real estate providers can use the calculator to show how principal and interest payments are distributed over the loan period, helping clients understand long-term financial commitments.</li></ul>");
}

function eight() {
    $("#beyond-bookshell-img").attr("src", "img/real-estate/Real Estate Icons-latest/Feature Multi Language.png");
    $("#paragraph").html("<ul> <li>Multiple language support lets customers navigate property listings and descriptions in their preferred language.</li><li>The multi-currency converter streamlines transactions by allowing clients to view property prices based on their region.</li><li>With language and currency options, real estate providers can expand internationally, overcoming language and currency barriers.</li></ul>");
}

function nine() {
    $("#beyond-bookshell-img").attr("src", "img/real-estate/Real Estate Icons-latest/Feature - Secure Payment.png");
    $("#paragraph").html("<ul> <li>Our system integrates with secure payment gateways and UPI for safe online transactions related to deposits and rent.</li><li>Consumers can pay using e-wallets, online banking, credit/debit cards, or bank transfers for faster payments.</li><li>Instant payment receipts and real-time notifications are generated for all parties involved in the transaction.</li></ul>");
}

function ten() {
    $("#beyond-bookshell-img").attr("src", "img/real-estate/Real Estate Icons-latest/Feature - Multi Platform.png");
    $("#paragraph").html("<ul> <li>Our real estate system is accessible on Web, Android, and iOS for both real estate providers and clients.</li><li>The system's functionality and design are optimized across platforms, ensuring a consistent user experience on all devices.</li><li>Multi-platform flexibility expands the user base, allowing providers to reach a larger audience across digital platforms and devices.</li></ul>");
}

function eleven() {
    $("#beyond-bookshell-img").attr("src", "img/real-estate/Real Estate Icons-latest/Feature - Integration with MLS.png");
    $("#paragraph").html("<ul> <li>MLS integration gives real estate providers access to a comprehensive, up-to-date database of property listings from professionals.</li><li>The advanced search feature allows users to filter properties by location, price, type, and amenities.</li><li>MLS integration facilitates smooth coordination of property viewings, payment negotiations, and transactions between buyers and sellers.</li></ul>");
}

function twelve() {
    $("#beyond-bookshell-img").attr("src", "img/real-estate/Real Estate Icons-latest/Feature - Analytics.png");
    $("#paragraph").html("<ul> <li>Advanced reporting and analytics allow providers to track client engagement, such as property views, clicks, and inquiries, offering insights into client preferences and behavior.</li><li>Real-time data visualization through dashboards helps monitor property performances and client specific data.</li><li>Predictive analytics helps providers make proactive decisions by forecasting future market trends and property values.</li></ul>");
}



