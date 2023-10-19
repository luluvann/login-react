# Login Page using React, TypeScript, Sass

## Requirements
- A login page with a good UX and an aesthetic UI
- Made with a SPA framework like React or VueJs etc.
- Composed of reusable components
- The login page show an error message when the wrong credentials are used (simple validation in TS)

## Additional requirements
- The user can press keyboard enter in either email or password field to login (same functionality as pressing login button)
- When email or password field are empty, an error message is triggered
- When the login is successful, the user is redirected to the /dashboard page

## User Story and acceptance criterias
As user of a web application, I would like to login and access to login to my dashboard
- When I go to the root route of the web app, I am redirected to a login page where I can enter my email and password
- When I enter wrong email and/or password after I clicked on the login button, or after I pressed enter, an error message appears and tells me that my credentials are wrong
- When press the login button or press enter and the email and/or password fields are empty, an error message will appear underneath the field that is empty
- When I press the login button or press enter and that I have entered the right credentials, I am redirected to the /dashboard page

## Deployment link in GH pages
[https://luluvann.github.io/login-react/](https://luluvann.github.io/login-react/)

## Successful login
To be able to successfully login, enter the following email/password credentials:
1. Email: test@test.com / pw: test
2. Email: test1@test1.com / pw: test1

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000/login-react](http://localhost:3000/login-react) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.