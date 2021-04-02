import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/images/logo-nero.png';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    return (

        <div className = {styles.headerContainer}>

            <Navbar expand="lg" bg='light'>
                <Navbar.Brand href="/">
                    <img src={logo} alt="Delivery App Logo" className={styles.logo}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"  className={styles.hamburgerMenu}/>
                <Navbar.Collapse id="basic-navbar-nav" className={styles.linkContainer} >
                    <Nav className={`mr-auto`}>
                    <Nav.Link href="/" className={styles.homeLink}>Home</Nav.Link>
                    <Nav.Link href="/restaurants" className={styles.restaurantsLink}>Ristoranti</Nav.Link>
                    <Nav.Link href="/selectedRestaurant" className={styles.aboutUsLink}>Login/Registrazioni</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </div>

    )
}

export default Header;