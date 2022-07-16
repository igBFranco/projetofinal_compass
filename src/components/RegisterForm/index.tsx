import InputEmail from '../Input/InputMail';
import InputPass from '../Input/InputPass';
import styles from './RegisterForm.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../common/Context/User';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from 'firebase-config';

export default function RegisterForm() {
    const navigate = useNavigate();
    const { email, password, emailValid, passValid, user, setUser } = useContext(UserContext);

    async function register() {
        try {
            const user =  await createUserWithEmailAndPassword(auth, email, password);
            console.log(user);
            navigate('/home');
        } catch (error: any) {
            console.log(error.message);
        }
    }

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })
    

    return(
        <form className={styles.form}>
            <h2>Cadastro</h2>
            <InputEmail/>
            <InputPass/>
            <div className={styles.error} id="error">
                <span>Ops, usuário ou senha inválidos.</span>
                <span>Tente novamente!</span>
            </div>
            <button className={styles.button} onClick={(event)=> {
                event.preventDefault();
                //if(emailValid && passValid){
                    register();
               // }
            }}>
                Continuar
            </button>
            <div>
                <p>Já possui uma conta? Efetue o <Link to={'/'}>Login</Link></p>
            </div>
        </form>
    );
}