import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import myimg from '../../images/shoes.jpeg'
import my_img from '../../images/WhatsApp Image 2024-01-05 at 13.16.38.jpeg'
import my_img1 from '../../images/chatting.png'
import "../../css/index.css"
import "../../css/media.css"

import video from '../../images/Snapinsta.app_video_332430505_1867376300349958_7921868338331739913_n.mp4'
import { IoVolumeMediumSharp } from 'react-icons/io5';

export function Videoslider() {
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
                <div className='videoimageslider1 h-[600px] '>
                    <div className='account-btn w-[15%] h-[100%] '>

                    </div>
                    <div className='w-[100%] h-[100%]'>
                        <video className='w-[100%] h-[100%]' src={video} autoPlay  ></video>
                    </div>
                    <div className='mute-btn w-[15%] h-[100%]  flex items-end justify-center'>
                        <div className='w-[30px] h-[30px] bg-[grey] flex items-center justify-center rounded-[50%] mb-[10px] '>
                            <IoVolumeMediumSharp />
                        </div>
                    </div>
                </div>
            </Slider>


        </>
    )
}
