import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "../Animations/loader";
import styles from "./styles/styles.module.css";
import GridData from "../gridData/stockGrid";
import HeroSection from "./heroComp";
import Footer from "../footer/footer";

const Login = () => {
    const [LoaderState, SetLoaderState] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showNewContent, setShowNewContent] = useState(false);

    const UserLogin = () => {
        if(password==="password" && username==="sammy"){
            sessionStorage.setItem("LOG_STATE","encryptedtoken");
            window.location.reload();
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowNewContent(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const toform = () => {
        window.location.href= '#tolog';
    };

    if (LoaderState){
        return (
            <Loader/>
        )
    }

    return (
        <div className={styles.pageContainer}>
            {/* Left Section with Blue Gradient Animation */}
            <div className={styles.leftSection}>
                <div className={styles.animationBackground}></div>
                <HeroSection
                    functTolg={toform}
                />
            </div>

            {/* Right Section with Login Form */}
            <div className={styles.rightSection}>
                <div className={styles.formContainer}>

                    {/* Login Form */}
                    <h2 id="log">Login Here</h2>
                    <form>
                        <input
                            type="text"
                            placeholder="Username"
                            className={styles.input}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className={styles.input}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className={styles.btn} onClick={UserLogin}>Login</button>
                    </form>

                    {/* Footer */}
                    <p className={styles.footerText}>
                        Don’t have an account?{" "}
                        <span className={styles.signupLink}><a href="/SignUp">Sign up</a></span>
                    </p>
                    <p className={styles.footerText}>
                        Powered by <span className={styles.oasis}>Oasis</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
