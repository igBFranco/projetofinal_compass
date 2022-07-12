import styles from './LoginForm.module.scss';

export default function LoginForm() {
    return(
        <div>
            <input type="email" className={styles.input} placeholder="Usuário"/>
            <input type="password" className={styles.input} placeholder="Senha"/>
        </div>
    );
}