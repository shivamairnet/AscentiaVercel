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
    $("#beyond-bookshell-img").attr("src", "img/Kindergarten Management Icons & Images/Digital Admission Process.png");
    $("#image-title").text("Digital Admission Process");
    $("#paragraph").html("<ul><li>Parents can complete the admission process through online admission application form, eliminating the need for physical paperwork.</li><li>System verifies submitted documents digitally, reducing manual effort and errors.</li><li>Parents can track their child’s admission status in real time through the mobile app.</li></ul>");
}

function two() {
    $("#beyond-bookshell-img").attr("src", "img/Kindergarten Management Icons & Images/Digital Attendance.png");
    $("#image-title").text("Digital Attendance");
    $("#paragraph").html("<ul><li>Teachers can take attendance digitally, reducing manual work and increasing accuracy </li><li>Parents receive instant alerts when their child is marked present, absent, or late.</li><li>Admins can access attendance trends, generate reports, and monitor absentee patterns.</li></ul>");
}

function three() {
    $("#beyond-bookshell-img").attr("src", "img/Kindergarten Management Icons & Images/QR Based Pickup & Drop.png");
    $("#image-title").text("QR-Based Pick-Up & Drop Security");
    $("#paragraph").html("<ul> <li>Only authorized guardians can pick up children by scanning a unique QR code, ensuring safety.</li><li>Parents get instant alerts confirming their child’s safe pickup or drop-off.</li><li>Schools can monitor transport routes and ensure safe transit for students.</li></ul>");
}

function four() {
    $("#beyond-bookshell-img").attr("src", "img/Kindergarten Management Icons & Images/Fee Management & Online Collection.png");
    $("#image-title").text("Fee Management & Online Collection");
    $("#paragraph").html("<ul> <li>Parents can pay school fees via multiple digital payment options, including credit cards, UPI, and net banking.</li><li>System generates digital invoices and receipts, ensuring transparency in fee collection.</li><li>Automated alerts notify parents about upcoming or overdue payments, reducing manual follow-ups.</li></ul>");
}

function five() {
    $("#beyond-bookshell-img").attr("src", "img/Kindergarten Management Icons & Images/Teacher, Parent & Staff Management.png");
    $("#image-title").text("Teacher, Parent & Staff Management");
    $("#paragraph").html("<ul> <li>Manage teacher, parent, and staff profiles with access control based on roles.</li><li>Assign tasks, manage schedules, and track teacher and staff attendance digitally.</li><li>Enable structured interactions through the mobile app to ensure better engagement.</li></ul>");
}

function six() {
    $("#beyond-bookshell-img").attr("src", "img/Kindergarten Management Icons & Images/Mobile Apps For Teacher, Parents & Admins.png");
    $("#image-title").text("Mobile Apps for Parents, Teachers, & Admin");
    $("#paragraph").html("<ul> <li>Dedicated Apps for Parents, Teachers & Admins, so that each stakeholder gets a tailored experience to manage their specific needs.</li><li>Get real-time alerts about attendance, fee payments, events, and school announcements on digital board.</li><li>Intuitive navigation ensures ease of use for parents, teachers, and administrators.</li></ul>");
}

function seven() {
    $("#beyond-bookshell-img").attr("src", "img/Kindergarten Management Icons & Images/Class & Student Management.png");
    $("#image-title").text("Class & Student Management");
    $("#paragraph").html("<ul> <li>Assign students to different classes and sections digitally without paperwork.</li><li>Maintain a secure record of student details, including attendance, performance, and fee status.</li><li>Generate reports on class performance, teacher efficiency, and student progress for data-driven decisions.</li></ul>");
}

function eight() {
    $("#beyond-bookshell-img").attr("src", "img/Kindergarten Management Icons & Images/Daily Student & Incident Reporting.png");
    $("#image-title").text("Daily Student & Incident Reporting");
    $("#paragraph").html("<ul> <li>Teachers can monitor and log students' academic performance on a daily basis, ensuring consistent tracking of their growth.</li><li>Parents receive real-time notifications about their child's academic achievements, milestones, and challenges.</li><li>Parents can access daily homework and assignments and see their ward's grade cards.</li></ul>");
}

function nine() {
    $("#beyond-bookshell-img").attr("src", "img/Kindergarten Management Icons & Images/Appointment Scheduling.png");
    $("#image-title").text("Appointment Scheduling");
    $("#paragraph").html("<ul> <li>Parents can book appointments with teachers and school staff via the app.</li><li>System sends reminders to both parties to ensure scheduled meetings are not missed.</li><li>Schools can set available time slots, making scheduling easy and efficient.</li></ul>");
}

function ten() {
    $("#beyond-bookshell-img").attr("src", "img/Kindergarten Management Icons & Images/In App Chat For Parents & Admin.png");
    $("#image-title").text("In-App Chat for Parents & Admin");
    $("#paragraph").html("<ul> <li>Parents can chat with teachers and school administrators anytime.</li><li>Keep all messages documented and accessible for reference.</li><li>Users receive alerts for new messages, ensuring timely responses.</li></ul>");
}








