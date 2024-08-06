



import Link from 'next/link';
import React from 'react'
import styles from "./page.module.css";


export default function Blog() {
    return (
        <>
            <div className={styles.container}>
                <h2 className={styles.heading}>All Blogs</h2>

                <div className={styles.blogs}>
                    <div className={styles.blogItems}>
                        <Link href="/blogpost/learn-javascript"><h3>How to learn javascript in 2024.</h3></Link>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis laboriosam adipisci rem porro minima beatae quas eius aliquid sapiente libero!</p>
                    </div>
                    <div className={styles.blogItems}>
                        <h3>How to learn javascript in 2024.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis laboriosam adipisci rem porro minima beatae quas eius aliquid sapiente libero!</p>
                    </div>
                    <div className={styles.blogItems}>
                        <h3>How to learn javascript in 2024.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis laboriosam adipisci rem porro minima beatae quas eius aliquid sapiente libero!</p>
                    </div>
                    <div className={styles.blogItems}>
                        <h3>How to learn javascript in 2024.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis laboriosam adipisci rem porro minima beatae quas eius aliquid sapiente libero!</p>
                    </div>
                    <div className={styles.blogItems}>
                        <h3>How to learn javascript in 2024.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis laboriosam adipisci rem porro minima beatae quas eius aliquid sapiente libero!</p>
                    </div>
                </div>
            </div>
        </>
    )
}




export const metadata = {                           //  we can add this to give specific title and description for every individual page.....
    title: "Blog - Hunting Coder",
    description: "All the blog you need.",
};



