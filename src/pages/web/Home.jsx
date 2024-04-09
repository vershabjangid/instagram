import React from 'react'
import { Sidebar } from '../../common/web/Sidebar'
import { Header } from '../../common/web/Header'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { Statuselement } from '../../common/web/Statuselement';
import my_img from '../../images/myimg.jpeg'
import { BsThreeDots } from 'react-icons/bs';

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
                    <div className='home_content_inner absolute right-0 w-[82%] border border-1 border-[navy] pt-[20px] flex'>
                        <div className='home_content_inner_section1 border border-1 border-[yellow] w-[65%] text-[white] '>
                            <div className='slider_section w-[100%] border border-1 border-[purple]'>
                                <div className='w-[100%] border border-1 border-[green] flex items-center justify-center '>
                                    <Slider {...settings} className='slider w-[90%] border border-1 border-[blue]'>
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

                            <div className='w-[100%] border border-1 border-[blue] mt-[12px] flex justify-center'>
                                <div className='home_post_section w-[468px] border border-1 border-[green] '>
                                    <div className='post_user_information flex items-center justify-between py-[5px]'>
                                        <div className='flex items-center'>
                                            <div className='profile_section'>
                                                <div className='w-[35px] h-[35px] border border-1 border-[green] rounded-[50%] overflow-hidden'>
                                                    <img src={my_img} alt="" />
                                                </div>
                                            </div>
                                            <div className='id_name_and_track_name ml-[10px] leading-5'>
                                                <p className='text-[15px] font-[550]'>vershab_jangid <span className='text-[grey]'>· 5h</span></p>
                                                <p className='text-[13px]'>scorpio_lovers___007·Scorpio Is Always King 🥷</p>
                                            </div>
                                        </div>

                                        <div className='text-[17px]'>
                                            <BsThreeDots />
                                        </div>
                                    </div>
                                    <div className='post_section h-[auto] border border-1 border-[grey] '>
                                        <div className='w-[100%] border-1 border-[gold] flex items-center justify-center'>
                                            <img src={my_img} alt="" className='w-[100%]' />
                                        </div>
                                    </div>
                                    <div className='like_comment_section'>
                                        
                                    </div>
                                    <div className=''></div>
                                </div>
                            </div>
                        </div>
                        <div className='home_content_inner_section2 border border-1 border-[red] w-[35%]'></div>
                    </div>
                </div>
            </div>
        </>
    )
}
