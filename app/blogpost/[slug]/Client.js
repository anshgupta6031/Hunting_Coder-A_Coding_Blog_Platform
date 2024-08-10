"use client"



import React, { useState } from 'react'
import styles from "./page.module.css"


export default function Page(props) {

    const [blog, setBlog] = useState(props.blog)

    return (
        <>
            <div className={styles.container}>
                <h2 className={styles.heading}>Title : {blog.title}</h2>
                <div className={styles.content}>{blog.content}</div>
            </div>
        </>
    )
}



