import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import myimg from '../../images/shoes.jpeg'
import my_img from '../../images/vershab.jpg'
import my_img1 from '../../images/chatting.png'
import "../../css/index.css"
import "../../css/media.css"

export function Imageslider() {
    var settings = {
        dots: false,
        infinite: false,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    return (
        <>

            <Slider {...settings} className=' postimageslider w-[100%] '>
                <div className='postimageslider1 h-[600px] '>
                        <img src={myimg} alt="" className='w-[100%] ' />
                </div>

                <div className='postimageslider1 h-[600px] '>
                        <img src={my_img} alt="" className='w-[100%] ' />
                </div>

                <div className='postimageslider1 h-[600px] '>
                        <img src={my_img1} alt="" className='w-[100%] h-[auto] ' />
                </div>

                <div className='postimageslider1 h-[600px] '>
                        <img src="https://th.bing.com/th/id/R.3d88a927f8529dcba03364b09d98adbe?rik=JYmQaMVSULpYQg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-images.jpg&ehk=BNPsuSOUR7ATZ3EpRwxx1xFl7LUbO3tYlu1wFLCBrCE%3d&risl=&pid=ImgRaw&r=0" alt="" className='w-[100%] ' />
                </div>
                
            </Slider>
        </>
    )
}
