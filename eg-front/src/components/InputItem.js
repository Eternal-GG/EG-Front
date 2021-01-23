import React from 'react';
import styles from '../styles/RegisterForm.module.scss';

function InputItem({type, msg, name, placeholder}) {
    return(
        <>
            <input type={type} name={name} className={styles.TextBox} placeholder={placeholder} />
            <span className={styles.validateMessage}>{msg}</span>
        </>
    )
}

export default InputItem;