import styles from "./page.module.css"

export default function Home() {
    return (
        <>
            <nav className={styles.mainnav}>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </nav>

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
