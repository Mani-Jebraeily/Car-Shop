import React from 'react'
import carsData from '../../../data/carsData'
import CarList from '../../../components/template/CarList'

function Sport() {
const data=carsData.filter(car=>car.category==="sport")

  return (
    <CarList data={data}/>
  )
}

export default Sport