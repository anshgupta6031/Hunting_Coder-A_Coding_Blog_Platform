



import React from 'react'
import Client from './Client'


export default async function page() {
    let data = await fetch("http://localhost:3000/api/blogs")
    let allBlogs = await data.json()

    return (
        <Client allBlogs={allBlogs} />
    )
}




export const metadata = {                           //  we can add this to give specific title and description for every individual page.....
    title: "Blog - Hunting Coder",
    description: "All the blog you need.",
};

