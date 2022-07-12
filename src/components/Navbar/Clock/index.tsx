import styles from './Clock.module.scss';

export default function Clock() {
    return(
        <div className={styles.container}>
            <h2>
                11:26
            </h2>
            <p>
                terça-feira, 17 de março de 2020
            </p>
        </div>
    );
}