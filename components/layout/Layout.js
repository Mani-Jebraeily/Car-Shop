import Link from 'next/link'
import React from 'react'
import styles from'./layoute.module.css'

function Layout({ children }) {
    return (
        <>
            <header className={styles.header}>
                <Link href="/">
                    <h2>Car Shop</h2>
                    <p>Choose and Buy your Car</p>
                </Link>

            </header>
            <div className={styles.container}> {children}</div>
            <footer  className={styles.footer}>
                <span>
                    <Link href={"https://github.com/Mani-Jebraeily"} target='_blank'>Mani Jebreaily</Link> | Next.js Project 
                </span>
            </footer>
        </>

    )
}

export default Layout