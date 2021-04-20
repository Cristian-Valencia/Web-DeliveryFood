import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getUrserOrder } from '../../../../services/UserOrderService';
import styles from './OrderLoggedIn.module.css';

const OrderLoggedIn = (props:any) => {

    const [order, setOrder] = useState([])

    

    const control = (e:any) =>{
        // console.log(e.IdOrdine);
        props.updateIdOrder(e.IdOrdine)
    }



    useEffect(() => {
        getUrserOrder(props.userStatus.user.IdUtente)
            .then((data:any)=>{
                // console.log(data);
                setOrder(data);
            })

        // console.log(props)
        
    }, [])
    
    return (
        <div>
            {
                order &&
                    order.map((el:any)=>{
                        return <Link to="detailOrderPage" key={el.IdOrdine} className={styles.orderCard} onClick={()=>control(el)}>

                                    <div className={styles.orderTitle}>
                                        <h3>Ordine #{el.IdOrdine}</h3>
                                        <h3>{el.Ristorante}</h3>
                                    </div>

                                    <div className={styles.titleInformationContainer}>

                                        {/* <h3>Indirizzo:</h3> */}

                                        <h3>Costi di Consegna:</h3>
                                        
                                        <h3>Tempo di consegna:</h3>

                                        <h3>Data Ordine:</h3>
                                        
                                    </div>

                                    <div className={styles.informationContainer}>

                                        {/* <h2>{el.IndirizzoConsegna}</h2> */}

                                        {
                                                el.CostiConsegna.includes('.') ?
                                                <h2>{el.CostiConsegna}0 €</h2>
                                                :
                                                <h2>{el.CostiConsegna} €</h2>
                                        }

                                        {/* <h2>{el.CostiConsegna}0 €</h2> */}

                                        <h2>{el.TempiConsegna} m</h2>

                                        <h2>{el.DataOrdine}</h2>

                                    </div>


                               </Link>
                    })
            }

        </div>
    )
}

export default OrderLoggedIn
