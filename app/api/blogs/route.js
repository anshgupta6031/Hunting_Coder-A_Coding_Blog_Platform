//  http://localhost:3000/api/blogs



import { NextResponse } from "next/server";
import fs from "node:fs/promises"


export async function GET(request) {

    try {
        const data = await fs.readdir("blogdata")
        return NextResponse.json(data)
    }

    catch (error) {
        console.error("Internal Server Error: ", error)
        return NextResponse.json({ error: "Internal Server Error" })
    }
}



