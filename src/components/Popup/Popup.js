import React from 'react'
import clsx from 'clsx'

import styles from './Popup.module.css'


function Popup({ trigger, message }) {
    return trigger ?
        <div className={clsx(styles.popupWrapper)}>
            <div className={clsx(styles.popupInner)}>
                <i className={clsx(styles.popupIcon, "far", "fa-check-circle")}></i>
                <h1 className={clsx(styles.popupMessage)}>{message}</h1>
            </div>
        </div> : "";
}

export default Popup
