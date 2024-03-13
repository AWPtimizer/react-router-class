import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='flex flex-col'>
      404 Not Found
      <Link className='underline text-red-500' to="/">Go to Home Page</Link>
    </div>
  )
}

export default NotFound