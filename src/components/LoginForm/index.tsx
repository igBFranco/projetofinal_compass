import styles from './LoginForm.module.scss';

export default function LoginForm() {
    return(
        <div className={styles.form}>
            <h2>Login</h2>
            <input type="email" className={styles.inputEmail} placeholder="Usuário"/>  
            <input type="password" className={styles.inputPass} placeholder="Senha"/>
            <button className={styles.button}>
                Continuar
            </button>
        </div>
    );
}