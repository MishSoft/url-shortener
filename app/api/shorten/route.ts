import { nanoid } from "nanoid"
import { NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json()

    if (!url) {
      return NextResponse.json(
        { error: "URL is required" },
        { status: 400 }
      )
    }

    const shortCode = nanoid(8)

    const shortenedUrl = await prisma.url.create({
      data: {
        originalUrl: url,
        shortCode,
      },
    })

    return NextResponse.json(
      { shortCode: shortenedUrl.shortCode },
      { status: 201 }
    )
  } catch (error) {
    console.error("Error shortening URL:", error)

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    )
  }
}
