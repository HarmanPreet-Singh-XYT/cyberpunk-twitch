'use client'
import ShortsPage from '@/components/ShortsPage'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const idParam = useParams<{id:string}>();
  return (
    <ShortsPage id={idParam.id}/>
  )
}

export default page