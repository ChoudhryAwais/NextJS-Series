
import { NextResponse, NextRequest } from "next/server"


const usersData = [
    {
        "name": "Awais Akhter",
        "contactNum": "0234820934032"
    },
    {
        "name": "Abdullah",
        "contactNum": "23432423"
    },
]

export function GET() {
    return NextResponse.json(usersData)
}

export async function POST(request: NextRequest) {
    const formData = await request.json()
    usersData.push(formData)
    return NextResponse.json({ "FormData": "Successfully posted" })
}