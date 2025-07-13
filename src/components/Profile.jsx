import React from 'react';
import styles from './css/profile.module.css'

export default function Profile({image, name, title, isNew}) {
    return (
        <div className={styles.profile}>
            <img className={styles.photo}
                 src={image}
                 alt="avatar"/>
            {isNew && <span className={styles.tag}>NEW</span>}
            <h1>{name}</h1>
            <p>{title}</p>
        </div>
    );
}
