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
        slidesToScroll: 7,
        arrows:true,
    };

    return (
        <>
            <div className='main w-[100%] h-[100vh] bg-[black]'>
                <Header />
                <div className='home_inner w-[82%] h-[100vh] border border-1 border-[pink] fixed overflow-y-scroll right-0 flex'>

                    <div className='border border-1 border-[yellow] w-[60%] h-[2000px] '>
                        <Slider {...settings} className='text-[white] w-[100%] border border-1 border-[red] py-[20px]'>
                            <div className='border border-1 border-[blue]'>
                                <div className='status_outer  w-[70px] h-[70px] rounded-[50px] ml-[10px] flex items-center justify-center'>
                                    <div className='border border-2 border-[black] w-[92%] h-[92%] rounded-[50%] mr-[0.5px]'>
                                    <div className='border border-1 border-[black] w-[100%] h-[100%] rounded-[50%] mr-[0.5px] overflow-hidden'>
                                        <img src={my_img} alt="" />
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div className='border border-1 border-[blue]'>
                                <div className='status_outer  w-[70px] h-[70px] rounded-[50px] ml-[10px] flex items-center justify-center'>
                                    <div className='border border-2 border-[black] w-[92%] h-[92%] rounded-[50%] mr-[0.5px]'>
                                    <div className='border border-1 border-[black] w-[100%] h-[100%] rounded-[50%] mr-[0.5px] overflow-hidden'>
                                        <img src={my_img} alt="" />
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div className='border border-1 border-[blue]'>
                                <div className='status_outer  w-[70px] h-[70px] rounded-[50px] ml-[10px] flex items-center justify-center'>
                                    <div className='border border-2 border-[black] w-[92%] h-[92%] rounded-[50%] mr-[0.5px]'>
                                    <div className='border border-1 border-[black] w-[100%] h-[100%] rounded-[50%] mr-[0.5px] overflow-hidden'>
                                        <img src={my_img} alt="" />
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div className='border border-1 border-[blue]'>
                                <div className='status_outer  w-[70px] h-[70px] rounded-[50px] ml-[10px] flex items-center justify-center'>
                                    <div className='border border-2 border-[black] w-[92%] h-[92%] rounded-[50%] mr-[0.5px]'>
                                    <div className='border border-1 border-[black] w-[100%] h-[100%] rounded-[50%] mr-[0.5px] overflow-hidden'>
                                        <img src={my_img} alt="" />
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div className='border border-1 border-[blue]'>
                                <div className='status_outer  w-[70px] h-[70px] rounded-[50px] ml-[10px] flex items-center justify-center'>
                                    <div className='border border-2 border-[black] w-[92%] h-[92%] rounded-[50%] mr-[0.5px]'>
                                    <div className='border border-1 border-[black] w-[100%] h-[100%] rounded-[50%] mr-[0.5px] overflow-hidden'>
                                        <img src={my_img} alt="" />
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div className='border border-1 border-[blue]'>
                                <div className='status_outer  w-[70px] h-[70px] rounded-[50px] ml-[10px] flex items-center justify-center'>
                                    <div className='border border-2 border-[black] w-[92%] h-[92%] rounded-[50%] mr-[0.5px]'>
                                    <div className='border border-1 border-[black] w-[100%] h-[100%] rounded-[50%] mr-[0.5px] overflow-hidden'>
                                        <img src={my_img} alt="" />
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div className='border border-1 border-[blue]'>
                                <div className='status_outer  w-[70px] h-[70px] rounded-[50px] ml-[10px] flex items-center justify-center'>
                                    <div className='border border-2 border-[black] w-[92%] h-[92%] rounded-[50%] mr-[0.5px]'>
                                    <div className='border border-1 border-[black] w-[100%] h-[100%] rounded-[50%] mr-[0.5px] overflow-hidden'>
                                        <img src={my_img} alt="" />
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div className='border border-1 border-[blue]'>
                                <div className='status_outer  w-[70px] h-[70px] rounded-[50px] ml-[10px] flex items-center justify-center'>
                                    <div className='border border-2 border-[black] w-[92%] h-[92%] rounded-[50%] mr-[0.5px]'>
                                    <div className='border border-1 border-[black] w-[100%] h-[100%] rounded-[50%] mr-[0.5px] overflow-hidden'>
                                        <img src={my_img} alt="" />
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div className='border border-1 border-[blue]'>
                                <div className='status_outer  w-[70px] h-[70px] rounded-[50px] ml-[10px] flex items-center justify-center'>
                                    <div className='border border-2 border-[black] w-[92%] h-[92%] rounded-[50%] mr-[0.5px]'>
                                    <div className='border border-1 border-[black] w-[100%] h-[100%] rounded-[50%] mr-[0.5px] overflow-hidden'>
                                        <img src={my_img} alt="" />
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div className='border border-1 border-[blue]'>
                                <div className='status_outer  w-[70px] h-[70px] rounded-[50px] ml-[10px] flex items-center justify-center'>
                                    <div className='border border-2 border-[black] w-[92%] h-[92%] rounded-[50%] mr-[0.5px]'>
                                    <div className='border border-1 border-[black] w-[100%] h-[100%] rounded-[50%] mr-[0.5px] overflow-hidden'>
                                        <img src={my_img} alt="" />
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div className='border border-1 border-[blue]'>
                                <div className='status_outer  w-[70px] h-[70px] rounded-[50px] ml-[10px] flex items-center justify-center'>
                                    <div className='border border-2 border-[black] w-[92%] h-[92%] rounded-[50%] mr-[0.5px]'>
                                    <div className='border border-1 border-[black] w-[100%] h-[100%] rounded-[50%] mr-[0.5px] overflow-hidden'>
                                        <img src={my_img} alt="" />
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div className='border border-1 border-[blue]'>
                                <div className='status_outer  w-[70px] h-[70px] rounded-[50px] ml-[10px] flex items-center justify-center'>
                                    <div className='border border-2 border-[black] w-[92%] h-[92%] rounded-[50%] mr-[0.5px]'>
                                    <div className='border border-1 border-[black] w-[100%] h-[100%] rounded-[50%] mr-[0.5px] overflow-hidden'>
                                        <img src={my_img} alt="" />
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div className='border border-1 border-[blue]'>
                                <div className='status_outer  w-[70px] h-[70px] rounded-[50px] ml-[10px] flex items-center justify-center'>
                                    <div className='border border-2 border-[black] w-[92%] h-[92%] rounded-[50%] mr-[0.5px]'>
                                    <div className='border border-1 border-[black] w-[100%] h-[100%] rounded-[50%] mr-[0.5px] overflow-hidden'>
                                        <img src={my_img} alt="" />
                                    </div>
                                    </div>
                                </div>
                            </div>

                            
                           
                        </Slider>
                    </div>

                    <div className='border border-1 border-[blue] w-[40%]'>

                    </div>

                </div>
                <Sidebar />
            </div>
        </>
    )
}
