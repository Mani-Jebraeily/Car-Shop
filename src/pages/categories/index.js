import { useRouter } from 'next/router'
import {useEffect} from 'react'

function Index() {
    const router=useRouter()
    useEffect(()=>{
        router.push("/cars")

    },[])
  return (
    <div>Index</div>
  )
}

export default Index