import React from 'react'
import { Header } from '../../common/web/Header'
import { Sidebar } from '../../common/web/Sidebar'
import my_img from '../../images/myimg.jpeg'
import { IoIosArrowDown } from 'react-icons/io'
import { GoPersonAdd } from 'react-icons/go'
import { PiDotsThreeOutlineFill } from 'react-icons/pi'
import Slider from 'react-slick'
import { Statuselement } from '../../common/web/Statuselement'

import "../../css/media.css"

export function Profile_section() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        repeat: false,
        responsive: [
            
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 8,
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
        <div className='main'>
            <Header />
            <Sidebar />

            <div className='profile_content w-[100%] h-[100vh] bg-[black] relative overflow-y-scroll'>
                <div className='profile_content_inner absolute right-0 w-[82%] pt-[20px] flex'>
                    <div className='profile_content_main w-[100%] border border-1 border-[red] flex justify-center'>
                        <div className='profile_content_main_inner w-[1000px] border border-1 border-[blue]'>
                            <div className="profile_section_inner1 flex justify-evenly">
                                <div className='porfile_photo_and_status w-[200px] border border-1 border-[green] flex items-center justify-center'>
                                    <div className='porfile_photo_and_status_inner w-[150px] h-[150px] rounded-[50%] overflow-hidden p-[5px]'>
                                        <div className='border border-4 border-[black] rounded-[50%]'>
                                            <img src={my_img} alt="" className='rounded-[50%]' />
                                        </div>
                                    </div>
                                </div>
                                <div className='following_and_followers_section w-[470px] border border-1 border-[yellow] text-[white]'>
                                    <div className='flex items-center justify-between h-[50px]'>
                                        <p className='text-[19px] font-[500]'>sorry_bro_siss</p>

                                        <div className='flex items-center justify-between'>
                                            <button className='flex items-center bg-[grey] p-[2px] px-[15px] rounded font-[550] mr-[7px]'>Following <IoIosArrowDown /></button>
                                            <button className='flex items-center bg-[grey] p-[2px] px-[15px] rounded font-[550] mr-[7px]'>Message</button>
                                            <button className='flex items-center bg-[grey] p-[6px] px-[7px] rounded font-[550] mr-[7px]'><GoPersonAdd /></button>
                                            <button className='flex items-center text-[20px]  px-[8px] rounded font-[550]'><PiDotsThreeOutlineFill /></button>
                                        </div>
                                    </div>
                                    <div className=' w-[65%] flex justify-between'>
                                        <div className=''>
                                            <span className='font-[550]'>30</span> posts
                                        </div>

                                        <div>
                                            <span className='font-[550]'>38</span> followers
                                        </div>

                                        <div>
                                            <span className='font-[550]'>162</span> following

                                        </div>
                                    </div>
                                    <div className='bio_section font-[550] text-[15px] mt-[5px]'>
                                        radhe radhe sarkar..
                                    </div>
                                    <div className='same_following text-[13px] mt-[5px]'>
                                        <span className='text-[grey]'>Followed by</span> being.baklol
                                    </div>
                                </div>
                            </div>


                            <div className='w-[100%] border border-1 border-[brown] mt-[20px] flex justify-center'>
                                <Slider {...settings} className='slider w-[90%] '>
                                    <div className='border border-1 border-[navy] '>
                                        <div className='w-[90px] h-[90px] border border-1 border-[pink] flex items-center justify-center'>
                                            <div className='w-[80px] h-[80px] border border-1 border-[grey] rounded-[50%] flex items-center justify-center'>
                                                <div className='highlights_img w-[70px] h-[70px] overflow-hidden rounded-[50%]'>
                                                    <img src={my_img} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='border border-1 border-[navy] '>
                                        <div className='w-[90px] h-[90px] border border-1 border-[pink] flex items-center justify-center'>
                                            <div className='w-[80px] h-[80px] border border-1 border-[grey] rounded-[50%] flex items-center justify-center'>
                                                <div className='highlights_img w-[70px] h-[70px] overflow-hidden rounded-[50%]'>
                                                    <img src={my_img} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='border border-1 border-[navy] '>
                                        <div className='w-[90px] h-[90px] border border-1 border-[pink] flex items-center justify-center'>
                                            <div className='w-[80px] h-[80px] border border-1 border-[grey] rounded-[50%] flex items-center justify-center'>
                                                <div className='highlights_img w-[70px] h-[70px] overflow-hidden rounded-[50%]'>
                                                    <img src={my_img} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='border border-1 border-[navy] '>
                                        <div className='w-[90px] h-[90px] border border-1 border-[pink] flex items-center justify-center'>
                                            <div className='w-[80px] h-[80px] border border-1 border-[grey] rounded-[50%] flex items-center justify-center'>
                                                <div className='highlights_img w-[70px] h-[70px] overflow-hidden rounded-[50%]'>
                                                    <img src={my_img} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='border border-1 border-[navy] '>
                                        <div className='w-[90px] h-[90px] border border-1 border-[pink] flex items-center justify-center'>
                                            <div className='w-[80px] h-[80px] border border-1 border-[grey] rounded-[50%] flex items-center justify-center'>
                                                <div className='highlights_img w-[70px] h-[70px] overflow-hidden rounded-[50%]'>
                                                    <img src={my_img} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='border border-1 border-[navy] '>
                                        <div className='w-[90px] h-[90px] border border-1 border-[pink] flex items-center justify-center'>
                                            <div className='w-[80px] h-[80px] border border-1 border-[grey] rounded-[50%] flex items-center justify-center'>
                                                <div className='highlights_img w-[70px] h-[70px] overflow-hidden rounded-[50%]'>
                                                    <img src={my_img} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='border border-1 border-[navy] '>
                                        <div className='w-[90px] h-[90px] border border-1 border-[pink] flex items-center justify-center'>
                                            <div className='w-[80px] h-[80px] border border-1 border-[grey] rounded-[50%] flex items-center justify-center'>
                                                <div className='highlights_img w-[70px] h-[70px] overflow-hidden rounded-[50%]'>
                                                    <img src={my_img} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className='border border-1 border-[navy] '>
                                        <div className='w-[90px] h-[90px] border border-1 border-[pink] flex items-center justify-center'>
                                            <div className='w-[80px] h-[80px] border border-1 border-[grey] rounded-[50%] flex items-center justify-center'>
                                                <div className='highlights_img w-[70px] h-[70px] overflow-hidden rounded-[50%]'>
                                                    <img src={my_img} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
