# Customer-feedback-system

So, these are the steps to setup and run this web application:

Setup
Put your: GOOGLE_CLIENT_ID,
GOOGLE_CLIENT_SECRET,
GOOGLE_CALLBACK_URL,
SESSION_SECRET,
PORT in .env
in the backend

Steps to run:

In the terminal
1. cd frontend
2. npm i
3. npm start(will start the development server on the port 3000(default)
In another terminal
4. cd backend
5. install necessary libraries or packages like Axios, cors, express, express-session, passport, passport-google-oauth20 in the command line
6. check for the scripts in the package.json file

# Demonstration

1. On the application homepage, you will see a Google login button.
2. Click the Google login button to initiate the OAuth authentication flow.
3. A Google login window will appear. Sign in with your Google credentials.
4. Upon successful login, you will be redirected back to the application.
5. After logging in, the feedback form will be displayed.
6. Select a feedback category from the dropdown menu (e.g., Product Features, Product Pricing, Product Usability).
7. Enter a rating (e.g., 4 out of 5).
8. Provide any comments you have about the product.
9. Click the submit button to send your feedback.
10. Upon submission, the feedback data (category, rating, and comments) will be sent to the backend server.
11. The backend server will store the feedback in your local database.
