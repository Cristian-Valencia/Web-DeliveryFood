import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';


const Login = () => {



    return (
        <div className={styles.loginContainer}>

            <Form className={styles.formContainer}>

                <h2 className={styles.loginTitle}>Accedi</h2>

                <Form.Group controlId="formBasicEmail" className={styles.usernameGroup}>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="email" placeholder="Inserisci Username" />
                    {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text> */}
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

export default Login
