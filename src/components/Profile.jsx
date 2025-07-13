import React from 'react';
import styles from './css/profile.module.css'
import Avatar from "./Avatar.jsx";

export default function Profile({image, name, title, isNew}) {
    return (
        <div className={styles.profile}>
            <Avatar url={image} isNew={isNew}/>
            <h1>{name}</h1>
            <p>{title}</p>
        </div>
    );
}
