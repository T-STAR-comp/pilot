import React, { useState } from 'react';
import styles from './styles/styles.module.css';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [Email, setEmail] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    return (
        <div className={styles.pageContainer}>

            {/* Right Section with Login Form */}
            <div className={styles.rightSection}>
                <div className={styles.formContainer}>
                    <h2>Sign Up</h2>
                    <form>
                        <input
                            type="text"
                            placeholder="Username"
                            className={styles.input}
                            value={username}
                            onChange={handleUsernameChange}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className={styles.input}
                            value={username}
                            onChange={handleEmailChange}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className={styles.input}
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        <button className={styles.btn}>Sign Up</button>
                    </form>
                    <p className={styles.footerText}>
                        already have an account?{' '}
                        <span className={styles.signupLink}><a href="/">Login</a></span>
                    </p>
                    <p className={styles.footerText}>
                        Powered by <span className={styles.oasis}>Oasis</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
