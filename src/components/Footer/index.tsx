import styles from './Footer.module.scss';
import Timer from './Timer/Index';
import { useNavigate } from 'react-router-dom';
import { auth } from 'firebase-config';
import { signOut } from 'firebase/auth';
import { useContext } from 'react';
import { UserContext } from 'common/Context/User';

export default function Footer() {
    const navigate = useNavigate();
    const { setEmail, setPassword} = useContext(UserContext);

    async function logOut() {
        setEmail('');
        setPassword('');
        await signOut(auth);
        navigate('/', {replace: true});
    }
    

    return(
        <footer className={styles.footer}>
            <p>
            Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.
            </p>
            <hr/>
            <Timer/>
            <div className={styles.buttons}>
                <div className={styles.next}>
                    <a href="https://google.com" target="_blank" rel="noreferrer">
                        <button className={styles.continueNavigating}>
                            Continuar Navegando
                        </button>
                    </a>
                </div>
                <div className={styles.logout}>
                    <button className={styles.continueNavigating} onClick={()=> {logOut()}}>
                        Logout
                    </button>
                </div>
            </div>
        </footer>
    );
}