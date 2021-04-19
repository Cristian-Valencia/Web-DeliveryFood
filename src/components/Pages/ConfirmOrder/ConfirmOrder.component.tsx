import React from 'react';
import styles from './ConfirmOrder.module.css';
import ConfirmOrderLoggedOut from './ConfirmOrderLoggedOut/ConfirmOrderLoggedOut.component';
import ConfirmOrderLoggedIn from './ConfirmOrderLoggedIn/ConfirmLoggedIn.container';

const ConfirmOrder = (props:any) => {



    return (
        <div>

            {
                
                props.userStatus.user.IdUtente 
                ?
                <ConfirmOrderLoggedIn />
                :
                <ConfirmOrderLoggedOut />

            }
            
        </div>
    )
}

export default ConfirmOrder;
