import React from 'react'
import carsData from '../../../data/carsData'
import CarList from '../../../components/template/CarList'

function Sedan() {
const data=carsData.filter(car=>car.category==="suv")

  return (
    <CarList data={data}/>
  )
}

export default Sedan