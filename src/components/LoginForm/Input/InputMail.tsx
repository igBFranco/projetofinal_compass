import { useContext } from 'react';
import { UserContext } from '../../../common/Context/User';
import styles from './Input.module.scss';
import User from 'assets/icon-user.svg';


export default function InputEmail() {
    const { email, setEmail, setEmailValid } = useContext(UserContext);

    function validate(email: HTMLInputElement) {
        let error = document.getElementById('error')! as HTMLDivElement;

        if(!email.value.includes("@") || !email.value.includes(".com")){
			email.style.border = "1px solid #E9B425";
			error.style.display = "flex";
			setEmailValid(false);
		}else {
			email.style.border = "";
			error.style.display = "none";
			setEmailValid(true);
		}
    }

    return(
        <div className={styles.input}>
            <input type="email" className={styles.inputEmail} value={email} placeholder="Usuário" onChange={(event)=> (
                setEmail(event.target.value),
                validate(event.target)
            )}/>  
            <img src={User} alt="User Icon" className={styles.icon}/>
        </div>
    );
}