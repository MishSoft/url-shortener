"use client"
import React, { useState } from 'react'

interface ShortenFormsProps {
  handleUrlShortened: () => void
}

export default function ShortenForm({ handleUrlShortened }: ShortenFormsProps) {
  const [url, setUrl] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const response = await fetch('/api/shorten', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          url,
        })
      })
      await response.json()
      setUrl('')
      handleUrlShortened()
    } catch (error) {
      console.error('Error shortening URL:', error)
    } finally {
      setIsLoading(false)
    }
    setUrl('')
  }

  return (
    <form onSubmit={handleSubmit} className='mb-4'>
      <div className='space-y-4'>
        <input value={url} onChange={(e) => setUrl(e.target.value)} required  type="url" placeholder='Enter URL to shorten' className='w-full p-2 h-12 border border-gray-200 rounded-md outline-none' />
        <button disabled={isLoading} type="submit" className={`w-full cursor-pointer hover:bg-blue-600 bg-blue-500 p-2 duration-200  rounded-md`}>
          {isLoading ? "Shortening..." : "Shorten URL"}
        </button>
      </div>
    </form>
  )
}
