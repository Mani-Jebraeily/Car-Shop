import React from 'react'
import carsData from '../../../data/carsData'
import CarList from '../../../components/template/CarList'

function Suv() {

const data=carsData.filter(car=>car.category==="suv")
console.log(data)
  return (
    <CarList data={data}/>
  )
}

export default Suv