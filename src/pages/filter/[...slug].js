import { useRouter } from 'next/router'
import React from 'react'
import carsData from '../../../data/carsData'
import CarList from '../../../components/template/CarList'

function Slug() {
    const router = useRouter()
    const [minPrice, maxPrice] = router.query.slug || []
    const data = carsData.filter(car => car.price > minPrice && car.price < maxPrice)
    console.log(data)

    if(!data.length)return<h3>Not Found !!!</h3>
    return (
        <>
        <CarList data={data}/>
   
        </>
    )
}

export default Slug