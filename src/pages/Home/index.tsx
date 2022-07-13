import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import styles from './Home.module.scss'

export default function Home() {
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
                    que permitao o crescimento dos nossos clientes
                </p>
            </div>
            <Footer/>
        </div>
    );
}