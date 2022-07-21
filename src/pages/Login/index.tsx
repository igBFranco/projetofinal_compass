import styles from './LoginPageLayout.module.scss';
import logo from 'assets/logo.png';
import { Outlet, useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { UserContext } from 'common/Context/User';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from 'firebase-config';

export default function LoginPageLayout() {
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
    
    useEffect(()=> {
        // if(user !== null ) {
        //     navigate('/home', {replace: true});
        // }

        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            localStorage.setItem('user', user);
        })
    }, [navigate, setUser, user]);

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