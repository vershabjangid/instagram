import React from 'react'
import { Sidebar } from '../../common/web/Sidebar'
import { Header } from '../../common/web/Header'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import my_img from '../../images/myimg.jpeg'


export function Home() {

    return (
        <>
            <div className='main'>
                <Header />
                <Sidebar />
                <div className='home_content w-[100%] h-[100vh] bg-[black] relative overflow-y-scroll'>
                    <div className='home_content_inner absolute right-0 w-[82%] border border-1 border-[navy] py-[5px] flex'>
                        <div className='home_content_inner_section1 border border-1 border-[yellow] w-[65%] text-[white] flex justify-center'>
                           
                        </div>
                        <div className='home_content_inner_section2 border border-1 border-[red] w-[35%]'></div>
                    </div>
                </div>
            </div>
        </>
    )
}
