import React, {useState} from 'react'

import Carousel from '../../../componets/carousel/Carousel'
import SwitchTabs from '../../../componets/switchTabs/SwitchTabs'
import ContentWrapper from '../../../componets/contentWrapper/ContentWrapper'
import useFetch from '../../../hooks/useFetch'

const Popular = () => {
    const [endPoint ,setEndPoint] = useState("movie")

    const {data, loading} = useFetch(`/${endPoint}/popular`)    
   
   
    const onTabChange = (tab) =>{ 
           setEndPoint(tab === "Movies" ? "movie" :"tv")
    }
   
     return (
       <div className='carouselSection'>
                 <ContentWrapper>
                   <span className='carouselTitle'>Whats' Popular</span>
                     <SwitchTabs data={["Movies", "TV Shows"]} onTabChange= {onTabChange}/>
                 </ContentWrapper>
                    <Carousel data = {data?.results} 
                    loading={loading}
                     endPoint={endPoint}/>
   
   
           </div>
     )
}

export default Popular