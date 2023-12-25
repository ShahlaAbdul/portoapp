import React from 'react'
import './Home.scss'
import ShopByCategory from '../../Component/HomePageShopByCategorySect/ShopByCategory'
import ProductSection from '../../Component/HomePageFeaturedProductSec/ProductSection'
// import HomePageFlashSale from '../../Component/HomePageFlashSale/HomePageFlashSale'

function Home() {
  return (
    <div> 
      <ShopByCategory /> 
      {/* <HomePageFlashSale/> */}
      <ProductSection/>
    </div>
  )
}

export default Home