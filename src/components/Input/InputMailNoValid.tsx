import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../common/Context/User';
import classNames from 'classnames';
import styles from './Input.module.scss';
import User from 'assets/icon-user.svg';


export default function InputEmailNoValid() {
    const [iconInside, setIconInside] = useState(false);
    const { email, setEmail, setEmailValid, error, setError } = useContext(UserContext);


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
                    [styles.inputError]: error
                })} value={email} placeholder="Usuário" onChange={(event)=> (
                setEmail(event.target.value)
            )}
            />  
            <img src={User} alt="User Icon" className={classNames({
                [styles.icon]: true,
                [styles.iconHidden]: iconInside
            })} id={styles.iconUser}/>
        </div>
    );
}