import React, { useEffect } from 'react';
import styles from './ConfirmOrderLoggedIn.module.css';
import { addNewOrder } from '../../../../services/AddNewOrderService';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ConfirmOrderLoggedIn = (props:any) => {

    console.log(props);

    let a = props.cartDetail.cart;

    a.map( (el:any) => {
        return el["P_utente"] = props.userStatus.user.IdUtente
    })

    // console.log(a);

    // console.log(demo);

    // demo.map((el:any) => {
    //     return el["P_utente"] = props.userStatus.user.IdUtente;
    // })



    const addOrder = () =>{
        addNewOrder(a)
            .then((data:any) => {
                props.updateOrder(data.IdOrdine)
                // console.log(props)
            })
    }

    return (
        <div className={styles.confirmOrderContainer}>

            <Form className={styles.formContainer}>

                <Form.Group controlId="formName">
                    <Form.Label>Inserisci Nome</Form.Label>
                    <Form.Control type="text" placeholder="Nome" autoComplete="off" />
                </Form.Group>

                <Form.Group controlId="formLastName">
                    <Form.Label>Inserisci Cognome</Form.Label>
                    <Form.Control type="text" placeholder="Cognome" autoComplete="off" />
                </Form.Group>

                <Form.Group controlId="formAddress">
                    <Form.Label>Inserisci Indirizzo</Form.Label>
                    <Form.Control type="text" placeholder="Indirizzo" autoComplete="off" />
                </Form.Group>

                <Form.Group controlId="formCivicNumber">
                    <Form.Label>Inserisci Numero Civico</Form.Label>
                    <Form.Control type="text" placeholder="Numero Civico" autoComplete="off" />
                </Form.Group>

                <Form.Group controlId="formCity">
                    <Form.Label>Inserisci Città</Form.Label>
                    <Form.Control type="text" placeholder="Città" />
                </Form.Group>

            </Form>

            <div className={styles.sendContainer}>
                
                <Link to="/" className={styles.sendLink} onClick={addOrder} >Invia Ordine</Link>

            </div>

        </div>
    )
}

export default ConfirmOrderLoggedIn;

