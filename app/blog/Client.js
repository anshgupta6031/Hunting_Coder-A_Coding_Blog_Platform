"use client"



import Link from 'next/link';
import React, { useState } from 'react'
import styles from "./page.module.css";


export default function Blog(props) {

    const [blogs, setBlogs] = useState(props.allBlogs)

    return (
        <>
            <div className={styles.container}>
                <h2 className={styles.heading}>All Blogs</h2>

                <div className={styles.blogs}>

                    {blogs.map((blog) => {
                        return <div className={styles.blogItems} key={blog.slug}>
                            <Link href={`/blogpost/${blog.slug}`}><h3>{blog.title}</h3></Link>
                            <p className={styles.paragraph}>{blog.content.substr(0, 400) + " ..."}</p>
                        </div>
                    })}

                </div>
            </div>
        </>
    )
}








