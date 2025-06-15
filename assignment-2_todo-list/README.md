# Todo List App

A simple and modern Todo List web application built with React. This app allows users to add, view, and manage their daily tasks with due dates, providing a clean and intuitive user experience.

---

## Features

- Add new tasks with a name and completion date
- View a list of all tasks
- Mark tasks as completed
- Remove tasks
- Responsive and user-friendly interface
- Date picker for selecting due dates

---

## How It Works

1. **Add a Task:** Enter a task name and select a completion date using the date picker. Click "Add Task" to add it to your list.
2. **View Tasks:** All tasks are displayed in a list, showing their names and due dates.
3. **Complete/Remove Tasks:** Mark tasks as completed or remove them from the list as needed.

---

## Getting Started

### Prerequisites

- Node.js (v14 or above recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd assignment-2_todo-list
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the App

Start the development server:

```bash
npm start
# or
yarn start
```

The app will be available at [http://localhost:3000](http://localhost:3000).

---

## Usage

- Enter a task name in the input field.
- Click on the due date input to open the calendar and select a date.
- Click "Add Task" to add the task to your list.
- Mark tasks as completed or delete them as needed.

---

## Testing (User Flows)

This section describes how to manually test the app as a user, covering all main features and flows:

### 1. Adding a Task

- Enter a task name in the "Task Name" input field.
- Click on the due date input (shows "Enter Completion Date") to open the calendar and select a date.
- Click the "Add Task" button.
- **Expected:** The new task appears in the list below, showing the task name and due date.

### 2. Viewing the List of Tasks

- All added tasks are displayed as a list.
- Each task shows:
  - Task name
  - Due date
  - Action buttons (Complete, Remove, Resume)

### 3. Completing a Task

- Click the "Complete" button next to a task.
- **Expected:**
  - The task's appearance changes (e.g., strikethrough or faded) to indicate completion.
  - The "Complete" button may be replaced by a "Resume" button.

### 4. Removing a Task

- Click the "Remove" button next to a task (completed or not).
- **Expected:** The task is removed from the list.

### 5. Resuming a Completed Task

- For a completed task, click the "Resume" button.
- **Expected:**
  - The task returns to the active (incomplete) state.
  - The "Resume" button is replaced by the "Complete" button.

### 6. Filtering Tasks

- Use the filter options (e.g., All, Active, Completed) usually found above or near the task list.
- **Expected:**
  - "All" shows every task.
  - "Active" shows only incomplete tasks.
  - "Completed" shows only completed tasks.

---

## Automated & Manual Testing

You can also use the following for more formal testing:

- **Unit/Integration/UI Testing:** See previous section for running Jest/React Testing Library/Cypress.
- **Manual Testing:** Follow the user flows above to ensure all features work as expected.

---

## Screenshots

<!-- Add images/screenshots here -->

---

## License

This project is for educational purposes.
