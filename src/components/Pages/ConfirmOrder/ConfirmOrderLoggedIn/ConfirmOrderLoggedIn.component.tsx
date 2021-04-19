import React from 'react';
import styles from './ConfirmOrderLoggedIn.module.css';
import { addNewOrder } from '../../../../services/AddNewOrderService';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ConfirmOrderLoggedIn = (props:any) => {

    console.log(props)

    return (
        <div className={styles.confirmOrderContainer}>

            <Form className={styles.formContainer}>

                <Form.Group controlId="formName">
                    <Form.Label>Inserisci Nome</Form.Label>
                    <Form.Control type="text" placeholder="Nome" />
                </Form.Group>

                <Form.Group controlId="formLastName">
                    <Form.Label>Inserisci Cognome</Form.Label>
                    <Form.Control type="text" placeholder="Cognome" />
                </Form.Group>

                <Form.Group controlId="formAddress">
                    <Form.Label>Inserisci Indirizzo</Form.Label>
                    <Form.Control type="text" placeholder="Indirizzo" />
                </Form.Group>

                <Form.Group controlId="formCivicNumber">
                    <Form.Label>Inserisci Numero Civico</Form.Label>
                    <Form.Control type="text" placeholder="Numero Civico" />
                </Form.Group>

                <Form.Group controlId="formCity">
                    <Form.Label>Inserisci Città</Form.Label>
                    <Form.Control type="text" placeholder="Città" />
                </Form.Group>

            </Form>

            <div className={styles.sendContainer}>
                
                <Link to="/" className={styles.sendLink}>Invia Ordine</Link>

            </div>

        </div>
    )
}

export default ConfirmOrderLoggedIn;
