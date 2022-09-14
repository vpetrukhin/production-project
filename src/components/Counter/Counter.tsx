import { useState } from 'react';
import styles from './Counter.module.scss';

export const Counter = () => {
    const [counter, setCounter] = useState(0);
    
    const increment = () => setCounter(counter + 1);

    return (
        <>
            <div>{counter}</div>
            <button className={styles.btn} onClick={increment}>increment</button>
        </>
    )
}
