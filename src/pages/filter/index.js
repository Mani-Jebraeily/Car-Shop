import { useRouter } from 'next/router'
import React from 'react'
import { useEffect } from 'react'

function Index() {
    const router=useRouter()

    useEffect(()=>{
        router.push("/cars")
    },[])


  return (
    <div>
        
    </div>
  )
}

export default Index