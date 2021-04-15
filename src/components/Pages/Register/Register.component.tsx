import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Register.module.css';

const Register = () => {

    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [check, setCheck] = useState<boolean>(false);

    

    return (
        <div className={styles.registerContainer}>
            <Form className={styles.formContainer}>

                <h2 className={styles.loginTitle}>Registrazione</h2>

                <Form.Group controlId="formBasicName" className={styles.nameContainer}>
                    <Form.Label>Nome</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Inserisci Nome" 
                        value={name} 
                        onChange={e => setName(e.target.value)} 
                    />
                </Form.Group>

                <Form.Group controlId="formBasicUserName" className={styles.usernameContainer}>
                    <Form.Label>UserName</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Inserisci Username" 
                        value = {userName}  
                        onChange = {e => setUserName(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicEmail" className={styles.emailContainer}>
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Inserisci E-mail"
                        value = {email}
                        onChange = {e => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className={styles.passwordGroup}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Inserisce una Password" 
                        value = { password }
                        onChange = { e => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formConfirmBasicPassword" className={styles.confirmPasswordGroup}>
                    <Form.Label>Conferma Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Conferma Password" 
                        value = { confirmPassword }
                        onChange = { e => setConfirmPassword(e.target.value) }
                    />
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox" className={styles.checkBoxContainer}>
                    <Form.Check 
                        type="checkbox" 
                        label="Creando un account accetti Termini e le condizioni d'uso. Leggi la nostra informativa sulla Privacy e sui Cookie."
                        checked = {check}
                        onChange = {()=> setCheck(!check)} 
                    />
                </Form.Group>

                <div className={styles.buttonContainer}>
                    <Button
                        variant="success" 
                        type="submit" 
                        className={styles.registerButton}
                    >
                        Registra
                    </Button>
                </div>



            </Form>
        </div>
    )
}

export default Register
