import { Fragment } from 'react';
import menuImage from '../../Assets/menu.jpeg';
import classes from './Header.module.css';
const Header = (props) => {
    return <Fragment>
        <header className={classes.header}>
            <h2>Fill Your Appetiet</h2>
            <h3>Your Cart</h3>
        </header>
        <div className={classes.image}>
            <img src={menuImage} alt="Fill your Appetiet"/>
        </div>
    </Fragment>
}; 

 export default Header;