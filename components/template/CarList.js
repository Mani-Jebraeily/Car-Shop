import React from 'react'
import styles from "./CarList.module.css"
import { useRouter } from 'next/router'
import Back from '../icons/Back';
import Card from '../module/Card';

function CarList({ data }) {

    const backHandler = () => {
        router.back();
    };
    const router = useRouter()
    return (
        <div className={styles.container}>
            <div className={styles.back} onClick={backHandler}>
                <Back/>
                <p>Back</p>

            </div>

            <div className={styles.cards}>
                {data.map((item) => (
                    <Card key={item.id} {...item} />
                ))}
            </div>

        </div>
    )
}

export default CarList