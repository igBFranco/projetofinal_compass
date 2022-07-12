import styles from './Weather.module.scss';
import cloud from 'assets/cloud.svg';

export default function Weather() {
    return(
        <div className={styles.container}>
            <h3>
                Itaiópolis - SC
            </h3>
            <div className={styles.temp}>
                <img src={cloud} alt="Cloud" />
                <h2>
                    22º
                </h2>
            </div>
        </div>
    );
}