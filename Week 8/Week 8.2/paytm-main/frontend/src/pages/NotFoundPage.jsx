import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div>
      <h1>404 Not Found</h1>
      <Link to="/dashboard">Go to Dashboard</Link>
    </div>
  )
}

export default NotFoundPage