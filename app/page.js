



import styles from "./page.module.css"             //  if we want to use a specific css file for a specific page we have to import it is a css module.... i.e it can not be imported like the global css files.....


export default function Home() {
    return (
        <>
            <main className={styles.main}>
                <div className={styles.center}>
                    <h1>&lt;Hunting Coder/&gt;</h1>
                </div>

                <h3>A blog platform for hunting coders by a hunting coder</h3>
            </main>
        </>
    );
}
