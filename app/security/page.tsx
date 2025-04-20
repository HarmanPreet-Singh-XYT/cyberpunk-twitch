'use client'
import Navbar from '@/components/Stream/Navbar'
import SecuritySettings from '@/components/Stream/Security'
import React,{useState} from 'react'


const page = () => {
  const [IsMenuOpen, setIsMenuOpen] = useState(true);
  return (
    <>
    <Navbar setIsMenuOpen={setIsMenuOpen}/>
    <SecuritySettings/>
    </>
  )
}

export default page