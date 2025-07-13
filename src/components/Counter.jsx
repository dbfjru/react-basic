import React, {useState} from 'react';
import styles from './css/counter.module.css'

const Counter = () => {
    // let num = 0;
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }
    return (
        <div className={styles.counter}>
            <span className={styles.number}>{count}</span>
            <button className={styles.button} onClick={handleClick}>
                Add +
            </button>
        </div>
    );
};

export default Counter;

/*
* let 을 활용하여 num값을 변경하더라도 화면이 재 렌더링 되지 않음
* 화면을 재렌더링 하기 위해선 UseState를 활용해야함
* */