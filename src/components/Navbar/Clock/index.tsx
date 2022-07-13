import { useEffect, useState } from 'react';
import styles from './Clock.module.scss';

export default function Clock() {
    const [date, setDate] = useState(new Date());

    function clockRefresh() {
        setDate(new Date());
    }

    useEffect(()=> {
        const timer = setInterval(clockRefresh, 1000);
        return function cleanup() {
            clearInterval(timer);
        }
    }, []);


    return(
        <div className={styles.container}>
            <h2>
                {date.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"})}
            </h2>
            <p>
                {date.toLocaleDateString([], { dateStyle: "full"})}
            </p>
        </div>
    );
}