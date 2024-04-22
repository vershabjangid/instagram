import React from 'react'
import { Header } from '../../common/web/Header'
import { Sidebar } from '../../common/web/Sidebar'
import my_img from '../../images/myimg.jpeg'
import { IoIosArrowDown } from 'react-icons/io'
import { GoPersonAdd } from 'react-icons/go'
import { PiDotsThreeOutlineFill } from 'react-icons/pi'
import Slider from 'react-slick'
import { Statuselement } from '../../common/web/Statuselement'
import girl_post from "../../images/girl_post.jpeg"
import certificate from "../../images/certificate_section.jpeg"
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
                    <div className='profile_content_main w-[100%] border border-1 border-[yellow] flex justify-center flex-col'>
                        <div className='profile_content_main_inner w-[1000px] border border-1 border-[blue] m-[auto]'>
                            <div className="profile_section_inner1 flex justify-evenly">
                                <div className='porfile_photo_and_status w-[200px] border border-1 border-[green] flex items-center justify-center'>
                                    <div className='porfile_photo_and_status_inner w-[140px] h-[140px] rounded-[50%] overflow-hidden p-[3px]'>
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
                                        <div className='w-[90px] border border-1 border-[pink] flex items-center justify-center flex-col'>
                                            <div className='w-[80px] h-[80px] border border-1 border-[grey] rounded-[50%] flex items-center justify-center'>
                                                <div className='highlights_img w-[70px] h-[70px] overflow-hidden rounded-[50%]'>
                                                    <img src={my_img} alt="" />
                                                </div>
                                            </div>

                                            <p className='text-[white] text-[14px] font-[550]'>name </p>
                                        </div>
                                    </div>

                                    <div className='border border-1 border-[navy] '>
                                        <div className='w-[90px] border border-1 border-[pink] flex items-center justify-center flex-col'>
                                            <div className='w-[80px] h-[80px] border border-1 border-[grey] rounded-[50%] flex items-center justify-center'>
                                                <div className='highlights_img w-[70px] h-[70px] overflow-hidden rounded-[50%]'>
                                                    <img src={my_img} alt="" />
                                                </div>
                                            </div>

                                            <p className='text-[white] text-[14px] font-[550]'>name </p>
                                        </div>
                                    </div>

                                    <div className='border border-1 border-[navy] '>
                                        <div className='w-[90px] border border-1 border-[pink] flex items-center justify-center flex-col'>
                                            <div className='w-[80px] h-[80px] border border-1 border-[grey] rounded-[50%] flex items-center justify-center'>
                                                <div className='highlights_img w-[70px] h-[70px] overflow-hidden rounded-[50%]'>
                                                    <img src={my_img} alt="" />
                                                </div>
                                            </div>

                                            <p className='text-[white] text-[14px] font-[550]'>name </p>
                                        </div>
                                    </div>

                                    <div className='border border-1 border-[navy] '>
                                        <div className='w-[90px] border border-1 border-[pink] flex items-center justify-center flex-col'>
                                            <div className='w-[80px] h-[80px] border border-1 border-[grey] rounded-[50%] flex items-center justify-center'>
                                                <div className='highlights_img w-[70px] h-[70px] overflow-hidden rounded-[50%]'>
                                                    <img src={my_img} alt="" />
                                                </div>
                                            </div>

                                            <p className='text-[white] text-[14px] font-[550]'>name </p>
                                        </div>
                                    </div>

                                    <div className='border border-1 border-[navy] '>
                                        <div className='w-[90px] border border-1 border-[pink] flex items-center justify-center flex-col'>
                                            <div className='w-[80px] h-[80px] border border-1 border-[grey] rounded-[50%] flex items-center justify-center'>
                                                <div className='highlights_img w-[70px] h-[70px] overflow-hidden rounded-[50%]'>
                                                    <img src={my_img} alt="" />
                                                </div>
                                            </div>

                                            <p className='text-[white] text-[14px] font-[550]'>name </p>
                                        </div>
                                    </div>

                                    <div className='border border-1 border-[navy] '>
                                        <div className='w-[90px] border border-1 border-[pink] flex items-center justify-center flex-col'>
                                            <div className='w-[80px] h-[80px] border border-1 border-[grey] rounded-[50%] flex items-center justify-center'>
                                                <div className='highlights_img w-[70px] h-[70px] overflow-hidden rounded-[50%]'>
                                                    <img src={my_img} alt="" />
                                                </div>
                                            </div>

                                            <p className='text-[white] text-[14px] font-[550]'>name </p>
                                        </div>
                                    </div>

                                    <div className='border border-1 border-[navy] '>
                                        <div className='w-[90px] border border-1 border-[pink] flex items-center justify-center flex-col'>
                                            <div className='w-[80px] h-[80px] border border-1 border-[grey] rounded-[50%] flex items-center justify-center'>
                                                <div className='highlights_img w-[70px] h-[70px] overflow-hidden rounded-[50%]'>
                                                    <img src={my_img} alt="" />
                                                </div>
                                            </div>

                                            <p className='text-[white] text-[14px] font-[550]'>name </p>
                                        </div>
                                    </div>

                                    <div className='border border-1 border-[navy] '>
                                        <div className='w-[90px] border border-1 border-[pink] flex items-center justify-center flex-col'>
                                            <div className='w-[80px] h-[80px] border border-1 border-[grey] rounded-[50%] flex items-center justify-center'>
                                                <div className='highlights_img w-[70px] h-[70px] overflow-hidden rounded-[50%]'>
                                                    <img src={my_img} alt="" />
                                                </div>
                                            </div>

                                            <p className='text-[white] text-[14px] font-[550]'>name </p>
                                        </div>
                                    </div>

                                    <div className='border border-1 border-[navy] '>
                                        <div className='w-[90px] border border-1 border-[pink] flex items-center justify-center flex-col'>
                                            <div className='w-[80px] h-[80px] border border-1 border-[grey] rounded-[50%] flex items-center justify-center'>
                                                <div className='highlights_img w-[70px] h-[70px] overflow-hidden rounded-[50%]'>
                                                    <img src={my_img} alt="" />
                                                </div>
                                            </div>

                                            <p className='text-[white] text-[14px] font-[550]'>name </p>
                                        </div>
                                    </div>

                                    <div className='border border-1 border-[navy] '>
                                        <div className='w-[90px] border border-1 border-[pink] flex items-center justify-center flex-col'>
                                            <div className='w-[80px] h-[80px] border border-1 border-[grey] rounded-[50%] flex items-center justify-center'>
                                                <div className='highlights_img w-[70px] h-[70px] overflow-hidden rounded-[50%]'>
                                                    <img src={my_img} alt="" />
                                                </div>
                                            </div>

                                            <p className='text-[white] text-[14px] font-[550]'>name </p>
                                        </div>
                                    </div>



                                </Slider>
                            </div>
                        </div>


                        <div className='posts_section flex items-center justify-center mt-[20px]'>
                            <div className='posts_section_inner w-[1000px] flex items-center justify-center flex-col'>
                                <div className='post_reel_tag_section text-[white] w-[50%] flex items-center justify-evenly'>

                                    <div className='main_posts flex items-center justify-between mr-[5px] py-[10px]'>
                                        <figure className='mr-[5px]'>
                                            <svg aria-label="" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="15" role="img" viewBox="0 0 24 24" width="15"><title></title><rect fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="18" x="3" y="3"></rect><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="9.015" x2="9.015" y1="3" y2="21"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="14.985" x2="14.985" y1="3" y2="21"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="9.015" y2="9.015"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="14.985" y2="14.985"></line></svg>
                                        </figure>
                                        <p className='text-[14px]'>
                                            POSTS
                                        </p>
                                    </div>

                                    <div className='main_posts flex items-center justify-between mr-[5px] py-[10px]'>
                                        <figure className='mr-[5px]'>
                                        <svg aria-label="" class="x1lliihq x1n2onr6 x1roi4f4" fill="currentColor" height="15" role="img" viewBox="0 0 24 24" width="15"><title></title><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="2.049" x2="21.95" y1="7.002" y2="7.002"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="13.504" x2="16.362" y1="2.001" y2="7.002"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="7.207" x2="10.002" y1="2.11" y2="7.002"></line><path d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z" fill-rule="evenodd"></path></svg>
                                        </figure>
                                        <p className='text-[14px]'>
                                            REELS
                                        </p>
                                    </div>


                                    <div className='main_posts flex items-center justify-between mr-[5px] py-[10px]'>
                                        <figure className='mr-[5px]'>
                                        <svg aria-label="" class="x1lliihq x1n2onr6 x1roi4f4" fill="currentColor" height="12" role="img" viewBox="0 0 24 24" width="12"><title></title><path d="M10.201 3.797 12 1.997l1.799 1.8a1.59 1.59 0 0 0 1.124.465h5.259A1.818 1.818 0 0 1 22 6.08v14.104a1.818 1.818 0 0 1-1.818 1.818H3.818A1.818 1.818 0 0 1 2 20.184V6.08a1.818 1.818 0 0 1 1.818-1.818h5.26a1.59 1.59 0 0 0 1.123-.465Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M18.598 22.002V21.4a3.949 3.949 0 0 0-3.948-3.949H9.495A3.949 3.949 0 0 0 5.546 21.4v.603" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><circle cx="12.072" cy="11.075" fill="none" r="3.556" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle></svg>
                                        </figure>
                                        <p className='text-[14px]'>
                                            TAGGED
                                        </p>
                                    </div>
                                   
                                </div>


                                <div className='post_main border border-1 border-[red] w-[100%] flex flex-wrap'>
                                    <div className='w-[32.8%] h-[auto] mr-[5px] mb-[5px] bg-[#000000]'>
                                        <div className='w-[100%] h-[100%] '>
                                            <img src={girl_post} alt="" />
                                        </div>
                                    </div>

                                    <div className='w-[32.8%] h-[auto] mr-[5px] mb-[5px]'>
                                        <div className='w-[100%] h-[100%]'>
                                            <img src={certificate} alt="" />
                                        </div>
                                    </div>

                                    <div className='w-[32.8%] h-[auto] mr-[5px] mb-[5px]'>
                                        <div className='w-[100%] h-[100%]'>
                                            <img src={girl_post} alt="" />
                                        </div>
                                    </div>

                                    <div className='w-[32.8%] h-[auto] mr-[5px] mb-[5px]'>
                                        <div className='w-[100%] h-[100%]'>
                                            <img src={certificate} alt="" />
                                        </div>
                                    </div>

                                    <div className='w-[32.8%] h-[auto] mr-[5px] mb-[5px]'>
                                        <div className='w-[100%] h-[100%]'>
                                            <img src={girl_post} alt="" />
                                        </div>
                                    </div>

                                    <div className='w-[32.8%] h-[auto] mr-[5px] mb-[5px]'>
                                        <div className='w-[100%] h-[100%]'>
                                            <img src={certificate} alt="" />
                                        </div>
                                    </div>

                                    <div className='w-[32.8%] h-[auto] mr-[5px] mb-[5px]'>
                                        <div className='w-[100%] h-[100%]'>
                                            <img src={girl_post} alt="" />
                                        </div>
                                    </div>

                                    <div className='w-[32.8%] h-[auto] mr-[5px] mb-[5px]'>
                                        <div className='w-[100%] h-[100%]'>
                                            <img src={certificate} alt="" />
                                        </div>
                                    </div>

                                    <div className='w-[32.8%] h-[auto] mr-[5px] mb-[5px]'>
                                        <div className='w-[100%] h-[100%]'>
                                            <img src={girl_post} alt="" />
                                        </div>
                                    </div>

                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
