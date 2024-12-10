import mysql from 'mysql2';

// Create a connection to the feedback database
const feedbackDB = mysql.createConnection({
    host: 'localhost',       // Replace with your MySQL server host (e.g., "127.0.0.1")
    user: 'root',            // Replace with your MySQL username
    password: 'root',    // Replace with your MySQL password
    database: 'feedback'     // Replace with your feedback database name
});

// Connect to the database
feedbackDB.connect((err) => {
    if (err) {
        console.error('Error connecting to the Feedback database:', err);
        return;
    }
    console.log('Connected to the Feedback database!');
});

// // Example Query: Fetch all feedbacks
// feedbackDB.query('SELECT * FROM feedbacks', (err, results) => {
//     if (err) {
//         console.error('Error fetching feedback data:', err);
//         return;
//     }
//     console.log('Feedback Records:', results);
// });

// // Example Query: Insert new feedback
// const newFeedback = { user: 'John Doe', comment: 'Great product!' };
// feedbackDB.query('INSERT INTO feedbacks SET ?', newFeedback, (err, result) => {
//     if (err) {
//         console.error('Error inserting new feedback:', err);
//         return;
//     }
//     console.log('Feedback inserted successfully, ID:', result.insertId);
// });

// // Close the connection when done
// feedbackDB.end((err) => {
//     if (err) {
//         console.error('Error closing the Feedback database connection:', err);
//         return;
//     }
//     console.log('Feedback database connection closed.');
// });
