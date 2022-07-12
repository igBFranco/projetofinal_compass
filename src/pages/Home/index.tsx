import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import styles from './Home.module.scss'

export default function Home() {
    return(
        <div className={styles.container}>
            <Navbar/>
            <Footer/>
        </div>
    );
}