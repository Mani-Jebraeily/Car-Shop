import { useRouter } from 'next/router'
import React from 'react'
import carsData from '../../../data/carsData'
import CarDetails from '../../../components/template/CarDetails'

function CarId() {
    const router = useRouter()
    const id = router.query.carId
    const carDetails=carsData.find(car=>car.id===+id)
    return (
        <div>
            {/* {carDetails.name} */}
            <CarDetails data={carDetails}/>
        </div>
    )
}

export default CarId