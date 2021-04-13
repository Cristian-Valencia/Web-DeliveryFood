import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Register.module.css';

const Register = () => {
    return (
        <div className={styles.registerContainer}>
            <Form className={styles.formContainer}>

                <h2 className={styles.loginTitle}>Accedi</h2>

                <Form.Group controlId="formBasicEmail" className={styles.usernameGroup}>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="email" placeholder="Inserisci Username" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className={styles.passwordGroup}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className={styles.passwordGroup}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <p className={styles.registrationParagraph}>
                    Prima volta su LabForFood Delivery? 
                    <Link to="/registerPage" className={styles.registrationButton}>
                        Crea un account
                    </Link>
                </p>


                <Button variant="primary" type="submit" className={styles.buttonLogin}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Register
