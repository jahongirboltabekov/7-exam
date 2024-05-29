import React from 'react'
import Banner from '../components/home/banner/Banner'
import Banner_2 from '../components/home/banner2/Banner_2'
import Best from '../components/home/best/Best'
import Home_cards from '../components/home/home_cards/Home_cards'
import { useGetProductsQuery } from '../context/ProductApi/index'
function Home() {
  const { data,isError,isLoading } = useGetProductsQuery()

  return (
    <div>
        <Banner/>
        <Best  data={data} loading={isLoading} />
        <Banner_2/>
        <Home_cards/>
    </div>
  )
}

export default Home