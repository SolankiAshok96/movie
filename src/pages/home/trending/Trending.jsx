import React, { useState } from 'react'

import ContentWrapper from '../../../componets/contentWrapper/ContentWrapper' 
import SwitchTabs from '../../../componets/switchTabs/SwitchTabs'
import Carousel from '../../../componets/carousel/Carousel'

import useFetch from '../../../hooks/useFetch'


const Trending = () => {
      
  const [endPoint ,setEndPoint] = useState("day")

 const {data, loading} = useFetch(`/trending/movie/${endPoint}`)    


 const onTabChange = (tab) =>{ 
        setEndPoint(tab === "Day" ? "day" :"week")
 }

  return (
    <div className='carouselSection'>
              <ContentWrapper>
                <span className='carouselTitle'>Trending</span>
                  <SwitchTabs data={["Day", "Week"]} onTabChange= {onTabChange}/>
              </ContentWrapper>
                 <Carousel data = {data?.results} loading={loading}/>


        </div>
  )
}

export default Trending