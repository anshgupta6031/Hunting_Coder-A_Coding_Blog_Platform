"use client"



import Script from 'next/script'
import React, { useState } from 'react'
import styles from "./page.module.css"


export default function Contact() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [description, setDescription] = useState("")


    const handleSubmit = async (e)=>{
        e.preventDefault()

        const data = {name, email, phone, description}

        await fetch("http://localhost:3000/api/postcontact", {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify(data)
        })

        alert("Concern raised successfully...")

        setName("")
        setEmail("")
        setPhone("")
        setDescription("")
    }

    const handleChange = (e)=>{
        if(e.target.name === "name") setName(e.target.value)
        if(e.target.name === "email") setEmail(e.target.value)
        if(e.target.name === "phone") setPhone(e.target.value)
        if(e.target.name === "description") setDescription(e.target.value)
    }

    return (
        <div className={styles.container}>
            {/* <Script strategy='lazyOnload'>
                {`
                    alert("welcome to contacts")
                `}
            </Script> */}

            <h1 className={styles.heading}>Contact Us</h1>

            <form onSubmit={handleSubmit}>
                <div className={styles.mb3}>
                    <label htmlFor="name" className={styles.formlabel}>Name </label>
                    <input type="text" id="name" name='name' onChange={handleChange} value={name} aria-describedby="emailHelp" />
                </div>

                <div className={styles.mb3}>
                    <label htmlFor="email" className={styles.formlabel}>Email address </label>
                    <input type="email" id="email" name='email' onChange={handleChange} value={email} aria-describedby="emailHelp" />
                </div>

                <div className={styles.mb3}>
                    <label htmlFor="phone" className={styles.formlabel}>Phone No. </label>
                    <input type="number" id="phone" name='phone' onChange={handleChange} value={phone} aria-describedby="emailHelp" />
                </div>

                <div className={styles.mb3}>
                    <label className={styles.formlabel} htmlFor="description">Elaborate Your Concern : </label>
                    <textarea className={styles.textarea} onChange={handleChange} value={description} placeholder="Write your concern here." id="description" name='description'></textarea>
                </div>

                <button type="submit" className={styles.btn}>Submit</button>
            </form>
        </div>
    )
}




// export const metadata = {                           //  we can add this to give specific title and description for every individual page.....
//     title: "Contacts - Hunting Coder",
//     description: "How you can reach us.",
// }



