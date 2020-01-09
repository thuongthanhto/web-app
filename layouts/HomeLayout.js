import React from 'react'
import Header from '../components/Header'

const HomeLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default HomeLayout
