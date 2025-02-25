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
    $("#beyond-bookshell-img").attr("src", "img/Construction Management Icons & Images/Site Management.png");
    $("#paragraph").html("<ul><li>Easily add and manage multiple construction sites within a single platform, allowing for centralized oversight and control.</li><li>For each site, you can create and manage multiple projects, track their progress, and ensure deadlines are met.</li><li>Access detailed site-specific information, from resources and inventory to team performance, to optimize day-to-day operations.</li></ul>");
}

function two() {
    $("#beyond-bookshell-img").attr("src", "img/Construction Management Icons & Images/Store Management.png");
    $("#paragraph").html("<ul><li>Add and manage multiple stores across different locations, providing full control over inventory and supplies across your entire operation.</li><li>Track stock levels in real-time, monitor material usage, and automatically update inventory to prevent stockouts or overstocking issues.</li><li>Centralize all store data in one platform, enabling easy access to stock information, purchase orders, and material movements for efficient decision-making.</li></ul>");
}

function three() {
    $("#beyond-bookshell-img").attr("src", "img/Construction Management Icons & Images/Purchase Order & Reconciliation.png");
    $("#paragraph").html("<ul> <li>Create and send purchase orders to both storage departments and vendors for timely procurement and clear communication.</li><li>Reconcile purchase orders with delivery receipts and invoices automatically to ensure accuracy and eliminate discrepancies.</li><li>Consolidate purchase orders, invoices, and payments in one platform for efficient expense tracking and seamless updates to department heads.</li></ul>");
}

function four() {
    $("#beyond-bookshell-img").attr("src", "img/Construction Management Icons & Images/Inventory Tracking.png");
    $("#paragraph").html("<ul> <li>Track inventory at the store level, ensuring accurate stock counts and efficient management of materials available for upcoming projects.</li><li>Monitor inventory usage and availability at the site level, ensuring seamless material supply and preventing shortages during construction activities.</li><li>Stay updated with real-time inventory status across all locations, providing full visibility into stock levels and usage trends for effective resource planning.</li></ul>");
}

function five() {
    $("#beyond-bookshell-img").attr("src", "img/Construction Management Icons & Images/Inventory Usage & Site Tracking.png");
    $("#paragraph").html("<ul> <li>Track inventory usage based on site targets, ensuring that materials are consumed according to project requirements and milestones.</li><li>Monitor the correlation between inventory usage and site progress, providing real-time insights into material consumption and task completion.</li><li>Ensure accurate tracking of both inventory usage and site progress, enabling proactive adjustments to maintain project timelines and budgets.</li></ul>");
}

function six() {
    $("#beyond-bookshell-img").attr("src", "img/Construction Management Icons & Images/VendorSupplier Management.png");
    $("#paragraph").html("<ul> <li>Easily add and manage multiple vendors within the system, allowing for streamlined communication and efficient order management.</li><li>Select the appropriate vendor based on material demand, ensuring that the right supplier is chosen for each specific need.</li><li>Maintain a centralized vendor database, enabling quick access to vendor details, order history, and performance tracking for better decision-making.</li></ul>");
}

function seven() {
    $("#beyond-bookshell-img").attr("src", "img/Construction Management Icons & Images/Sub Contractor Management.png");
    $("#paragraph").html("<ul> <li>Add and manage subcontractors, assigning them to specific projects based on their expertise and requirements.</li><li>Easily assign project or site head to oversees and monitors subcontractor activities, ensuring they align with project goals and timelines.</li><li>Track subcontractor performance, site head performance, manage tasks, and ensure compliance with project standards for effective coordination and project success.</li></ul>");
}

function eight() {
    $("#beyond-bookshell-img").attr("src", "img/Construction Management Icons & Images/Analytics & Reporting.png");
    $("#paragraph").html("<ul> <li>View and analyze all purchase orders, including total POs, pending, completed, overdue, and canceled orders, providing a clear overview of procurement status.</li><li>Monitor stock inventory levels and usage in real-time, enabling better decision-making and resource allocation.</li><li>Generate detailed reports and analytics to track project performance, identify bottlenecks, and ensure smooth operations across all stages of the project.</li></ul>");
}

