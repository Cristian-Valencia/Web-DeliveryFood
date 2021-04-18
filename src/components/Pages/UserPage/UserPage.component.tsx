import React, { useEffect, useState } from 'react';
import styles from './UserPage.module.css';
import { getUserDetail } from '../../../services/UserService';
import profilePic from '../../../assets/images/profile.jpg';
import { Button } from 'react-bootstrap';
import LogOutMessage from '../../UI Components/LogOut/LogOut.component';

const UserPage = (props:any) => {

    const [userInformation, setUserInformation] = useState<any>({});

    const [logOutStatus, setLogOutStatus] = useState<any>(false)

    useEffect(() => {

        getUserDetail(props.userStatus.user.IdUtente)
            .then((data:any)=>{
                console.log(data);
                setUserInformation(data);
            })

    }, [])

    const logOut = () =>{
        props.loginUpdate({});
        console.log(props.userStatus.user.IdUtente);
        setLogOutStatus(true);
    }

    return (
        <div className={styles.userPageContainer}>

            <div className={styles.userCard}>
                <div className={styles.profileImageContainer}>
                    <div className={styles.profileImageSubContainer}>
                        <img src={profilePic} alt="picture of the user" className={styles.pictureProfile}/>
                    </div>
                </div>
                <div className={styles.informationContainer}>
                    <div className={styles.titleInformation}>
                        <h3>Nome: </h3>
                        <h3>UserName: </h3>
                        <h3>Email: </h3>
                        <h3>Password: </h3>
                    </div>

                        {
                            userInformation !== {} &&
                                <div className={styles.information}>
                                    <p>{userInformation.nominativo}</p>
                                    <p>{userInformation.username}</p>
                                    <p>{userInformation.email}</p>
                                    <p>&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;</p>
                                </div>
                                
                        }

                    <Button onClick={logOut}>Esci</Button>

                    {
                        logOutStatus 
                        ?
                        <LogOutMessage />
                        :
                        null
                    }

                </div>
            </div>
        </div>
    )
}

export default UserPage;
function initialState(initialState: any): [any, any] {
    throw new Error('Function not implemented.');
}

