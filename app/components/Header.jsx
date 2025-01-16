import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='shadow-sm shadow-shadow pt-3 pb-2 flex'>
        <div className="container mx-auto">
            <div className="flex flex-wrap justify-between">
                <p className='text-dead'>
                    Portfolio
                </p>
                <div className='flex gap-4'>
                    <Link className='text-dead' href="/">Home</Link>
                    <Link className='text-dead' href="/">Courses</Link>
                    <Link className='text-dead' href="/">Projects</Link>
                </div>
                <Link className='bg-sky p-2 rounded-lg text-dead' href="/">
                    Get started
                </Link>
            </div>
        </div>
    </header>
  )
}
