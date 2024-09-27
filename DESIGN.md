# Design Specification for Dynamic Table Project

## 1. Project Overview
This design specification outlines the structure, functionality, and technical requirements for a dynamic table project. The project involves creating a single HTML page displaying a dynamic table with 6 columns and a scrolling functionality. The table should start with 25 rows of data, and as the user scrolls down, additional rows will be loaded while keeping the same display size. Additionally, the table values will be updated at regular intervals based on specific rules.

## 2. Functionality

### 2.1. Table Structure
- **Columns**: The table will have 6 columns.
    - **Column Headers**: Mocked names will be used for the headers. Each header will be labeled as "Column1", "Column2", etc., up to "Column6".
    - **Row Index**: The first column of each row will display the index number prefixed with "Order-" (e.g., "Order-1" for the first row).

### 2.2. Table Display Size
- The table will display **exactly 20 rows** at any given time. The table’s viewport size should remain fixed regardless of user scrolling.

### 2.3. Data Loading
- The table will start with **25 rows of mocked data**.
- As the user scrolls down, new data rows will load, but the display size of the table remains constant. The number of rows will continue to grow as the user scrolls.

### 2.4. Vertical Scroll Bar Behavior
- The vertical scroll bar should behave dynamically:
  - It will **automatically hide** if there are fewer rows than the viewport allows.
  - As more rows load, the scroll bar will appear and adjust to reflect the additional rows.

### 2.5. Data Update
- The values in the table will be updated at regular intervals based on the following rules:
  - **Update Interval**: 1 second.
  - **Update Probability**: Each data cell has a 30% chance to be updated.
  - **Value Change**: The value can go up or down with a 50% chance for each direction.
  - **Value Range**: The value change can be between -0.5 to 0.5 for each update.
  - **Value Display**: 
    - If the value goes up, display the updated value in the cell as bold with green color.
    - If the value goes down, display the updated value in the cell as bold with red color.
    - If the value does not change, display the value in normal text with black color.

## 3. User Interaction

### 3.1. Scrolling Behavior
- **Scroll Trigger**: When the user reaches the bottom of the displayed rows, new rows will load and be appended to the existing rows.
- **Display Size Consistency**: The visible portion of the table remains fixed to display exactly 20 rows, with new rows loading invisibly below.

## 4. Mock Data

### 4.1. Initial Data
- The table will start with **25 rows**.
- Each cell will contain mocked values, such as "Data X-Y", where X is the row index and Y is the column index (e.g., "Data 1-2" for the first row, second column).

### 4.2. Data Format
- The data format for each cell will be strings representing floating values with 2 decimal precision, within the range of 20.0 to 60.0.

## 5. Technical Details

### 5.1. Tech Stack
- **Frontend Framework**: HTML, CSS, and JavaScript for the basic implementation.
- **Library**: A JavaScript framework or library such as **React** can be considered to handle the dynamic loading and scroll behavior, although it can also be achieved with vanilla JavaScript.
- **Data Handling**: Mock data can be initialized directly in the JavaScript file. For larger datasets, **AJAX** or **fetch API** can be used to simulate loading more rows from a server endpoint.

### 5.2. Table Rendering
- **Fixed Height**: The table will have a fixed height so that only 20 rows are visible.
- **Overflow Handling**: The table will use CSS properties like `overflow-y: auto` to handle scrolling within the fixed-height area.
- **Responsive Design**: CSS should ensure the table is responsive across different screen sizes.

### 5.3. Dynamic Row Loading
- **Infinite Scroll**: Implement an event listener for the table’s scroll position. When the user scrolls to the bottom, a function should be triggered to append additional rows of data.
- **Scroll Bar Adjustment**: The vertical scroll bar will adjust dynamically based on the total number of rows displayed in the table.

### 5.4. Value Update
- **Interval Update**: Implement a function to update the values in the table at a 1-second interval.
- **Value Change Logic**: Apply the rules for updating the values, including the probability of change, direction of change, and display formatting.

## 6. How to Run the Demo Project

### 6.1. Steps in Cursor AI
1. **Open Cursor AI Composer**: Navigate to the project creation environment.
2. **Create a New Project**: Set up a new HTML project.
3. **Import Libraries** (if using React or another library):
   - Install dependencies such as `react` and `react-dom` if needed, using the package manager in Cursor AI Composer.
4. **Write the HTML Structure**:
   - Create a simple HTML page with a table structure.
5. **Add JavaScript Logic**:
   - Implement JavaScript or React logic to initialize the table with 25 rows and handle the scroll event for adding new rows dynamically.
   - Implement the value update logic based on the specified rules.
6. **Add CSS Styles**:
   - Define styles to ensure the table has a fixed height and manages overflow with dynamic scrolling.
7. **Run the Demo**:
   - Use Cursor AI Composer's **preview feature** to open the project in a browser.

### 6.2. Browser Demo
1. **Open Browser Preview**: After running the demo in Cursor AI Composer, use the built-in preview tool to open the demo in a browser.
2. **Test Scrolling**: Scroll through the table to confirm that additional rows load dynamically while the table display size remains constant.
3. **Observe Scroll Bar**: Ensure the vertical scroll bar appears, disappears, and adjusts based on the number of rows displayed.
4. **Test Value Update**: Observe the table values to ensure they are updated according to the specified rules.

## 7. Potential Enhancements (Optional)
- **Lazy Loading**: For larger datasets, consider implementing lazy loading for efficient resource management.
- **Custom Scroll Bar**: Style the scroll bar to enhance user experience.
- **Data Persistence**: Use local storage or a backend API to persist data when the page is reloaded.

## 8. Conclusion
This project involves the creation of a dynamically growing table with a fixed display size of 20 rows and automatic scroll management. By using basic web technologies and/or React, this project can be demonstrated effectively in Cursor AI Composer with a focus on seamless user experience and efficient data handling. The table values will be updated at regular intervals based on specific rules to simulate real-time data changes.
