import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';
import { loginUser } from '../../../services/LoginService';
import LoggedIn from '../../UI Components/LoggedIn/LoggedIn.component';
import LoggedError from '../../UI Components/LoggedError/LoggedError.component';
// import { addNewOrder } from '../../../services/AddNewOrderService';
// import { getDetailOrder } from '../../../services/UserDetailOrderService';


const Login = (props:any) => {

    const [userName, setUserName] = useState<string>("");

    const [password, setPassword] = useState<string>("");

    const [logged, setLogged] = useState<boolean>(false);

    const [logError, setLogError] = useState<any>(false);


    const user:any = {
        username: userName,
        password: password,
    };

    const login = (el:any) =>{

        loginUser(el)
            .then((data:any)=>{
                console.log(data);
                props.loginUpdate(data);
                if(data.message==="Utente presente"){
                    setLogged(true);
                }else{
                    setLogError(true)
                }
            })

        


    };




    return (
        <div className={styles.loginContainer}>

            <Form className={styles.formContainer}>

                <h2 className={styles.loginTitle}>Accedi</h2>

                <Form.Group controlId="formBasicEmail" className={styles.usernameGroup}>
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder="Inserisci Username" 
                        value = {userName}
                        onChange = { e => setUserName(e.target.value)}
                        autoComplete="off"
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className={styles.passwordGroup}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        value = {password}
                        onChange = { e => setPassword(e.target.value)}
                        autoComplete="off"
                    />
                </Form.Group>
                
                <p className={styles.registrationParagraph}>
                    Prima volta su LabForFood Delivery? 
                    <Link to="/registerPage" className={styles.registrationButton}>
                        Crea un account
                    </Link>
                </p>
                

                <Button 
                    variant="primary" 
                    type="submit" 
                    className={styles.buttonLogin}
                    onClick={(e:any) =>{
                        e.preventDefault();
                        login(user)
                    }}
                >
                    Accedi
                </Button>
            </Form>

            {
                logged ? 
                <LoggedIn /> 
                : 
                null
            }

            {
                logError ? 
                <LoggedError 
                    setLogError = {setLogError} 
                    setUserName = {setUserName}
                    setPassword = {setPassword}
                /> 
                : 
                null
            }

            


        </div>
    )
}

export default Login
