function calendar(target) {

	// Defaults and variables
	currentDay		=	moment().format('DD');   // Today's day.
	currentMonth	=	moment().format('MM');   // Today's month.
	currentYear		=	moment().format('YYYY'); // Today's year.
	// Define default.
	var monthChange = 0;
	var storedDay;
	var storedMonth;
	var storedYear;

	// Define date object for ex: ajax usage.
	var date = {
		day: currentDay,
		month: currentMonth,
		year: currentYear
	};

	// Load on init
	function staticContent() {

		// Append skeleton / markup
		function appendMarkup() {
			// String to append
			var str = '<table><caption><span class="prev">&lt;&lt;</span><span id="shownMonth" class="month"></span><span id="shownYears" class="year"></span><span class="next">&gt;&gt;</span></caption><thead><tr></tr></thead><tbody></tbody></table>';
			// Append mockup
			$(target).append(str);
		}

		// Insert table head
		function tableHead() {
			// Define variable
			var th;
			// Loop through mon-sun.
			for (i = 1; i <= 7; i++) {
				// Append <th> to the variable
				th += '<th>'+moment().isoWeekday(i).format('ddd')+'</th>';
			}
			// Append the string to thead tr
			$(target +' table thead tr').append(th);
		}

		// Execute functions.
		appendMarkup();
		tableHead();
	}

	// Will execute on init & prev + next buttons.
	function dynamicContent(change, monthEvents, activeDay) {

		//put days in order
		var orderedMonthEvents = new Array(32);
		orderedMonthEvents.fill("");
		for (var j = 0; j < monthEvents.length; j++) {
			//put in the right day
			//console.log(monthEvents[j].event);
			if (orderedMonthEvents[monthEvents[j].day] === "") {
				orderedMonthEvents[monthEvents[j].day] = monthEvents[j].event;
			} else {
				orderedMonthEvents[monthEvents[j].day] += "<br>";
				orderedMonthEvents[monthEvents[j].day] +=  monthEvents[j].event;
			}
		}

		// Define variables and set default.
		change = change || 0;
		activeDay = activeDay || null;
		// Determine how many months to add or subtract.
		monthChange += change;
		// New Date
		newDate = moment().add('months', monthChange);
		// Active month dates.
		calendarMonth = newDate.format('MM');
		calendarYear = newDate.format('YYYY');

		function appendHeadline(month, year) {
			// Convert month from int to string.
			if( month == 01 ) {
				month = 'January';
			} else if( month == 02 ) {
				month = 'February';
			} else if( month == 03 ) {
				month = 'March';
			} else if( month == 04 ) {
				month = 'April';
			} else if( month == 05 ) {
				month = 'May';
			} else if( month == 06 ) {
				month = 'June';
			} else if( month == 07 ) {
				month = 'July';
			} else if( month == 08 ) {
				month = 'August';
			} else if( month == 09 ) {
				month = 'September';
			} else if( month == 10 ) {
				month = 'October';
			} else if( month == 11 ) {
				month = 'November';
			} else if( month == 12 ) {
				month = 'December';
			} else {
				month = 'Error in month';
			}
			// Append month and year to caption
			$(target +' table caption .month').text(month);
			$(target +' table caption .year').text(year);
		}

		function appendDays(monthInfo, month, year, push) {
			// Define
			var appendStr;
			// Push
			theFirst = parseInt(moment(month+'-01-'+year,'MMMM Do YYYY').format('e'), 10); // monday = 0;
			index = 1; // the days are 1-based, not 0.
			push = index - theFirst;
			// Days in month
			daysInMonth = moment(calendarMonth+'-'+calendarYear, 'MM-YYYY').daysInMonth();
			// Push the day & append each day in the month.
			x = 0;
			for (i = push; i <= daysInMonth; i++) {
				x++;
				if (x === 1) {
					appendStr += '<tr><td id='+ i + '>'+ i + monthInfo[i] +'</td>';
				} else if(x === 7) {
					appendStr += '<td id='+ i + '>'+ i + monthInfo[i] + '</td></tr>';
					x = 0;
				} else {
					appendStr += '<td id='+ i + '>'+ i + monthInfo[i] +'</td>';
				}
			}
			// Finish the week with blank days.
			if (x !== 0) {
				for (i = 1; i <= (7-x); i++) {
					appendStr += '<td></td>';
				}
			}

			appendStr += '</tr>';
			// Remove existing tbody-rows (tr).
			$(target +' table tbody tr').remove();
			// Append new tablerows.
			$(target +' table tbody').append(appendStr);
		}

		function styleDays() {
			// if data matches last time a td were clicked
			if (storedMonth == calendarMonth && storedYear == calendarYear) {
				activeMonth = 1;
			} else {
				activeMonth = 0;
			}
			// Loop through each day
			$(target +' table tbody td').each(function() {
				// Get date inside td's
				calendarDate = parseInt($(this).text(), 10);
				// If date is less than 1, make the day, blank.
				if (calendarDate < 1) {
					// Replace the html of "td" with null.
					$(this).html('');
				}
				// If date is equal to today
				if (calendarDate == currentDay && calendarMonth == currentMonth && calendarYear == currentYear) {
					$(this).addClass('currentDay');
				}
				if (activeMonth == 1 && storedDay == calendarDate) {
					$(this).addClass('active');
				}
			});
		}

		// If the month have been changed but no day have been clicked
		if (activeDay === null) {
			// Execute functions.
			appendHeadline( calendarMonth, calendarYear );
			appendDays(orderedMonthEvents, calendarMonth, calendarYear );
			styleDays();
		}
		// If activeDay != null (a <td> have been clicked).
		else {
			// Set month and year for the active date.
			storedDay	= activeDay;
			storedMonth	= calendarMonth;
			storedYear	= calendarYear;

			// Change date for "class" object
			date.day = activeDay;
			date.month = storedMonth;
			date.year = storedYear;

			// Loop through each day and remove .active from all elements that isn't the clicked date.
			$(target +' tbody td').each(function() {
				tdDays = $(this).text();
				// If date = the clicked date
				if (activeDay == tdDays) {
					$(this).addClass('active');
				} else {
					$(this).removeClass('active');
				}
			}); // end each
		}
	}

	// Init static content (ex: lang & table-head).
	staticContent();
	// Init the calender && get returned data from function
	//data holder for month events

	// console.log(currentMonth + "  GRRRRRRRRRRRRRRRRRRRRRO " + currentYear);

	$.get('/api/events/'+ currentYear +'/'+ currentMonth, function(monthEvents) {
		
		dynamicContent(0, monthEvents);
	});

	// Prev / Next buttons
	$(target +' .prev').click(function() {
		//make current month into an int so sequilizie type is correct for query 
		currentMonth = parseInt(currentMonth);
		//minus 1 for previous month
		currentMonth -= 1;
		//if month is zero carry over year
		if (currentMonth === 0) {
			currentMonth += 12;
			currentYear -= 1;
		} console.log("month: " + currentMonth + "| year: " + currentYear);
		// redo get command
		$.get('/api/events/'+ currentYear +'/'+ currentMonth, function(monthEvents) {
			dynamicContent(-1, monthEvents);
		});
	});
	//next month copies previous but adds
	$(target +' .next').click(function() {

		currentMonth = parseInt(currentMonth);
		currentMonth += 1;

		if (currentMonth === 13) {
			currentMonth -= 12;
			currentYear += 1;
		} console.log("month: " + currentMonth + "| year: " + currentYear);
		
		console.log(currentMonth);
		$.get('/api/events/'+ currentYear +'/'+ currentMonth, function(monthEvents) {
			dynamicContent(1, monthEvents);
		});
	});

	$(target +' table').delegate('tbody td', 'click', function() {
		day = $(this).text();
		$.get('/api/events/'+ currentYear +'/'+ currentMonth, function(monthEvents) {
			dynamicContent(0, monthEvents, day);
		});
	});

	// Return active date for ex: ajax usage
	return date;
}