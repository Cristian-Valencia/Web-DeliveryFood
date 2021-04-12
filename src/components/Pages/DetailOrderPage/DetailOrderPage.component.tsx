import React, { useEffect } from 'react';
import styles from './DetailOrderPage.module.css';
import { getDetailOrder } from '../../../services/UserDetailOrderService';

const DetailOrderPage = () => {

    useEffect(() => {

        getDetailOrder()
            .then((data:any)=>{
                console.log(data)
            })
        
    }, [])



    return (
        <div>
            
        </div>
    )
}

export default DetailOrderPage;
