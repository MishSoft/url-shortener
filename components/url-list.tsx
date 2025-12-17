"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { RiFileCopyFill } from "react-icons/ri";
import { LuEye } from "react-icons/lu";
import { FaCheck } from "react-icons/fa";
import { AiOutlineLoading } from "react-icons/ai";


type UrlProps = {
  id: string,
  shortCode: string,
  originUrl: string,
  visits: number
}

export default function UrlList() {
  const [urls, setUrls] = useState<UrlProps[]>([])
  const [copied, setCopied] = useState<boolean>(false)
  const [copyUrl, setCopyUrl] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const shortenerUrl = (code: string) => `${process.env.NEXT_PUBLIC_BASE_URL}/${code}`

  const fetchUrls = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/urls')
      const data = await response.json()
      setUrls(data)
    } catch (error) {
      console.error('Error fetching URLs', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleCopyUrl = (code: string) => {
    const fulUrl = `${shortenerUrl(code)}`
    navigator.clipboard.writeText(fulUrl).then(() => {
      setCopied(true)
      setCopyUrl(code)
      setTimeout(() => {
        setCopied(false)
        setCopyUrl('')
      }, 3000)
    })
  }

  useEffect(() => {
    fetchUrls()
  }, [])



  return (
    <div>
      <h2 className='text-2xl font-bold mb-2'>
        Recent URLs
      </h2>
      {
        isLoading ? (
          <div className='space-y-2 border bg-black flex-col gap-3 w-full p-4 rounded-xl border-gray-400 flex items-center justify-between'>
            <AiOutlineLoading size={20} className='text-blue-500 animate-spin' />
          </div>
        ) : (
          <ul className='space-y-2 border flex-col gap-3 w-full p-4 rounded-xl border-gray-400 flex items-center justify-between'>
            {
              urls.length > 0 ? (
                urls.map(url => (
                  <li key={url.id} className='flex w-full rounded-md items-center gap-2 justify-between'>
                    <Link href={`/${url.shortCode}`} target='_blank' className='text-blue-300'>
                      {shortenerUrl(url.shortCode)}
                    </Link>
                    <div className='flex items-center gap-2'>
                      <button onClick={() => handleCopyUrl(url.shortCode)} title='Copy'>
                        {
                          copied && copyUrl == url.shortCode ? <FaCheck size={18} /> : <RiFileCopyFill size={18} />
                        }

                      </button>
                      <span className='flex text-xs items-center gap-2'>
                        <LuEye size={18} />
                        {url.visits} views
                      </span>
                    </div>
                  </li>
                ))
                ) : (
                  <h2 className=' text-white font-semibold'>URLs not added yet</h2>
                )
              }
            </ul>
        )
      }
    </div>
  )
}
