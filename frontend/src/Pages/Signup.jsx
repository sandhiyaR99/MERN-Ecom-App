import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../Config/firebase';
import '../Styles/Signup.css';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                navigate('/');
            }
        });
        return () => unsubscribe(); 
    }, [navigate]);

    const handleSignup = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                console.log("Registration successful");
                navigate('/');
            })
            .catch((error) => {
                console.error("Error during registration: ", error.message);
            });
    };

    return (
        <div className='signup-container'>
            <h3 className='signup-subtitle'>Signup:</h3>
            <div className='signup-input-group'>
                <label htmlFor="inputEmail" className="signup-label">Email ID:</label>
                <input
                    type="email"
                    id="inputEmail"
                    className="signup-input"
                    aria-describedby="passwordHelpBlock"
                    onChange={(e) => { setEmail(e.target.value); }}
                />
            </div>
            <div className='signup-input-group'>
                <label htmlFor="inputPassword" className="signup-label">Password:</label>
                <input
                    type="password"
                    id="inputPassword"
                    className="signup-input"
                    aria-describedby="passwordHelpBlock"
                    onChange={(e) => { setPassword(e.target.value); }}
                />
                <label htmlFor="ConfirmPassword" className="signup-label">Confirm Password:</label>
                <input
                    type="password"
                    id="confirmPassword"
                    className="signup-input"
                />
                <div id="passwordHelpBlock" className="signup-password-help">
                    Your password must be more than 6 characters long.
                </div>
            </div>
            <p className='signup-footer'>
                Already have an account? Please login <Link to={'/'}>here</Link>.
            </p>
            <button type="button" className="signup-button" onClick={handleSignup}>Sign Up</button>
        </div>
    );
};

export default Signup;
