import styles from './LoginForm.module.scss';

export default function LoginForm() {
    return(
        <form className={styles.form}>
            <h2>Login</h2>
            <input type="email" className={styles.inputEmail} placeholder="Usuário" id='mail'/>  
            <input type="password" className={styles.inputPass} placeholder="Senha" id='pass'/>
            <span className={styles.span}>Ops, usuário ou senha inválidos.</span>
            <span className={styles.span}>Tente novamente!</span>
            <button className={styles.button} onDoubleClick={()=> {
                let mail = document.getElementById('mail');
                let pass = document.getElementById('pass');


            }}>
                Continuar
            </button>
        </form>
    );
}