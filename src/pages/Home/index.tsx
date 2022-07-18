import { UserContext } from 'common/Context/User';
import { auth } from 'firebase-config';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import styles from './Home.module.scss'

export default function Home() {
    //const user = auth.currentUser;
    const navigate = useNavigate();
    const { user, setUser, setEmail, setPassword } = useContext(UserContext);

    async function logOut() {
        setEmail('');
        setPassword('');
        await signOut(auth);
        navigate('/', {replace: true});
    }
    
    useEffect(()=> {
        let userInfo = localStorage.getItem('firebase:authUser:AIzaSyBwWKyBzBe_OpM9Es0Md2RLTKwbfPQ1-8c:[DEFAULT]');

        // if(userInfo === null) {
        //     logOut();
        // }
        
        if(user === null ) {
            navigate('/', {replace: true});
        }

        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        
    }, [user, navigate, setUser, setEmail, setPassword])

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