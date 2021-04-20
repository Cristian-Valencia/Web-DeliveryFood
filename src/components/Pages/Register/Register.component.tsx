import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import styles from './Register.module.css';
import { registerUser } from '../../../services/RegisterService';
import RegisterDone from '../../UI Components/RegisterDone/RegisterDone.component';


const Register = () => {

    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [check, setCheck] = useState<boolean>(false);
    let btn:boolean = true;
    let [registerStatus, setRegisterStatus] = useState(false);

    // queste sono le regular Expression la prima è per la mail e la seconda è per la password

    const re:any = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const strongRegex:any = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

    const user = {
        nominativo : name,
        email: email,
        username: userName,
        password: password
    }

    
    
    const validateForm = () =>{
        if(
            name === "" ||
            name.length === 0 ||
            userName === "" ||
            userName.length === 0 ||
            strongRegex.test(email) ||
            validateEmail() === false ||
            password === "" ||
            password.length === 0 ||
            password !== confirmPassword ||
            confirmPassword === "" ||
            confirmPassword.length === 0 ||
            check === false
        ){
            return true
        }
        else{
            return false
        }
    }

    const validateEmail = ():boolean =>{
        if( 
            email == "" || 
            email == undefined ||
            !re.test(email)
        ){
            return false
        }
        else
        {
            return true
        }
      }

    const postRegister = (user:any) =>{
        registerUser(user)
            .then((data) =>{
                console.log(data)
            })

        setRegisterStatus(true)
    }


    

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
                        autoComplete="off"
                    />
                </Form.Group>

                <Form.Group controlId="formBasicUserName" className={styles.usernameContainer}>
                    <Form.Label>UserName</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Inserisci Username" 
                        value = {userName}  
                        onChange = {e => setUserName(e.target.value)}
                        autoComplete="off"
                    />
                </Form.Group>

                <Form.Group controlId="formBasicEmail" className={styles.emailContainer}>
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Inserisci E-mail"
                        value = {email}
                        onChange = {e => setEmail(e.target.value)}
                        autoComplete="off"
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className={styles.passwordGroup}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Inserisce una Password" 
                        value = { password }
                        onChange = { e => setPassword(e.target.value)}
                        autoComplete="off"
                    />
                </Form.Group>

                <Form.Group controlId="formConfirmBasicPassword" className={styles.confirmPasswordGroup}>
                    <Form.Label>Conferma Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Conferma Password" 
                        value = { confirmPassword }
                        onChange = { e => setConfirmPassword(e.target.value) }
                        autoComplete="off"
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
                        disabled={validateForm()}
                        onClick={(e:any) => { 
                            e.preventDefault()
                            postRegister(user)
                        }
                        }
                    >
                        Registra
                    </Button>
                </div>



            </Form>


            {
                registerStatus

                ?

                <RegisterDone />

                :

                null
            }


        </div>
    )
}

export default Register
