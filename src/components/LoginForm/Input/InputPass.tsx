import styles from './Input.module.scss';
import Password from 'assets/icon-password.svg';
import { useContext } from 'react';
import { UserContext } from '../../../common/Context/User';

export default function InputPass() {
    const { password, setPassword, setPassValid } = useContext(UserContext);

    function validate(password: HTMLInputElement) {
        let error = document.getElementById("error")! as HTMLDivElement;

        if (password.value.length < 6) {
            password.style.border = "1px solid #E9B425";
            error.style.display = "flex";
            setPassValid(false);
        } else {
            password.style.border = "";
            error.style.display = "none";
            setPassValid(true);
        }
    }

    return(
        <div className={styles.input}>
            <input type="password" className={styles.inputPass} value={password} placeholder="Senha" onChange={(event) => (
                        setPassword(event.target.value),
                        validate(event.target)
                    )}/>
            <img src={Password} alt="Password Icon" className={styles.icon}/>
        </div>
    );
}