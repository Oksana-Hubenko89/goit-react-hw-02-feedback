import React from 'react';
import s from './Section.module.css';

const Section = ({ title, children }) =>
    
    <section className={s.Section}><header className={s.Title}>{title}</header>{children}</section>;

export default Section;