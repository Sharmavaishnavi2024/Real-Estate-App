import React, {useEffect, useState}from "react";
import {Swiper, SwiperSlide, useSwiper} from "swiper/react"
import "swiper/css";
import axios from "axios";
// import data from "../utilis/slides.json"
import { sliderSettings } from "../utilis/slides";


const options = {
    method: 'GET',
    url: "http://localhost:8000/api/realEstate",
  };

const Resedencies= () => {
    const[RealEstatedata, setRealEstatedata]=useState();
    useEffect(()=> {
        axios.request(options).then(function(response){
            setRealEstatedata(response.data);
        }).catch(function(error){
            console.log(error);
        })
    }, [])


    
        
    
     return (
        <><div className="resedency" id="resedencies">
            <h3 className="title">Best Choices</h3>
            <p className="short-description">Popular Resedencies</p>
        </div> 
        <Swiper {...sliderSettings}>
            <SliderButtons />
                {RealEstatedata && RealEstatedata.map((list, i) => (
                    
                    <SwiperSlide className="swiper-slide" data-swiper-autoplay="1000" disableOnInteraction= "false" key={i}>
                        <div className="card">
                            <img className="card-img" src={list.image} alt="home" />
                                 
                                <p className="card-detail" style= {{color : "orange"}}>${list.price} </p>
                                <p className="card-detail">{list.name}</p>
        
                        </div>
                   </SwiperSlide>
                    
                ))}

           </Swiper></>
 )
}

export default Resedencies;


const SliderButtons= ()=> {
    const swiper= useSwiper();
return (
    <div className="residency-buttons">
        <button onClick={()=> swiper.slidePrev()}>&lt;</button>
        <button onClick= {()=> swiper.slideNext()}>&gt;</button>

    </div>
)
}