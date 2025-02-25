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
    $("#beyond-bookshell-img").attr("src", "img/Manufacturing Management Icons & Images/Production Planning & Scheduling.png");
    $("#image-title").text("Production Planning & Scheduling");
    $("#paragraph").html("<ul><li>Automatically schedule production runs, and allocate labor based on capacity and deadlines.</li><li>Adjust production schedules in real time based on demand fluctuations, material shortages, or machinery breakdowns to minimize disruptions.</li><li>Use historical data and analytics to predict future demand, plan production cycles, and optimize resource utilization.</li></ul>");
}

function two() {
    $("#beyond-bookshell-img").attr("src", "img/Manufacturing Management Icons & Images/Inventory Management.png");
    $("#image-title").text("Inventory Management");
    $("#paragraph").html("<ul><li>Monitor raw materials, work-in-progress, and finished goods across multiple locations to avoid stockouts and excess inventory.</li><li>Use barcode and RFID technology to track inventory movements, reducing manual errors and enhancing traceability.</li><li>Set automated reorder points, and automatically generate purchase orders for stock replenishment based on inventory levels.</li></ul>");
}

function three() {
    $("#beyond-bookshell-img").attr("src", "img/Manufacturing Management Icons & Images/Purchase Order Management.png");
    $("#image-title").text("Purchase Order Management");
    $("#paragraph").html("<ul> <li>Create and send purchase orders to both storage departments and vendors for timely procurement and clear communication.</li><li>Reconcile purchase orders with delivery receipts and invoices automatically to ensure accuracy and eliminate discrepancies.</li><li>Consolidate purchase orders, invoices, and payments in one platform for efficient expense tracking and seamless updates to department heads.</li></ul>");
}

function four() {
    $("#beyond-bookshell-img").attr("src", "img/Manufacturing Management Icons & Images/Supply Chain Management.png");
    $("#image-title").text("Supply Chain Management");
    $("#paragraph").html("<ul> <li>Manage multiple suppliers, track order statuses, and evaluate performance metrics of each supplier to ensure reliable material sourcing.</li><li>Monitor the entire supply chain in real time, from suppliers to distribution, enabling quick responses to any supply chain issues.</li><li>Optimize transportation routes, manage freight costs, and ensure timely delivery of raw materials and products.</li></ul>");
}

function five() {
    $("#beyond-bookshell-img").attr("src", "img/Manufacturing Management Icons & Images/Workforce & Labor Management.png");
    $("#image-title").text("Workforce & Labor Management");
    $("#paragraph").html("<ul> <li>Plan and manage workforce schedules, ensuring appropriate staff levels for each production shift.</li><li>Monitor employee productivity and track performance metrics to identify training needs and improvement opportunities.</li><li>Track safety protocols and compliance requirements, ensuring workplace safety and reducing accidents.</li></ul>");
}

function six() {
    $("#beyond-bookshell-img").attr("src", "img/Manufacturing Management Icons & Images/Cost Management & Financial Oversight.png");
    $("#image-title").text("Cost Management & Financial Oversight");
    $("#paragraph").html("<ul> <li>Track production costs, including materials, labor, and overheads, to ensure expenses remain within budget.</li><li>Perform cost-profit analysis on each product line to identify areas for cost reduction and pricing optimization.</li><li>Generate financial reports and forecasts, helping management make informed decisions about cost control and resource allocation.</li></ul>");
}

function seven() {
    $("#beyond-bookshell-img").attr("src", "img/Manufacturing Management Icons & Images/Resource Allocation & Optimization.png");
    $("#image-title").text("Resource Allocation & Optimization");
    $("#paragraph").html("<ul> <li>Track and manage materials, tools, and labor across multiple production lines to ensure that resources are used effectively.</li><li>Optimize machine and equipment use, ensuring that production lines are operating at full capacity with minimal downtime.</li><li>Analyze resource utilization and forecast future demand to adjust production schedules and meet changing requirements.</li></ul>");
}

function eight() {
    $("#beyond-bookshell-img").attr("src", "img/Manufacturing Management Icons & Images/Production Data Collection & Reporting.png");
    $("#image-title").text("Production Data Collection & Reporting");
    $("#paragraph").html("<ul> <li>Collect production data directly from machines and operators, including output, quality, and downtime, to ensure accurate performance tracking.</li><li>Generate detailed reports on production trends, efficiency, and quality metrics, enabling informed decision-making and performance analysis.</li><li>Maintain a complete history of production activities for traceability, enabling compliance audits and improving quality control.</li></ul>");
}









