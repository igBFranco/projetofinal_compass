import { auth } from 'firebase-config';
import { signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Timer.module.scss';

export default function Timer() {
    const navigate = useNavigate();
    const [count, setCount] = useState<number>(Number(localStorage.getItem('count')));

    
    useEffect(()=> {
        async function logOut() {
            await signOut(auth);
            navigate('/', {replace: true});
        }
        if(count !== 0) {
            localStorage.setItem('count', count.toString());
            counter(Number(localStorage.getItem('count')));
        }
        if(count === 0) {
            localStorage.setItem('count', count.toString());
            //logOut();
        }
    }, [count, navigate, counter])

    function counter(time: number = 0): any{
        setTimeout(() => {
            if(time > 0) {
                setCount(time - 1);
                return counter(time - 1);
            }else {
                setCount(0);
                return counter(0);
            }
        }, 1000);
    }

    return(
        <section className={styles.container} >
            <p className={styles.refresh}>
                Application refresh in
            </p>
            <div className={styles.timer}>
                <h2 id="timer">
                    {count}
                </h2>
                <p>
                    second{count > 1 ? 's' : ''}
                </p>
            </div>
        </section>
    );
}