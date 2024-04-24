import React from 'react'
import { Sidebar } from '../../common/web/Sidebar'
import { Header } from '../../common/web/Header'

import my_img from "../../images/myimg.jpeg"
import { GoPersonAdd } from 'react-icons/go'
import { BsThreeDots } from 'react-icons/bs'

export function Profile_section() {
    return (
        <>
            <div className='main'>
                <Sidebar />
                <Header />
                <div className='profile_section h-[100vh] bg-[#070e1a] flex '>

                    <div className='profile_section_inner w-[100%] border border-1 border-[white] flex justify-end'>
                        <div className='profile_content_main w-[82%] border border-1 border-[yellow] flex justify-center'>
                            <div className='profile_content_main_section border border-1 border-[blue] w-[1000px]'>

                                <div className='pofile_content_section w-[100%] border border-1 border-[green] flex justify-between'>
                                    <div className='profile_picture_and_story border border-1 border-[gold] w-[30%] flex justify-center items-center'>
                                        <div className='profile_picture_main_circle border border-1 border-[grey] w-[170px] h-[170px] rounded-[50%] flex items-center justify-center'>
                                            <div className='profile_picture_img_section border border-4 border-[#070e1a] w-[97%] h-[97%] rounded-[50%] overflow-hidden'>
                                                <img src={my_img} alt="" className='w-[100%]' />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='profile_name_and_bio border border-1 border-[purple] w-[70%] flex justify-center flex-col py-[15px]'>
                                        {/* profile_name */}
                                        <div className='id_name_and_follow_btn w-[570px] flex justify-between items-center text-[white] mb-[10px]'>
                                            <p className='font-[750] text-[24px]'>3friends_mens_wear</p>
                                            <div className='flex justify-between w-[55%]'>
                                                <button className=' bg-[#363636] px-[20px] py-[4px] rounded-[10px]'>Following</button>
                                                <button className=' bg-[#363636] px-[20px] py-[4px] rounded-[10px]'>Message</button>
                                                <button className=' bg-[#363636] px-[10px] py-[4px] rounded-[10px] text-[20px]'><GoPersonAdd /></button>
                                                <button className='text-[20px]'><BsThreeDots /></button>
                                            </div>
                                        </div>

                                        <div className='following_and_followers w-[300px] flex justify-between mb-[10px]'>
                                            <div className='flex text-[white]'><p className='mr-[5px]'>0</p><p>Posts</p></div>
                                            <div className='flex text-[white]'><p className='mr-[5px]'>0</p><p>Followers</p></div>
                                            <div className='flex text-[white]'><p className='mr-[5px]'>0</p><p>Following</p></div>
                                        </div>

                                        <div className='text-[14.5px]'>
                                            <p className='w-[100%] text-[white]'>
                                                <p className='font-[550]'> mens wear </p>
                                                main account= @3friends9887 <br />
                                                Premium Quality stuff <br />
                                                Clothing shoe and much more <br />
                                                Online delivery Available All over India <br />
                                                Whatsapp no 988776645
                                            </p>
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
