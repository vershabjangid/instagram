import React from 'react'
import { Sidebar } from '../../common/web/Sidebar'
import { Header } from '../../common/web/Header'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { Statuselement } from '../../common/web/Statuselement';
import { Postcard } from '../../common/web/Postcard';

import my_img from '../../images/myimg.jpeg'
import { Loginbottom } from '../../common/web/Loginbottom';



export function Home() {


    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        repeat: false,
        responsive: [
            {
                breakpoint: 1159,
                settings: {
                    slidesToShow: 11,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 10,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 9,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 9,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 635,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 565,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 490,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 430,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 4.5,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 325,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 290,
                settings: {
                    slidesToShow: 3.5,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 255,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 220,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 190,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 155,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 120,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    };


    return (

        <>
            <div className='main'>
                <Header />
                <Sidebar />
                <div className='home_content w-[100%] h-[100vh] bg-[black] relative overflow-y-scroll'>
                    <div className='home_content_inner absolute right-0 w-[82%] pt-[20px] flex'>
                        {/* post right section */}
                        <div className='home_content_inner_section1 w-[65%] text-[white] '>
                            <div className='slider_section w-[100%]'>
                                <div className='w-[100%] flex items-center justify-center mt-[5px] '>
                                    <Slider {...settings} className='slider w-[90%] '>
                                        <Statuselement />
                                        <Statuselement />
                                        <Statuselement />
                                        <Statuselement />
                                        <Statuselement />
                                        <Statuselement />
                                        <Statuselement />
                                        <Statuselement />
                                        <Statuselement />
                                        <Statuselement />
                                        <Statuselement />
                                        <Statuselement />
                                        <Statuselement />
                                        <Statuselement />
                                        <Statuselement />
                                        <Statuselement />
                                        <Statuselement />
                                        <Statuselement />
                                        <Statuselement />
                                        <Statuselement />
                                        <Statuselement />
                                        <Statuselement />
                                        <Statuselement />
                                        <Statuselement />
                                        <Statuselement />
                                        <Statuselement />
                                        <Statuselement />
                                        <Statuselement />
                                        <Statuselement />
                                        <Statuselement />
                                    </Slider>
                                </div>
                            </div>

                            <div className='home_post_upload_section w-[100%]  mt-[12px]  '>
                                <Postcard />
                            </div>
                        </div>
                        <div className='home_content_inner_section2 w-[35%] flex justify-end'>
                            <div className='w-[350px] flex justify-center'>
                                <div className='w-[90%] '>
                                    <div className='flex justify-between items-center h-[70px]'>
                                        <div className="profile_in_suggestion flex">
                                            <div className='w-[45px] h-[45px] rounded-[50%] overflow-hidden'>
                                                <img src={my_img} alt="" />
                                            </div>

                                            <div className='user_id_name ml-[10px] '>
                                                <p className='text-[white] text-[15px] font-[550]'>vershab_jangid</p>
                                                <p className='text-[grey] text-[15px] font-[500]'>vershab jangid</p>
                                            </div>
                                        </div>
                                        <div className="switch text-[#427af1] text-[13px]">Switch</div>
                                    </div>


                                    <div className='text-[white] flex justify-between text-[14px]'>
                                        <p className='text-[grey] text-[15px] font-[550]'>Suggested for you</p>
                                        <p className='font-[550]'>See All</p>
                                    </div>

                                    <div className=''>

                                        <div className='flex justify-between items-center h-[60px] '>
                                            <div className="profile_in_suggestion flex">
                                                <div className='w-[45px] h-[45px] rounded-[50%] overflow-hidden'>
                                                    <img src={my_img} alt="" />
                                                </div>

                                                <div className='user_id_name ml-[10px] '>
                                                    <p className='text-[white] text-[15px] font-[550]'>vershab_jangid</p>
                                                    <p className='text-[grey] text-[15px] font-[500]'>followed by vershab jangid</p>
                                                </div>
                                            </div>
                                            <div className="switch text-[#427af1] text-[13px]">Follow</div>
                                        </div>

                                        <div className='flex justify-between items-center h-[60px] '>
                                            <div className="profile_in_suggestion flex">
                                                <div className='w-[45px] h-[45px] rounded-[50%] overflow-hidden'>
                                                    <img src={my_img} alt="" />
                                                </div>

                                                <div className='user_id_name ml-[10px] '>
                                                    <p className='text-[white] text-[15px] font-[550]'>vershab_jangid</p>
                                                    <p className='text-[grey] text-[15px] font-[500]'>followed by vershab jangid</p>
                                                </div>
                                            </div>
                                            <div className="switch text-[#427af1] text-[13px]">Follow</div>
                                        </div>


                                        <div className='flex justify-between items-center h-[60px] '>
                                            <div className="profile_in_suggestion flex">
                                                <div className='w-[45px] h-[45px] rounded-[50%] overflow-hidden'>
                                                    <img src={my_img} alt="" />
                                                </div>

                                                <div className='user_id_name ml-[10px] '>
                                                    <p className='text-[white] text-[15px] font-[550]'>vershab_jangid</p>
                                                    <p className='text-[grey] text-[15px] font-[500]'>followed by vershab jangid</p>
                                                </div>
                                            </div>
                                            <div className="switch text-[#427af1] text-[13px]">Follow</div>
                                        </div>


                                        <div className='flex justify-between items-center h-[60px] '>
                                            <div className="profile_in_suggestion flex">
                                                <div className='w-[45px] h-[45px] rounded-[50%] overflow-hidden'>
                                                    <img src={my_img} alt="" />
                                                </div>

                                                <div className='user_id_name ml-[10px] '>
                                                    <p className='text-[white] text-[15px] font-[550]'>vershab_jangid</p>
                                                    <p className='text-[grey] text-[15px] font-[500]'>followed by vershab jangid</p>
                                                </div>
                                            </div>
                                            <div className="switch text-[#427af1] text-[13px]">Follow</div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
