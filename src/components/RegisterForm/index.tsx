import InputEmail from '../Input/InputMail';
import InputPass from '../Input/InputPass';
import styles from './RegisterForm.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../common/Context/User';
import { browserLocalPersistence, createUserWithEmailAndPassword, onAuthStateChanged, setPersistence } from 'firebase/auth';
import { auth } from 'firebase-config';
import Check from "assets/check.svg";
import Close from "assets/close.svg";
import classNames from 'classnames';
import { PasswordContext } from 'common/Context/Password';

export default function RegisterForm() {
    const navigate = useNavigate();
    const { email, password, emailValid, passValid, setUser, setError } = useContext(UserContext);
    const { sixChar, lowerCase, upperCase, passNumber } = useContext(PasswordContext);

    async function register() {
        setPersistence(auth, browserLocalPersistence).then(async ()=> {
        try {
            const user =  await createUserWithEmailAndPassword(auth, email, password);
            console.log(user);
            navigate('/home');
        } catch (error: any) {
            setError(true);
        }
        })
    }

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })
    

    return(
        <form className={styles.form}>
            <h2>Cadastro</h2>
            <InputEmail/>
            <InputPass/>
            <div className={styles.validation} id="validation">
                <h3>A senha deve possuir:</h3>
                <div className={styles.validationCase}>
                    <span className={classNames({
                        [styles.spanOk]: sixChar
                    })}>Mínimo de 6 caracteres</span>
                    <img src={Check} alt="OK" className={classNames({
                        [styles.okHidden]: true,
                        [styles.ok]: sixChar
                    })}/>
                    <img src={Close} alt="Error" className={classNames({
                        [styles.validationError]: true,
                        [styles.validationErrorHidden]: sixChar
                    })}/>
                </div>
                <div className={styles.validationCase}>
                    <span className={classNames({
                        [styles.spanOk]: lowerCase
                    })}>Pelo menos uma letra minúscula</span>
                    <img src={Check} alt="OK" className={classNames({
                        [styles.okHidden]: true,
                        [styles.ok]: lowerCase
                    })}/>
                    <img src={Close} alt="Error" className={classNames({
                        [styles.validationError]: true,
                        [styles.validationErrorHidden]: lowerCase
                    })}/>
                </div>
                <div className={styles.validationCase}>
                    <span className={classNames({
                        [styles.spanOk]: upperCase
                    })}>Pelo menos uma letra maiúscula</span>
                    <img src={Check} alt="OK" className={classNames({
                        [styles.okHidden]: true,
                        [styles.ok]: upperCase
                    })}/>
                    <img src={Close} alt="Error" className={classNames({
                        [styles.validationError]: true,
                        [styles.validationErrorHidden]: upperCase
                    })}/>
                </div>
                <div className={styles.validationCase}>
                    <span className={classNames({
                        [styles.spanOk]: passNumber
                    })}>Pelo menos um número</span>
                    <img src={Check} alt="OK" className={classNames({
                        [styles.okHidden]: true,
                        [styles.ok]: passNumber
                    })}/>
                    <img src={Close} alt="Error" className={classNames({
                        [styles.validationError]: true,
                        [styles.validationErrorHidden]: passNumber
                    })}/>
                </div>
            </div>
            <div className={styles.error} id="error">
                <span>Ops, usuário ou senha inválidos.</span>
                <span>Tente novamente!</span>
            </div>
            <button className={styles.button} onClick={(event)=> {
                event.preventDefault();
                if(emailValid && passValid){
                    register();
                }
            }}>
                Continuar
            </button>
            <div className={styles.loginCall}>
                <p>Já possui uma conta? Efetue o <Link to={'/'} className={styles.link}>Login</Link></p>
            </div>
        </form>
    );
}