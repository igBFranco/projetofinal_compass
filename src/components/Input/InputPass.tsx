import styles from './Input.module.scss';
import Password from 'assets/icon-password.svg';
import classNames from 'classnames';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../common/Context/User';
import { PasswordContext } from 'common/Context/Password';

export default function InputPass() {
    const [iconInside, setIconInside] = useState(false);
    const { password, setPassword, setPassValid } = useContext(UserContext);
    const { sixChar, setSixChar, lowerCase, setLowerCase, upperCase, setUpperCase, passNumber, setPassNumber } = useContext(PasswordContext);

    function validate(password: HTMLInputElement) {
        let error = document.getElementById("error")! as HTMLDivElement;

        let rgex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/;
        let charQtd = /^.{6,}$/;
        let charLower = /^.*[a-z].*$/;
        let charUpper = /^.*[A-Z].*$/;
        let num = /^.*[0-9].*$/;

        if(charLower.test(password.value)) {
            setLowerCase(true);
        }else {
            setLowerCase(false);
        }

        if(charQtd.test(password.value)) {
            setSixChar(true);
        }else {
            setSixChar(false);
        }


        if(charUpper.test(password.value)) {
            setUpperCase(true);
        }else {
            setUpperCase(false);
        }

        if(num.test(password.value)) {
            setPassNumber(true);
        }else {
            setPassNumber(false);
        }

        if (rgex.test(password.value)) {
            password.style.border = "";
            error.style.display = "none";
            setPassValid(true);
            
        } else {
            password.style.border = "1px solid #E9B425";
            error.style.display = "flex";
            setPassValid(false);
        }
    }

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
                    [styles.inputPassIcon]: iconInside
                })} 
                value={password} 
                placeholder="Senha" 
                onChange={(event) => (
                        setPassword(event.target.value),
                        validate(event.target)
                )}
            />
            <img src={Password} alt="Password Icon" className={classNames({
                [styles.icon]: true,
                [styles.iconHidden]: iconInside
            })} id={styles.iconPass}/>
        </div>
    );
}