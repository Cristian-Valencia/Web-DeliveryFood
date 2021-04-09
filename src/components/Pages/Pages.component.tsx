import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error from './Error/Error.component';
import Home from './Home/Home.component';
import Restaurants from './Restaurants/Restaurants.container';
import SelectedRestaurant from './SelectedRestaurant/SelectedRestaurant.container';
import styles from './Pages.module.css' 
import Login from './Login/Login.component';
import Register from './Register/Register.component';

const Pages = () => {
    return (
        <div className={styles.pagesContainer}>
            <Switch>
          
                <Route exact path="/">
                    <Home />
                </Route>

                <Route exact path="/restaurants">
                    <Restaurants />
                </Route>

                <Route exact path="/selectedRestaurant">
                    <SelectedRestaurant />
                </Route>

                <Route exact path="/login">
                    <Login />
                </Route>

                <Route exact path="/registerPage">
                    <Register />
                </Route>

                <Route exact path="/*">
                    <Error />
                </Route>

            </Switch>
        </div>
    )
}

export default Pages
