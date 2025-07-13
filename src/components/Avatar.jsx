import React from 'react';
import styles from './css/profile.module.css'

const Avatar = ({url, isNew}) => {
    return (
        <div className={styles.avatar}>
            <img className={styles.photo} src={url} alt="avatar"/>
            {isNew && <span className={styles.tag}>NEW</span>}
        </div>
    );
};

export default Avatar;