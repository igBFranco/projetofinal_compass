import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../common/Context/User';
import classNames from 'classnames';
import styles from './Input.module.scss';
import User from 'assets/icon-user.svg';


export default function InputEmail() {
    const [iconInside, setIconInside] = useState(false);
    const { email, setEmail, setEmailValid, errorMail, setErrorMail } = useContext(UserContext);

    function validate(email: HTMLInputElement) {
        let rgex = /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i;

        if(rgex.test(email.value)){
			email.style.border = "";
			setErrorMail(false);
			setEmailValid(true);
		}else {
            email.style.border = "1px solid #E9B425";
			setErrorMail(true);
			setEmailValid(false);
		}
    }

    useEffect(()=> {
        if(email !== ""){
            setIconInside(true);
        }else{
            setIconInside(false);
        }
    }, [email])

    return(
        <div className={styles.input}>
            <input type="email" className={classNames({
                    [styles.inputEmail]: true,
                    [styles.inputUserIcon]: iconInside,
                    [styles.inputError]: errorMail
                })} value={email} placeholder="Usuário" onChange={(event)=> (
                setEmail(event.target.value),
                validate(event.target)
            )}
            />  
            <img src={User} alt="User Icon" className={classNames({
                [styles.icon]: true,
                [styles.iconHidden]: iconInside
            })} id={styles.iconUser}/>
        </div>
    );
}