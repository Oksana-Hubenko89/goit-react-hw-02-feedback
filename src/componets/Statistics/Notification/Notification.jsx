import React from 'react';
import s from './Notification.module.css'

const Notification = ({ children, message }) =>
    
    <div className={s.Block}><header className={s.Message}>{message}</header>{children}</div>

export default Notification; 