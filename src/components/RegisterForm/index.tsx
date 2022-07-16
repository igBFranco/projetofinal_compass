import InputEmail from '../Input/InputMail';
import InputPass from '../Input/InputPass';
import styles from './RegisterForm.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../common/Context/User';

export default function RegisterForm() {
    const navigate = useNavigate();
    const { emailValid, passValid } = useContext(UserContext);

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
                if(emailValid && passValid){
                    navigate('/home');
                }
            }}>
                Continuar
            </button>
            <div>
                <p>Já possui uma conta? Efetue o <Link to={'/'}>Login</Link></p>
            </div>
        </form>
    );
}