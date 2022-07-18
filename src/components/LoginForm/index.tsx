import styles from './LoginForm.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../common/Context/User';
import { browserLocalPersistence, onAuthStateChanged, setPersistence, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'firebase-config';
import classNames from 'classnames';
import InputEmailNoValid from 'components/Input/InputMailNoValid';
import InputPassNoValid from 'components/Input/InputPassNoValid';

export default function LoginForm() {
    const navigate = useNavigate();
    const { setUser, email, password, setEmail, setPassword, setError, error } = useContext(UserContext);

    async function login() {
        setPersistence(auth, browserLocalPersistence).then(async ()=> {
            try {
                const user =  await signInWithEmailAndPassword(auth, email, password);
                setEmail('');
                setPassword('');
                console.log(user);
                navigate('/home');
            } catch (error) {
                setError(true);
            }
        })
    }

    onAuthStateChanged(auth, (currentUser) => {
        //localStorage.setItem('user', JSON.stringify(currentUser));
        setUser(currentUser);

    })

    return(
        <form className={styles.form}>
            <h2>Login</h2>
            <InputEmailNoValid/>
            <InputPassNoValid/>
            <div className={classNames({
                [styles.error]: true,
                [styles.errorShow]: error
            })} id="error">
                <span>Ops, usuário ou senha inválidos.</span>
                <span>Tente novamente!</span>
            </div>
            <button className={styles.button} onClick={(event)=> {
                event.preventDefault();
                login();
            }}>
                Continuar
            </button>
            <div className={styles.registerCall}>
                <p>Ainda não possui uma conta? Efetue o <Link to={'/register'} className={styles.link}>Cadastro</Link></p>
            </div>
        </form>
    );
}