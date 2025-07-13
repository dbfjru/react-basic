import React from 'react';
import styles from './css/profile.module.css'

export default function Profile({image, name, title}) {
    return (
        <div className={styles.profile}>
            <img className={styles.photo}
                 src={image}
                 alt="avatar"/>
            <h1>{name}</h1>
            <p>{title}</p>
        </div>
    );
}
