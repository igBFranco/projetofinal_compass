import styles from './LoginPageLayout.module.scss';
import logo from 'assets/logo.png';
import { Outlet } from 'react-router-dom';

export default function LoginPageLayout() {
    return(
        <div className={styles.container}>
            <div className={styles.login}>
                <p className={styles.greeting}>Olá, </p>
                <div className={styles.instructions}>
                    <p>
                        Para continuar navegando de forma segura, efetue o login na rede.
                    </p>
                </div>
                <Outlet/>
            </div>
            <div className={styles.banner}>
                <img src={logo} alt="Logo Compasso" className={styles.logo}/>
            </div>
        </div>
    );
}