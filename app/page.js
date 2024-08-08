



import styles from "./page.module.css"             //  if we want to use a specific css file for a specific page we have to import it is a css module.... i.e it can not be imported like the global css files.....


export default function Home() {
    return (
        <>
            <main className={styles.main}>
                <div className={styles.center}>
                    <h1>Hunting Coder</h1>
                </div>

                <h3>A blog for hunting coders by a hunting coder</h3>

                <div className={styles.blogs}>
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
                    <div className={styles.blogItems}>
                        <h3>How to learn javascript in 2024.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis laboriosam adipisci rem porro minima beatae quas eius aliquid sapiente libero!</p>
                    </div>
                </div>
            </main>
        </>
    );
}
