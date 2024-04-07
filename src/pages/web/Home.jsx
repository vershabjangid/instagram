import React from 'react'
import { Sidebar } from '../../common/web/Sidebar'
import { Header } from '../../common/web/Header'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import my_img from '../../images/myimg.jpeg'


export function Home() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 3,
        arrows: true,
        responsive: [

            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 3,
                    arrows: false,
                    infinite: false
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 3,
                    arrows: false,
                    infinite: false
                }
            },
            {
                breakpoint: 495,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    arrows: false,
                    infinite: false
                }
            },
            {
                breakpoint: 365,
                settings: {
                    slidesToShow: 4.2,
                    slidesToScroll: 4,
                    arrows: false,
                    infinite: false
                }
            },

            {
                breakpoint: 310,
                settings: {
                    slidesToShow: 3.5,
                    slidesToScroll: 3.5,
                    arrows: false,
                    infinite: false
                }
            },
            {
                breakpoint: 270,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows: false
                }
            },
            {
                breakpoint: 230,
                settings: {
                    slidesToShow: 2.4,
                    slidesToScroll: 2.4,
                    arrows: false
                }
            },
            {
                breakpoint: 195,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 165,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            },

            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    };

    return (
        <>
            <div className='main w-[100%] h-[100vh] bg-[black]'>
                <Header />
                <div className='home_inner w-[82%] h-[100vh] fixed overflow-y-scroll right-0 flex'>

                    <div className='home_reels_section  w-[65%]'>
                        <Slider {...settings} className='text-[white] w-[100%] py-[35px]'>
                            <div className='slider_outer'>
                                <div className='status_outer  w-[65px] h-[65px] rounded-[50px] ml-[10px] flex items-center justify-center'>
                                    <div className=' border-[black] w-[92%] h-[92%] rounded-[50%] mr-[0.5px]'>
                                        <div className='border border-2 border-[black] w-[100%] h-[100%] rounded-[50%] mr-[0.5px] overflow-hidden'>
                                            <img src={my_img} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className=' w-[70px] ml-[8px]  flex justify-center text-[14px]'>name here</div>
                            </div>

                            <div className='slider_outer'>
                                <div className='status_outer  w-[65px] h-[65px] rounded-[50px] ml-[10px] flex items-center justify-center'>
                                    <div className=' border-[black] w-[92%] h-[92%] rounded-[50%] mr-[0.5px]'>
                                        <div className='border border-2 border-[black] w-[100%] h-[100%] rounded-[50%] mr-[0.5px] overflow-hidden'>
                                            <img src={my_img} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className=' w-[70px] ml-[8px]  flex justify-center text-[14px]'>name here</div>
                            </div>


                            <div className='slider_outer'>
                                <div className='status_outer  w-[65px] h-[65px] rounded-[50px] ml-[10px] flex items-center justify-center'>
                                    <div className=' border-[black] w-[92%] h-[92%] rounded-[50%] mr-[0.5px]'>
                                        <div className='border border-2 border-[black] w-[100%] h-[100%] rounded-[50%] mr-[0.5px] overflow-hidden'>
                                            <img src={my_img} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className=' w-[70px] ml-[8px]  flex justify-center text-[14px]'>name here</div>
                            </div>


                            <div className='slider_outer'>
                                <div className='status_outer  w-[65px] h-[65px] rounded-[50px] ml-[10px] flex items-center justify-center'>
                                    <div className=' border-[black] w-[92%] h-[92%] rounded-[50%] mr-[0.5px]'>
                                        <div className='border border-2 border-[black] w-[100%] h-[100%] rounded-[50%] mr-[0.5px] overflow-hidden'>
                                            <img src={my_img} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className=' w-[70px] ml-[8px]  flex justify-center text-[14px]'>name here</div>
                            </div>


                            <div className='slider_outer'>
                                <div className='status_outer  w-[65px] h-[65px] rounded-[50px] ml-[10px] flex items-center justify-center'>
                                    <div className=' border-[black] w-[92%] h-[92%] rounded-[50%] mr-[0.5px]'>
                                        <div className='border border-2 border-[black] w-[100%] h-[100%] rounded-[50%] mr-[0.5px] overflow-hidden'>
                                            <img src={my_img} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className=' w-[70px] ml-[8px]  flex justify-center text-[14px]'>n here</div>
                            </div>


                            <div className='slider_outer'>
                                <div className='status_outer  w-[65px] h-[65px] rounded-[50px] ml-[10px] flex items-center justify-center'>
                                    <div className=' border-[black] w-[92%] h-[92%] rounded-[50%] mr-[0.5px]'>
                                        <div className='border border-2 border-[black] w-[100%] h-[100%] rounded-[50%] mr-[0.5px] overflow-hidden'>
                                            <img src={my_img} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className=' w-[70px] ml-[8px]  flex justify-center text-[14px]'>name here</div>
                            </div>


                            <div className='slider_outer'>
                                <div className='status_outer  w-[65px] h-[65px] rounded-[50px] ml-[10px] flex items-center justify-center'>
                                    <div className=' border-[black] w-[92%] h-[92%] rounded-[50%] mr-[0.5px]'>
                                        <div className='border border-2 border-[black] w-[100%] h-[100%] rounded-[50%] mr-[0.5px] overflow-hidden'>
                                            <img src={my_img} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className=' w-[70px] ml-[8px]  flex justify-center text-[14px]'>name here</div>
                            </div>


                            <div className='slider_outer'>
                                <div className='status_outer  w-[65px] h-[65px] rounded-[50px] ml-[10px] flex items-center justify-center'>
                                    <div className=' border-[black] w-[92%] h-[92%] rounded-[50%] mr-[0.5px]'>
                                        <div className='border border-2 border-[black] w-[100%] h-[100%] rounded-[50%] mr-[0.5px] overflow-hidden'>
                                            <img src={my_img} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className=' w-[70px] ml-[8px]  flex justify-center text-[14px]'>name here</div>
                            </div>

                            <div className='slider_outer'>
                                <div className='status_outer  w-[65px] h-[65px] rounded-[50px] ml-[10px] flex items-center justify-center'>
                                    <div className=' border-[black] w-[92%] h-[92%] rounded-[50%] mr-[0.5px]'>
                                        <div className='border border-2 border-[black] w-[100%] h-[100%] rounded-[50%] mr-[0.5px] overflow-hidden'>
                                            <img src={my_img} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className=' w-[70px] ml-[8px]  flex justify-center text-[14px]'>name here</div>
                            </div>

                            <div className='slider_outer'>
                                <div className='status_outer  w-[65px] h-[65px] rounded-[50px] ml-[10px] flex items-center justify-center'>
                                    <div className=' border-[black] w-[92%] h-[92%] rounded-[50%] mr-[0.5px]'>
                                        <div className='border border-2 border-[black] w-[100%] h-[100%] rounded-[50%] mr-[0.5px] overflow-hidden'>
                                            <img src={my_img} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className=' w-[70px] ml-[8px]  flex justify-center text-[14px]'>na here</div>
                            </div>

                            <div className='slider_outer'>
                                <div className='status_outer  w-[65px] h-[65px] rounded-[50px] ml-[10px] flex items-center justify-center'>
                                    <div className=' border-[black] w-[92%] h-[92%] rounded-[50%] mr-[0.5px]'>
                                        <div className='border border-2 border-[black] w-[100%] h-[100%] rounded-[50%] mr-[0.5px] overflow-hidden'>
                                            <img src={my_img} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className=' w-[70px] ml-[8px]  flex justify-center text-[14px]'>name here</div>
                            </div>

                            <div className='slider_outer'>
                                <div className='status_outer  w-[65px] h-[65px] rounded-[50px] ml-[10px] flex items-center justify-center'>
                                    <div className=' border-[black] w-[92%] h-[92%] rounded-[50%] mr-[0.5px]'>
                                        <div className='border border-2 border-[black] w-[100%] h-[100%] rounded-[50%] mr-[0.5px] overflow-hidden'>
                                            <img src={my_img} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className=' w-[70px] ml-[8px]  flex justify-center text-[14px]'>name here</div>
                            </div>

                            <div className='slider_outer'>
                                <div className='status_outer  w-[65px] h-[65px] rounded-[50px] ml-[10px] flex items-center justify-center'>
                                    <div className=' border-[black] w-[92%] h-[92%] rounded-[50%] mr-[0.5px]'>
                                        <div className='border border-2 border-[black] w-[100%] h-[100%] rounded-[50%] mr-[0.5px] overflow-hidden'>
                                            <img src={my_img} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className=' w-[70px] ml-[8px]  flex justify-center text-[14px]'>name here</div>
                            </div>

                            <div className='slider_outer'>
                                <div className='status_outer  w-[65px] h-[65px] rounded-[50px] ml-[10px] flex items-center justify-center'>
                                    <div className=' border-[black] w-[92%] h-[92%] rounded-[50%] mr-[0.5px]'>
                                        <div className='border border-2 border-[black] w-[100%] h-[100%] rounded-[50%] mr-[0.5px] overflow-hidden'>
                                            <img src={my_img} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className=' w-[70px] ml-[8px]  flex justify-center text-[14px]'>name here</div>
                            </div>

                            <div className='slider_outer'>
                                <div className='status_outer  w-[65px] h-[65px] rounded-[50px] ml-[10px] flex items-center justify-center'>
                                    <div className=' border-[black] w-[92%] h-[92%] rounded-[50%] mr-[0.5px]'>
                                        <div className='border border-2 border-[black] w-[100%] h-[100%] rounded-[50%] mr-[0.5px] overflow-hidden'>
                                            <img src={my_img} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className=' w-[70px] ml-[8px]  flex justify-center text-[14px]'>name here</div>
                            </div>

                            <div className='slider_outer'>
                                <div className='status_outer  w-[65px] h-[65px] rounded-[50px] ml-[10px] flex items-center justify-center'>
                                    <div className=' border-[black] w-[92%] h-[92%] rounded-[50%] mr-[0.5px]'>
                                        <div className='border border-2 border-[black] w-[100%] h-[100%] rounded-[50%] mr-[0.5px] overflow-hidden'>
                                            <img src={my_img} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className=' w-[70px] ml-[8px]  flex justify-center text-[14px]'>name here</div>
                            </div>

                        </Slider>
                    </div>

                    <div className='friends_suggestion_section border border-1 border-[blue] w-[35%] flex justify-end text-[white]'>
                        <div className=' w-[90%] pr-[15px]'>
                            <div className='profile_section2 flex justify-between items-center pt-[30px] w-[100%]'>
                                <div className='flex'>
                                    <div className='img_section w-[45px] h-[45px] rounded-[50%]     overflow-hidden'>
                                        <img src={my_img} alt="" />
                                    </div>
                                    <div className='name_or_username ml-[10px] text-center'>
                                        <p>vershab_jangid</p>
                                        <p className='text-[#a8a8a8] text-[15px]'>vershab jangid</p>
                                    </div>
                                </div>
                                <div className='text-[14px] text-[#3b97bb] font-[550]'>switch</div>
                            </div>

                            <div className='flex justify-between my-[10px]'>
                                <div className=''>Suggested for you</div>
                                <div className=''>See All</div>
                            </div>

                            <div className='w-[100%]'>

                                <div className='suggested_profile flex justify-between items-center  w-[100%] my-[10px]'>
                                    <div className='flex '>
                                        <div className='img_section w-[45px] h-[45px] rounded-[50%]  overflow-hidden'>
                                            <img src={my_img} alt="" />
                                        </div>
                                        <div className='name_or_username ml-[10px] text-center'>
                                            <p>vershab_jangid</p>
                                            <p className='text-[#a8a8a8] text-[15px]'>vershab jangid</p>
                                        </div>
                                    </div>
                                    <div className='text-[14px] text-[#3b97bb] font-[550]'>Follow</div>
                                </div>
                                

                                <div className='suggested_profile flex justify-between items-center  w-[100%] my-[10px]'>
                                    <div className='flex '>
                                        <div className='img_section w-[45px] h-[45px] rounded-[50%]  overflow-hidden'>
                                            <img src={my_img} alt="" />
                                        </div>
                                        <div className='name_or_username ml-[10px] text-center'>
                                            <p>vershab_jangid</p>
                                            <p className='text-[#a8a8a8] text-[15px]'>vershab jangid</p>
                                        </div>
                                    </div>
                                    <div className='text-[14px] text-[#3b97bb] font-[550]'>Follow</div>
                                </div>


                                <div className='suggested_profile flex justify-between items-center  w-[100%] my-[10px]'>
                                    <div className='flex '>
                                        <div className='img_section w-[45px] h-[45px] rounded-[50%]  overflow-hidden'>
                                            <img src={my_img} alt="" />
                                        </div>
                                        <div className='name_or_username ml-[10px] text-center'>
                                            <p>vershab_jangid</p>
                                            <p className='text-[#a8a8a8] text-[15px]'>vershab jangid</p>
                                        </div>
                                    </div>
                                    <div className='text-[14px] text-[#3b97bb] font-[550]'>Follow</div>
                                </div>


                                <div className='suggested_profile flex justify-between items-center  w-[100%] my-[10px]'>
                                    <div className='flex '>
                                        <div className='img_section w-[45px] h-[45px] rounded-[50%]  overflow-hidden'>
                                            <img src={my_img} alt="" />
                                        </div>
                                        <div className='name_or_username ml-[10px] text-center'>
                                            <p>vershab_jangid</p>
                                            <p className='text-[#a8a8a8] text-[15px]'>vershab jangid</p>
                                        </div>
                                    </div>
                                    <div className='text-[14px] text-[#3b97bb] font-[550]'>Follow</div>
                                </div>


                                <div className='suggested_profile flex justify-between items-center  w-[100%] my-[10px]'>
                                    <div className='flex '>
                                        <div className='img_section w-[45px] h-[45px] rounded-[50%]  overflow-hidden'>
                                            <img src={my_img} alt="" />
                                        </div>
                                        <div className='name_or_username ml-[10px] text-center'>
                                            <p>vershab_jangid</p>
                                            <p className='text-[#a8a8a8] text-[15px]'>vershab jangid</p>
                                        </div>
                                    </div>
                                    <div className='text-[14px] text-[#3b97bb] font-[550]'>Follow</div>
                                </div>


                                <div className='suggested_profile flex justify-between items-center  w-[100%] my-[10px]'>
                                    <div className='flex '>
                                        <div className='img_section w-[45px] h-[45px] rounded-[50%] overflow-hidden'>
                                            <img src={my_img} alt="" />
                                        </div>
                                        <div className='name_or_username ml-[10px] text-center'>
                                            <p>vershab_jangid</p>
                                            <p className='text-[#a8a8a8] text-[15px]'>vershab jangid</p>
                                        </div>
                                    </div>
                                    <div className='text-[14px] text-[#3b97bb] font-[550]'>Follow</div>
                                </div>

                            </div>  
                        </div>
                    </div>

                </div>
                <Sidebar />
            </div>
        </>
    )
}
