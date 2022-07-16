import InputEmail from '../Input/InputMail';
import InputPass from '../Input/InputPass';
import styles from './LoginForm.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../common/Context/User';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'firebase-config';

export default function LoginForm() {
    const navigate = useNavigate();
    const { emailValid, passValid, setUser, email, password, setEmail, setPassword } = useContext(UserContext);

    async function login() {
        try {
            const user =  await signInWithEmailAndPassword(auth, email, password);
            setEmail('');
            setPassword('');
            console.log(user);
            navigate('/home');
        } catch (error) {
            console.log(error);
        }
    }

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);

    })

    return(
        <form className={styles.form}>
            <h2>Login</h2>
            <InputEmail/>
            <InputPass/>
            <div className={styles.error} id="error">
                <span>Ops, usuário ou senha inválidos.</span>
                <span>Tente novamente!</span>
            </div>
            <button className={styles.button} onClick={(event)=> {
                event.preventDefault();
                login();
                if(emailValid && passValid){
                }
            }}>
                Continuar
            </button>
            <div>
                <p>Ainda não possui uma conta? Efetue o <Link to={'/register'}>Cadastro</Link></p>
            </div>
        </form>
    );
}