import React from 'react'
import carsData from '../../../data/carsData'
import CarList from '../../../components/template/CarList'

function Hatchback() {
const data=carsData.filter(car=>car.category==="hatchback")

  return (
    <CarList data={data}/>
  )
}

export default Hatchback