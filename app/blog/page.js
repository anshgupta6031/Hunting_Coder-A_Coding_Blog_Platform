"use client"



import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import styles from "./page.module.css";


export default function Blog() {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/api/blogs")
            .then((a) => { return a.json() })
            .then((data) => { setBlogs(data) })
    }, [])

    return (
        <>
            <div className={styles.container}>
                <h2 className={styles.heading}>All Blogs</h2>

                <div className={styles.blogs}>

                    {blogs.map((blog) => {
                        return <div className={styles.blogItems} key={blog.slug}>
                            <Link href={`/blogpost/${blog.slug}`}><h3>{blog.title}</h3></Link>
                            <p className={styles.paragraph}>{blog.content.substr(0,400) + " ..."}</p>
                        </div>
                    })}

                </div>
            </div>
        </>
    )
}




// export const metadata = {                           //  we can add this to give specific title and description for every individual page.....
//     title: "Blog - Hunting Coder",
//     description: "All the blog you need.",
// };



