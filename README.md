# Dynamic Table Project

This project demonstrates a dynamic table with infinite scrolling and real-time data updates. The table displays 6 columns and starts with 25 rows of data. As the user scrolls down, additional rows are loaded dynamically. The values in the table are updated at regular intervals based on specific rules.

## Features

- **Infinite Scrolling**: The table loads additional rows as the user scrolls down.
- **Real-time Data Updates**: The values in the table are updated every second based on predefined rules.
- **Dynamic Styling**: The updated values are displayed with different styles based on whether they increased, decreased, or remained the same.

## Table Structure

- **Columns**: The table has 6 columns labeled "Column1" to "Column6".
- **Row Index**: The first column of each row displays the index number prefixed with "Order-" (e.g., "Order-1" for the first row).

## Data Update Rules

- **Update Interval**: 1 second.
- **Update Probability**: Each data cell has a 30% chance to be updated.
- **Value Change**: The value can go up or down with a 50% chance for each direction.
- **Value Range**: The value change can be between -0.5 to 0.5 for each update.
- **Value Display**: 
  - If the value goes up, display the updated value in the cell as bold with green color.
  - If the value goes down, display the updated value in the cell as bold with red color.
  - If the value does not change, display the value in normal text with black color.

## How to Run the Project

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Open the HTML File**:
   - Navigate to the project directory.
   - Open the `index.html` file in your web browser.

3. **Examine the Table**:
   - The table should display 6 columns and 25 rows initially.
   - Scroll down to load additional rows dynamically.
   - Observe the real-time updates to the table values.

## Files

- `index.html`: The HTML structure of the table.
- `styles.css`: The CSS styles for the table.
- `script.js`: The JavaScript logic for dynamic row loading and real-time data updates.
- `Design.MD`: The detailed design specification for the project.

## License

This project is licensed under the MIT License.