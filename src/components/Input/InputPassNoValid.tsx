import styles from './Input.module.scss';
import Password from 'assets/icon-password.svg';
import classNames from 'classnames';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../common/Context/User';

export default function InputPassNoValid() {
    const [iconInside, setIconInside] = useState(false);
    const { password, setPassword, error } = useContext(UserContext);
   

    useEffect(()=> {
        if(password !== ""){
            setIconInside(true);
        }else{
            setIconInside(false);
        }
    }, [password])

    return(
        <div className={styles.input}>
            <input 
                type="password" 
                className={classNames({
                    [styles.inputPass]: true,
                    [styles.inputPassIcon]: iconInside,
                    [styles.inputError]: error
                })} 
                value={password} 
                placeholder="Senha" 
                onChange={(event) => (
                        setPassword(event.target.value)
                       
                )}
            />
            <img src={Password} alt="Password Icon" className={classNames({
                [styles.icon]: true,
                [styles.iconHidden]: iconInside
            })} id={styles.iconPass}/>
        </div>
    );
}