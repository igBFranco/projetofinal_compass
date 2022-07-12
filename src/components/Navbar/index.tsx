import styles from './Navbar.module.scss';
import logo from 'assets/logo2.svg';
import Clock from './Clock';
import Weather from './Weather';


export default function Navbar() {
    return(
        <div className={styles.container}>
            <img src={logo} alt="Logo Compass" />
            <Clock/>
            <Weather/>
        </div>
    );
}