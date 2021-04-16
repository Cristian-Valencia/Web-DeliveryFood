import React, { useEffect, useState } from 'react';
import styles from './DetailOrderPage.module.css';
import { getDetailOrder } from '../../../services/UserDetailOrderService';

const DetailOrderPage = () => {

    const [detailOrder, setDetailOrder] = useState<any>([]);

    const [quantityOrder, setQuantityOrder] = useState<any>([]);

    let totale:any = [];

    let number:any;

    let [totNumber, setTotNumber] = useState(0);

    useEffect(() => {

        getDetailOrder()
            .then((data:any)=>{
                console.log(data)
                setDetailOrder(data);
                setQuantityOrder(data);
            })
        
    }, [])

    const quantita = (e:any) =>{
        return quantityOrder.filter((product:any)=>{ return e === product }).length;
    }

    const addOnCart = (e:any) =>{
        setQuantityOrder([...quantityOrder,e]);

        totale.push(e.Prezzo)
    }

    const removeFromCart = (e:any) =>{

        let a = quantityOrder.filter((el:any)=> el=== e).splice(1);

        let b = quantityOrder.filter((el:any)=> el!== e);

        setQuantityOrder([...a,...b])


    }


    detailOrder.map((el:any) => {

        let a = quantityOrder.filter((e:any)=> el=== e).length;

        let b = el.Prezzo;

        let c = a*b;

        totale.push(c)

    })

    const sum = (total:any, sum:any) =>{
        return total + sum 
    }

    useEffect(() => {

        if (totale.length > 0){
            number = totale.reduce(sum)
        }

        setTotNumber(number)
            

    }, [totale])



    const demoCheck = () =>{
        console.log(totNumber)
    }

    return (
        <div className={styles.detailOrderContainer}>

            {
                detailOrder &&
                    detailOrder.map((el:any, i:number)=>{
                        return <div key={i} className={styles.productContainer}>

                                    <div className={styles.productInformationContainer}>

                                        <h3 className={styles.productName}>{el.Prodotto}</h3>

                                        <p className={styles.descriptionProduct}>{el.Descrizione}</p>

                                        <h3 className={styles.price}>{el.Prezzo}€</h3>

                                    </div>

                                    <div className={styles.quantityContainer}>

                                        <div className={styles.addButton} onClick={()=> addOnCart(el)}>+</div>

                                            <p className={styles.quantity} onClick={demoCheck}>
                                                {
                                                    quantita(el)
                                                }
                                            </p>

                                        <div className={styles.removebutton} onClick={() => removeFromCart(el)}>-</div>

                                    </div>

                               </div>
                    })
            }

            <div className={styles.totalContainer}>

                <h3 className={styles.totalTitle}>Totale</h3>

                <h3 className={styles.totalNumber}>{ totNumber }</h3>

            </div>
            
        </div>
    )
}

export default DetailOrderPage;
