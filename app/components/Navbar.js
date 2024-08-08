



import Link from "next/link"                       //  built in next router.......
import styles from "../page.module.css"             //  if we want to use a specific css file for a specific page we have to import it is a css module.... i.e it can not be imported like the global css files.....


export default function Navbar() {
    return (
        <>
            <style>{`
                .navbar li:hover {
                    color: blue;
                }
            `}
            </style>

            <nav className={`${styles.mainnav} navbar`}>
                <ul>
                    <Link href="/"><li>Home</li></Link>
                    <Link href="/about" scroll={false}><li>About</li></Link>                {/** "scroll={false}" avoids to scroll to the top on loding the page.... */}
                    <Link href="/blog"><li>Blog</li></Link>
                    <Link href="/contact"><li>Contact</li></Link>
                </ul>
            </nav>
        </>
    )
}










