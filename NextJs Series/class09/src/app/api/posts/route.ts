import { NextResponse } from "next/server";

const posts = [
    {
        "userId": 1,
        "id": 1,
        "title": "This is custom post",
        "body": "This post is related to API's"
    },
    {
        "userId": 2,
        "id": 2,
        "title": "This is custom post",
        "body": "This post is related to API's"
    },
    {
        "userId": 1,
        "id": 3,
        "title": "This is custom post",
        "body": "This post is related to API's"
    },
    {
        "userId": 1,
        "id": 4,
        "title": "This is custom post",
        "body": "This post is related to API's"
    },
]

export function GET() {
    return NextResponse.json(posts)
}