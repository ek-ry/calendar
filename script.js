document.getElementById('bookBtn').addEventListener('click', function() {
    // Hide home page and show booking page
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('bookingPage').style.display = 'block';

    // Initialize the full calendar
    var calendarEl = document.getElementById('calendar');
    var selectedDate = "";  // Store selected date
    var selectedTime = "";  // Store selected time

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        selectable: true,
        select: function(info) {
            // Show selected date
            selectedDate = info.startStr;
            document.getElementById('appointmentDateReceipt').innerText = selectedDate;

            // Show time selection and submit button
            document.getElementById('timeSelectionContainer').style.display = 'block';
            document.getElementById('submitBooking').style.display = 'block';
        },
        contentHeight: 'auto'  // Minimize the calendar height
    });
    calendar.render();

    // Handle time selection
    document.querySelectorAll('.time-btn').forEach(function(button) {
        button.addEventListener('click', function() {
            // Deselect all buttons
            document.querySelectorAll('.time-btn').forEach(function(btn) {
                btn.style.backgroundColor = '#007bff';
            });
            // Select the clicked button
            button.style.backgroundColor = '#0056b3';

            selectedTime = button.getAttribute('data-time');
            document.getElementById('appointmentTimeReceipt').innerText = selectedTime;
        });
    });
});

document.getElementById('submitBooking').addEventListener('click', function() {
    // Get user's name
    let userName = document.getElementById('userNameInput').value;
    let appointmentDate = document.getElementById('appointmentDateReceipt').innerText;  // Use the date shown in the receipt
    let appointmentTime = document.getElementById('appointmentTimeReceipt').innerText;  // Use the time shown in the receipt

    // Validate input
    if (userName === "" || appointmentDate === "" || appointmentTime === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Hide booking page and show confirmation/receipt
    document.getElementById('bookingPage').style.display = 'none';
    document.getElementById('confirmationPage').style.display = 'block';

    // Set receipt information
    document.getElementById('userNameReceipt').innerText = userName;
    document.getElementById('appointmentDateReceipt').innerText = appointmentDate;
    document.getElementById('appointmentTimeReceipt').innerText = appointmentTime;
});
