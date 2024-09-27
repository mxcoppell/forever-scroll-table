const tableBody = document.querySelector('#data-table tbody');
let rowCount = 25; // Initial row count

// Function to load initial rows
function loadInitialRows() {
    for (let i = 1; i <= rowCount; i++) {
        addRow(i);
    }
}

// Function to generate a random floating value between 20.0 and 60.0 with 2 decimal precision
function getRandomValue() {
    return (Math.random() * (60.0 - 20.0) + 20.0).toFixed(2);
}

// Function to add a row to the table
function addRow(index) {
    const row = document.createElement('tr');
    // Add the index number in the first column with "Order-" prefix
    const indexCell = document.createElement('td');
    indexCell.textContent = `Order-${index}`;
    row.appendChild(indexCell);
    // Add the rest of the columns with random values
    for (let j = 1; j <= 6; j++) {
        const cell = document.createElement('td');
        cell.textContent = getRandomValue();
        row.appendChild(cell);
    }
    tableBody.appendChild(row);
}

// Function to load more rows when scrolling
function loadMoreRows() {
    const container = document.querySelector('.table-container');
    // Check if the user has scrolled to the bottom
    if (container.scrollTop + container.clientHeight >= container.scrollHeight - 5) { // Added a small buffer
        rowCount += 5; // Load 5 more rows
        for (let i = rowCount - 4; i <= rowCount; i++) {
            addRow(i);
        }
        console.log(`Total rows: ${rowCount}`); // Log the total number of rows
    }
}

// Function to update the values in the table
function updateValues() {
    const rows = tableBody.querySelectorAll('tr');
    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        cells.forEach((cell, index) => {
            if (index > 0) { // Skip the first column (index)
                if (Math.random() < 0.3) { // 30% chance to update
                    let currentValue = parseFloat(cell.textContent);
                    let change = (Math.random() * 1 - 0.5).toFixed(2); // Change between -0.5 and 0.5
                    let newValue = (currentValue + parseFloat(change)).toFixed(2);
                    if (newValue > currentValue) {
                        cell.style.color = 'green';
                        cell.style.fontWeight = 'bold';
                    } else if (newValue < currentValue) {
                        cell.style.color = 'red';
                        cell.style.fontWeight = 'bold';
                    } else {
                        cell.style.color = 'black';
                        cell.style.fontWeight = 'normal';
                    }
                    cell.textContent = newValue;
                } else {
                    cell.style.color = 'black';
                    cell.style.fontWeight = 'normal';
                }
            }
        });
    });
}

// Event listener for scrolling
document.querySelector('.table-container').addEventListener('scroll', loadMoreRows);

// Load initial rows on page load
loadInitialRows();

// Update values every 1 second
setInterval(updateValues, 1000);