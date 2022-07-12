import styles from './Timer.module.scss';

export default function Timer() {
    return(
        <div className={styles.container}>
            <p className={styles.refresh}>
                Application refresh in
            </p>
            <div className={styles.timer}>
                <h2>
                    600
                </h2>
                <p>
                    seconds
                </p>
            </div>
        </div>
    );
}