 function getDateDifference() {
       const inputValue = document.getElementById("myDate").value;
        const name = document.querySelector(".user-name").value.trim();

        if (!name) {
          document.getElementById("result").innerText = `Please enter your name.`;
          return;
        }

        const userName =
          name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();

        if (!inputValue) {
          document.getElementById(
            "result"
          ).innerText = `Dear ${userName}, please select a date.`;
          return;
        }
        // Split the input into parts: [YYYY, MM, DD]
        const [inputYear, inputMonth, inputDay] = inputValue
          .split("-")
          .map(Number);

        // Get today's date parts
        const now = new Date();
        let currentYear = now.getFullYear();
        let currentMonth = now.getMonth() + 1; // JS months are 0-indexed
        let currentDay = now.getDate();

        // Calculate differences
        let yearDiff = currentYear - inputYear;
        let monthDiff = currentMonth - inputMonth;
        let dayDiff = currentDay - inputDay;

        // Adjust for negative values
        if (dayDiff < 0) {
          dayDiff += daysInMonth(currentYear, currentMonth - 1);
          monthDiff--;
        }

        if (monthDiff < 0) {
          monthDiff += 12;
          yearDiff--;
        }

        // Display result
        document.getElementById(
          "result"
       ).innerText = `Dear ${userName}, You are ${yearDiff} years , ${monthDiff} months, and ${dayDiff} days old`;
      }

      // Helper function to get number of days in a month
      function daysInMonth(year, month) {
        return new Date(year, month, 0).getDate();
      }

      // Enter key Functionalities
      document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    getDateDifference();
  }
});