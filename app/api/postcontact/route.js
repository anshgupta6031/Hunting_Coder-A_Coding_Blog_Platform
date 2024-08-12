//  http://localhost:3000/api/postcontact



import { NextResponse } from "next/server";
import fs from "node:fs/promises"


export async function POST(request) {

    try {
        let data = await request.json()

        let files = await fs.readdir("contactdata")

        let max_num = 0
        for(let i=0; i<files.length; i++){
            max_num = Math.max(max_num, parseInt(files[i].slice(0, -5)))
        }

        await fs.writeFile(`contactdata/${max_num + 1}.json`, JSON.stringify(data))

        return NextResponse.json(data)
    }

    catch (error) {
        console.error("Internal Server Error: ", error)
        return NextResponse.json({ error: "Internal Server Error" })
    }
}



