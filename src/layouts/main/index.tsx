import React from 'react'
import { Outlet } from 'react-router-dom'

const index = () => {
  return (
    <>
    <div>Main Layout</div>

    <Outlet />
  </>
  )
}

export default index
