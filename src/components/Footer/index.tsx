import styles from './Footer.module.scss';
import Timer from './Timer/Index';

export default function Footer() {
    return(
        <div className={styles.footer}>
            <p>
            Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.
            </p>
            <hr/>
            <Timer/>
        </div>
    );
}