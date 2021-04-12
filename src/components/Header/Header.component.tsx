import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/images/logo-nero.png';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <div className = {styles.headerContainer}>

            <Navbar expand="lg" bg='light'>
                <Navbar.Brand>
                    <Link to="/">
                        <img src={logo} alt="Delivery App Logo" className={styles.logo}/>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"  className={styles.hamburgerMenu}/>
                <Navbar.Collapse id="basic-navbar-nav" className={styles.linkContainer} >
                    <Nav className={`mr-auto`}>
                   
                        <Link to="/" className={styles.homeLink}>Home</Link>
                    
                        <Link to="/restaurants" className={styles.restaurantsLink}>Ristoranti</Link>
                    
                        <Link to="/login" className={styles.loginLink}>Login/Registrazioni</Link>

                        <Link to="/orders" className={styles.orderLink}>Lista Ordini</Link>
                    
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </div>

    )
}

export default Header;