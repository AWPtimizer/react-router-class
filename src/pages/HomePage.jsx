import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className='flex gap-3 justify-center'>
      HomePage
      <Link className='' to="/profiles">Profiles page</Link>
    </div>
  )
}

export default HomePage