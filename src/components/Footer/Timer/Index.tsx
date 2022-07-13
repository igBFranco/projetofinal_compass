import { useState } from 'react';
import styles from './Timer.module.scss';

export default function Timer() {
    const [count, setCount] = useState<number>(60);

    function counter(time: number = 0) {
        setTimeout(() => {
            if(time > 0) {
                setCount(time - 1);
                return counter(time - 1);
            }else {
                return counter(60);
            }
        }, 1000);
    }

    return(
        <footer className={styles.container} onLoad={()=>counter(count)}>
            <p className={styles.refresh}>
                Application refresh in
            </p>
            <div className={styles.timer}>
                <h2 id="timer">
                    {count}
                </h2>
                <p>
                    seconds
                </p>
            </div>
        </footer>
    );
}