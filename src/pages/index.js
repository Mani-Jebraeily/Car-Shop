import CarsPage from '../../components/template/CarsPage'
import carsData from '../../data/carsData'
import Categories from '../../components/module/Categories'
import SearchBar from '../../components/module/SearchBar'
import AllButton from '../../components/module/AllButton'


// import CarsPage from '../../components/template/CarsPage'


function Home() {

  const cars = carsData.slice(0, 3)
  return (
    <>
      <SearchBar />
      <Categories />
      <AllButton/>
      <CarsPage data={cars} />


    </>

  );
}
export default Home
