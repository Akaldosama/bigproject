import React from 'react'
import Link from 'next/link'

export default function page() {
  return (
    <div>
      <h1>Login</h1>
      <Link href='/dashboard' className='underline'>Go to App</Link>
    </div>
  )
}
