import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Register.module.css';

const Register = () => {

    return (
        <div className={styles.registerContainer}>
            <Form className={styles.formContainer}>

                <h2 className={styles.loginTitle}>Registrazione</h2>

                <Form.Group controlId="formBasicName" className={styles.nameContainer}>
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" placeholder="Inserisci Nome"  />
                </Form.Group>

                <Form.Group controlId="formBasicUserName" className={styles.usernameContainer}>
                    <Form.Label>UserName</Form.Label>
                    <Form.Control type="text" placeholder="Inserisci Username" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail" className={styles.emailContainer}>
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" placeholder="Inserisci E-mail" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className={styles.passwordGroup}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Inserisce una Password" />
                </Form.Group>

                <Form.Group controlId="formConfirmBasicPassword" className={styles.confirmPasswordGroup}>
                    <Form.Label>Conferma Password</Form.Label>
                    <Form.Control type="password" placeholder="Conferma Password" />
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox" className={styles.checkBoxContainer}>
                    <Form.Check type="checkbox" label="Creando un account accetti Termini e le condizioni d'uso. Leggi la nostra informativa sulla Privacy e sui Cookie." />
                </Form.Group>

                <div className={styles.buttonContainer}>
                    <Button variant="success" type="submit" className={styles.registerButton}>
                        Registra
                    </Button>
                </div>



            </Form>
        </div>
    )
}

export default Register
