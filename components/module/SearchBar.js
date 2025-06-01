import { useState } from 'react'
import styles from './SearchBar.module.css'
import { useRouter } from 'next/router'

function SearchBar() {
    const router=useRouter()

    const [min, setMin] = useState("")
    const [max, setMax] = useState("")

    const searchHandeler = () => {
        if (min && max) {
            router.push(`/filter/${min}/${max}`)

        } else {
            alert("Please Enter minimum and maximum price!")
        }

    }
    return (
        <div className={styles.container}>
            <div>
                <input placeholder='Inter min-price' type='Number' value={min} onChange={(e) => setMin(e.target.value)} />
                <input placeholder='Inter max-price' type='Number' value={max} onChange={(e) => setMax(e.target.value)} />
            </div>
            <button onClick={searchHandeler}>Search</button>

        </div>
    )
}

export default SearchBar