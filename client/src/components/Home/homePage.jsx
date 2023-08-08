import React from 'react';
import styles from './homePage.module.css';
import NavBar from '../navBar/navBar';

const HomePage = () => {
    return(
        <div className={styles.containerHome}>
            <NavBar />
            <div className={styles.section}></div>
            <div className={styles.footer}></div>
        </div>
    )
}

export default HomePage;