//  http://localhost:3000/api/getblog/[slug]



import { NextResponse } from "next/server"
import fs from "fs/promises"


export async function GET(request, { params }) {

    try {
        const data = await fs.readFile(`blogdata/${params.slug}.json`, "utf-8")
        return NextResponse.json(JSON.parse(data))
    }

    catch (error) {
        console.error("Error reading file:", error)
        return NextResponse.json({ error: "Blog not found!!!" })
    }
}
