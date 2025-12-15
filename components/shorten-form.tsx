"use client"
import React, { useState } from 'react'

export default function ShortenForm() {
  const [url, setUrl] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <form className='mb-4'>
      <div className='space-y-4'>
        <input value={url} onChange={(e) => setUrl(e.target.value)} required  type="url" placeholder='Enter URL to shorten' className='w-full p-2 h-12 border border-gray-200 rounded-md outline-none' />
        <button  type="submit" className={`w-full cursor-pointer hover:bg-blue-600 bg-blue-500 p-2 duration-200  rounded-md`}>Shorten URL</button>
      </div>
    </form>
  )
}
