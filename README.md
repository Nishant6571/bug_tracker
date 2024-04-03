# Bug Tracker Application
This is a bug tracker application that allows users to add bugs based on severity and displays them in their respective stacks.

## Features
Add Bugs: Users can add bugs to the system by providing details such as title, description, source, and severity.
Display Bugs by Severity: Bugs are displayed in different stacks based on their severity - Critical, Major, Medium, and Low.
Delete Bugs: Users can delete bugs from the system.

## How to Use
Adding Bugs: To add a bug, navigate to the "Add Bug" section.

Enter the title, description, source, and select the severity of the bug.
Click on the "Add Bug" button to submit the bug.
Viewing Bugs: Bugs are displayed in separate stacks based on their severity.

Critical Bugs: These are bugs with critical severity and are displayed in the Critical Bugs stack.
Major Bugs: Bugs with major severity are displayed in the Major Bugs stack.
Medium Bugs: Bugs with medium severity are displayed in the Medium Bugs stack.
Low Bugs: Bugs with low severity are displayed in the Low Bugs stack.
Deleting Bugs: To delete a bug, click on the trash icon next to the bug in the respective stack.

Confirm the deletion when prompted.
## Technologies Used
React.js: Frontend library for building user interfaces.
Chakra UI: Component library for React applications.
Redux: State management library for React applications.
Axios: Promise-based HTTP client for making requests to the server.
Setting Up the Application

#### Clone the repository to your local machine:

```bash
git clone <repository-url>
```
#### Navigate to the project directory:

```bash
cd frontend
```
#### Install dependencies:

```bash
npm install
```
#### Start the app:

```bash
npm run dev
```

#### Navigate to the backend directory:

```bash
cd backend
```
#### Start the development server:
```bash
npm run server
```

### Screenshots

![bug1](https://github.com/Nishant6571/bug_tracker/assets/146922474/e5ad05c6-d8d8-4f2c-bfa5-b4c9a8301002)

![bug2](https://github.com/Nishant6571/bug_tracker/assets/146922474/41180903-cb21-4c57-bc68-c8c3c098a085)

![bug3](https://github.com/Nishant6571/bug_tracker/assets/146922474/83a1d1d2-ef54-449c-8a48-256032aa4861)

![bug4](https://github.com/Nishant6571/bug_tracker/assets/146922474/df3f2a97-7674-4701-8fbe-555fda08afab)

![bug5](https://github.com/Nishant6571/bug_tracker/assets/146922474/6379559e-acc6-41ad-ba0e-f1606790f939)

![bug6](https://github.com/Nishant6571/bug_tracker/assets/146922474/4f7cf0cd-65f3-4ab7-bbfc-f28531c0bfe9)

![bug7](https://github.com/Nishant6571/bug_tracker/assets/146922474/a56a0fa4-5b22-4055-b617-d82b14b20683)

![bug8](https://github.com/Nishant6571/bug_tracker/assets/146922474/5f5860f4-c516-4b1d-a682-b37b180e6c6d)

# API's

#### register user
```bash
/api/register
```
#### login user
```bash
/api/login
```
#### logout user
```bash
/api/logout
```
#### post bugs
```bash
/api/bugs
```
#### get bugs
```bash
/api/bugs
```
#### get single bug
```bash
/api/bugs/:id
```
#### update single bug
```bash
/api/bugs/:id
```
#### delete single bug
```bash
/api/bugs/:id
```
#### server deployed at: https://bug-tracker-umcg.onrender.com/
