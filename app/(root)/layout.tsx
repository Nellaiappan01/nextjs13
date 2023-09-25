import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
    <body className='min-h-screen bg-black-100 font-poppins'>
    <Navbar/>
    {children}
    <Footer/>
    </body>
    </>
  )
}

export default layout