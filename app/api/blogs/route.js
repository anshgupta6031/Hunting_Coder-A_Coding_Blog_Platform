//  http://localhost:3000/api/blogs



import { NextResponse } from "next/server";
import fs from "node:fs/promises"


export async function GET(request) {

    try {
        let allBlogs = []
        const files = await fs.readdir("blogdata")

        for(let i=0; i<files.length; i++){
            const data = await fs.readFile(("blogdata/" + files[i]), "utf-8")
            allBlogs.push(JSON.parse(data))
        }

        return NextResponse.json(allBlogs)
    }

    catch (error) {
        console.error("Internal Server Error: ", error)
        return NextResponse.json({ error: "Internal Server Error" })
    }
}



