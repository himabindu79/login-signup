import React, { useState } from "react";
// 1. IMPORT useNavigate
import { useNavigate } from "react-router-dom";
import './Login-Signup.css';
import user_icon from '../assets/user.png';
import email_icon from '../assets/mail.png';
import password_icon from '../assets/locked-computer.png';

const LoginSignup = () => {
    const [action, setAction] = useState("Login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // 2. GET THE NAVIGATE FUNCTION
    const navigate = useNavigate();

    const handleLogin = async () => {
        // ... (validation logic remains the same)
        if (!email || !password) {
            alert("Please enter both email and password.");
            return;
        }

        try {
            const response = await fetch('https://hrmsapi.hashstack.in/api/organization/userLogin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                console.log("Login Successful:", data);
                // 3. REDIRECT ON SUCCESS INSTEAD OF SHOWING AN ALERT
                navigate('/dashboard'); // ➡️ This will redirect to the dashboard page
            } else {
                console.error("Login Failed:", data);
                alert(`Login Failed: ${data.message || "Please check your credentials."}`);
            }
        } catch (error) {
            console.error("An error occurred:", error);
            alert("An error occurred during login. Please try again later.");
        }
    };

    return (
        // ... THE REST OF YOUR JSX REMAINS EXACTLY THE SAME
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Login" ? <div></div> : <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder="Name" />
                </div>}

                <div className="input">
                    <img src={email_icon} alt="" />
                    <input
                        type="email"
                        placeholder="Email Id"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>
            {action === "Sign Up" ? <div></div> : <div className="forgot-password"> Lost Password? <span>Click Here!</span></div>}
            
            <div className="submit-container">
                <div
                    className={action === "Login" ? "submit gray" : "submit"}
                    onClick={() => { setAction("Sign Up") }}
                >
                    Sign Up
                </div>
                <div
                    className={action === "Sign Up" ? "submit gray" : "submit"}
                    onClick={() => {
                        if (action === "Sign Up") {
                            setAction("Login");
                        } else {
                            handleLogin();
                        }
                    }}
                >
                    Login
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;