import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";                             //  all the css files which are global(i.e. applied to all the pages of the website.) can only be imported in layout.js

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Hunting Coder",
    description: "A blog for hunting coders by a hunting coder.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
