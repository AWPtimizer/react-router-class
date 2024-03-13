import React from 'react'
import { useParams } from 'react-router-dom'


function ProfilePage() {
  const params = useParams();
  return (
    <div>Profile {params.id}</div>
  )
}

export default ProfilePage