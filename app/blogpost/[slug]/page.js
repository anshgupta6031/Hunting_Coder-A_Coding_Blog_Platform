"use client"



import React, { useEffect, useState } from 'react'
import styles from "./page.module.css"


export default function Page({ params }) {

    const [blog, setBlog] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3000/api/getblog/${params.slug}`)
            .then((a) => { return a.json() })
            .then((data) => { setBlog(data) })
    }, [])

    return (
        <>
            <div className={styles.container}>
                <h2 className={styles.heading}>Title : {blog.title}</h2>
                <div className={styles.content}>{blog.content}</div>
            </div>
        </>
    )
}



