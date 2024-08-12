



import React from 'react'
import styles from "./page.module.css"


export default function About() {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>About Hunting Coder</h1>

            <h2 className={styles.subheading}>Introduction</h2>
            <p className={styles.para}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore velit repudiandae ut voluptates ad expedita temporibus incidunt quod quidem dolor. Eos iure sint ut fuga quibusdam velit in, reiciendis nisi quia architecto, optio dolore laboriosam numquam, cumque voluptats illo maiores, impedit possimus, eum quisqua </p>

            <h2 className={styles.subheading}>Services Offered</h2>
            <p className={styles.para}>Lorelore laboriosam numquam, cumque voluptatum sapiente nemo aperiam voluptate nulla. Quas nostrum ratione cumque. Provident eligendi tempore, unde voluptates illo maiores, impedit possimus, eum quisquam enim necessitatibus consequuntur perferendis deserunt quod asperiores modi ducimus laboriosam. Officia, alias! Molestiae voluptatem delectus, a quisquam iste nihil itaque ex nam maxime sit sapiente cumque omnis magnam asperiores numquam, nemo temporibus quam nesciunt laborum quas nostrum. Voluptate, itaque? Dignissimos, provident unde architecto error nisi est quasi aut, reiciendis quibusdam animi eveniet similique doloribus </p>

            <h2 className={styles.subheading}>Contact Us</h2>
            <p className={styles.para}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore velit repudiandae ut voluptates ad expedita temporibus incidunt quod quidem dolor. Eos iure sint ut fuga quibusdam velit in, reiciendis nisi quia architecto, optio dolore laboriosam numquam, </p>
        </div>
    )
}



export const metadata = {                           //  we can add this to give specific title and description for every individual page.....
    title: "About - Hunting Coder",
    description: "All about us you might need to know.",
};

