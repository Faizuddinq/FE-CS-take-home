
# Dynamic Content Manager

A dynamic content manager built using **ReactJS** and **Tailwind CSS**. It allows users to fetch and display data from APIs, paginate through the content, and export the displayed data as a CSV file.

## Features

- **Fetch Content**: Dynamically fetch data from two endpoints (`Posts` and `Comments`).
- **Pagination**: Displays 10 rows per page with navigation controls for pagination.
- **Download Data**: Allows the user to download the displayed data as a CSV file.
- **Loading Spinner**: Shows a spinner while data is being fetched.
- **Responsive UI**: Designed using **Tailwind CSS** for a clean and modern look.

---

## Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn** package manager

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Faizuddinq/FE-CS-take-home.git
   cd FE-CS-take-home
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   or, if you prefer **yarn**:

   ```bash
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   or, with **yarn**:

   ```bash
   yarn start
   ```

4. Open your browser and visit [http://localhost:5173](http://localhost:5173).

---



## Usage

1. **Select Content Type**: Use the dropdown to choose between `Posts` or `Comments`. This will dynamically load and display the corresponding data.

2. **Pagination**: The table will display 10 rows per page. Use the pagination controls (Previous, Next, Page Numbers) to navigate through the data.

3. **Download CSV**: Once you have the content you need, click the **Download** button to export the displayed data as a CSV file.

---

## How it Works

- **Fetching Data**: The application fetches data from the following API endpoints:
    - **Posts**: [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts)
    - **Comments**: [https://jsonplaceholder.typicode.com/comments](https://jsonplaceholder.typicode.com/comments)
  
- **Pagination**: The data is paginated into 10 rows per page. Pagination logic is handled through a custom `Pagination` component, which is embedded inside the `TableComponent`.

- **Download CSV**: The `Download` component allows you to export the currently displayed data to a CSV file. The download is disabled for 1 second after clicking, to avoid multiple requests.

---

## Components

- **Dropdown**: Lets you choose between `Posts` and `Comments`.
- **TableComponent**: Displays data in a table format with pagination support.
- **Spinner**: A loading spinner is shown while data is being fetched.
- **Download**: A button that allows you to download the current data as a CSV file.
- **Pagination**: A reusable component that handles the pagination logic.

---

## Dependencies

- **React**: JavaScript library for building user interfaces.

- **Tailwind CSS**: Utility-first CSS framework for building custom designs.


---


