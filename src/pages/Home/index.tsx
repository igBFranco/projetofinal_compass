import { auth } from 'firebase-config';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import styles from './Home.module.scss'

export default function Home() {
    const user = auth.currentUser;
    const navigate = useNavigate();
    
    useEffect(()=> {
        if(user === null) {
            navigate('/', {replace: true});
        }
    }, [user, navigate])

    return(
        <div className={styles.container}>
            <Navbar/>
            <div className={styles.content}>
                <h2>
                    Our mission is
                </h2>
                <p>
                    Nossa missão é
                </p>
                <h1>
                    to transform the world
                </h1>
                <p>
                    transformar o mundo
                </p>
                <h1>
                    building digital experiences
                </h1>
                <p>
                    construindo experiências digitais
                </p>
                <h1>
                    to enable our client's growth
                </h1>
                <p>
                    que permitam o crescimento dos nossos clientes
                </p>
            </div>
            <Footer/>
        </div>
    );
}