
import Link from 'next/link'
import React from 'react'
import { RiFileCopyFill } from "react-icons/ri";
import { LuEye } from "react-icons/lu";



export default function UrlList() {
  return (
    <div>
      <h2 className='text-2xl font-bold mb-2'>
        Recent URLs
      </h2>
      <ul className='space-y-2 border p-4 rounded-xl border-gray-400 flex items-center justify-between'>
        <li className='flex items-center gap-2 justify-between'>
          <Link href={'https://www/card.site/blog'} className='text-blue-300'>
            https://www/card.site/blog
          </Link>
        </li>
        <div className='flex items-center gap-2'>
          <button title='Copy'>
            <RiFileCopyFill size={18} />
          </button>
          <span className='flex text-xs items-center gap-2'>
            <LuEye size={18}/>
            100 views
          </span>
        </div>
      </ul>
    </div>
  )
}
