document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        headerToolbar: false,
        events: [
            { title: 'Shift', start: '2024-11-25T10:00:00', end: '2024-11-25T14:00:00' },
            { title: 'Unavailable', start: '2024-11-26', allDay: true }
        ]
    });
    calendar.render();

    // Display Today's Date
    const today = new Date();
    const todayElement = document.getElementById('todays-date');
    todayElement.textContent = today.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });

    // Populate Month and Year Select Dropdowns
    const monthSelect = document.getElementById('month-select');
    const yearSelect = document.getElementById('year-select');

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    monthNames.forEach((month, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = month;
        monthSelect.appendChild(option);
    });

    const currentYear = today.getFullYear();
    for (let year = currentYear - 5; year <= currentYear + 5; year++) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    }

    monthSelect.value = today.getMonth();
    yearSelect.value = today.getFullYear();

    // Update Calendar View
    monthSelect.addEventListener('change', updateCalendar);
    yearSelect.addEventListener('change', updateCalendar);

    function updateCalendar() {
        const selectedMonth = monthSelect.value;
        const selectedYear = yearSelect.value;
        calendar.gotoDate(new Date(selectedYear, selectedMonth));
    }
});
