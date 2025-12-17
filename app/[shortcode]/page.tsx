import prisma from '@/lib/prisma'
import { redirect } from 'next/navigation'

interface RedirectPageProps {
  params: Promise<{ shortcode: string }>
}

export default async function RedirectPage({ params }: RedirectPageProps) {
  const { shortcode } = await params

  if (!shortcode) {
    return <div>Invalid shortcode</div>
  }

  const url = await prisma.url.findUnique({
    where: { shortCode: shortcode },
  })

  if (!url || !url.originalUrl) {
    return <div>404 URL not found</div>
  }

  await prisma.url.update({
    where: { id: url.id },
    data: { visits: { increment: 1 } },
  })

  redirect(url.originalUrl)
}
