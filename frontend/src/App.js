import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate, Routes, Route } from 'react-router-dom';
import FeedbackForm from './components/feedbackForm';

function App() {
    const [user, setUser] = useState(null); // Store user information
    const navigate = useNavigate(); // useNavigate hook for navigation

    const handleLoginSuccess = (credentialResponse) => {
        try {
            // Decode the ID token
            const decodedToken = jwtDecode(credentialResponse.credential);
            console.log("Decoded Token:", decodedToken);

            // Set user info (you can use given_name, email, or other fields)
            const userName = decodedToken.given_name || decodedToken.email || "User";
            setUser(userName);  // Set the user's name or email

            // After successful login, redirect to the /google/callback route
            navigate('/google/callback');
        } catch (error) {
            console.error("Error during login:", error);
        }
    };

    const CLIENT_ID = "793289975533-7dnrcersb0kc49ujd5hm6pnsqdupv4nv.apps.googleusercontent.com";

    return (
        <GoogleOAuthProvider clientId={CLIENT_ID}>
            <Routes>
                <Route
                    path="/google/callback"
                    element={<FeedbackForm />}
                />
                <Route
                    path="/"
                    element={
                        <div>
                            <h1>Customer Feedback Platform</h1>
                            <GoogleLogin
                                onSuccess={handleLoginSuccess}
                                onError={() => console.error('Login Failed')}
                            />
                        </div>
                    }
                />
               


            </Routes>
        </GoogleOAuthProvider>
    );
}

// WelcomePage Component that will display a welcome message with the user's name
function WelcomePage({ user }) {
    return (
        <div>
            {user ? (
                <h2>Welcome, {user}!</h2> // Show user's name from decoded token
            ) : (
                <h2>Welcome to the platform! Please log in.</h2>
            )}
        </div>
    );
}

export default App;
