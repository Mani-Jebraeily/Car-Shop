import React from 'react'
import CarsPage from '../../../components/template/CarsPage'
import carsData from '../../../data/carsData'
import Categories from '../../../components/module/Categories'

function Details() {
  return (
    <div>
        <Categories/>
        <CarsPage data={carsData}/>
    </div>
  )
}

export default Details