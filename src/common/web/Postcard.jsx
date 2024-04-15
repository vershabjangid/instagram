import React from 'react'
import { BsHeart, BsThreeDots } from 'react-icons/bs'
import { FaRegFaceLaughBeam } from 'react-icons/fa6'
import { Imageslider } from './Imageslider'
import my_img from '../../images/myimg.jpeg'
import { Videoslider } from './Videoslider'
import { Link } from 'react-router-dom'

export function Postcard() {
    return (
        <>
            <div className='w-[100%] flex justify-center my-[20px]'>
                <div className='home_post_section w-[468px] pb-[15px] '>
                    <div className='post_user_information flex items-center justify-between py-[5px]'>
                        <div className='flex items-center'>
                            <div className='profile_section'>
                                <div className='w-[35px] h-[35px] rounded-[50%] overflow-hidden'>
                                    <img src={my_img} alt="" />
                                </div>
                            </div>
                            <div className='id_name_and_track_name ml-[10px] leading-5'>
                               <Link to={"/profile user"}><p className='text-[15px] font-[550]'>vershab_jangid <span className='text-[grey]'>· 5h</span></p></Link>
                                <p className='text-[13px]'>scorpio_lovers___007·Scorpio Is Always King 🥷</p>
                            </div>
                        </div>

                        <div className='text-[17px]'>
                            <BsThreeDots />
                        </div>
                    </div>


                    <div className='post_section h-[auto] '>
                        <div className='img-container  items-center justify-center'>
                            <Videoslider />
                        
                        </div>
                    </div>



                    <div className='like_comment_section w-[100%]  flex justify-between mt-[5px]'>
                        <div className='like_share_btn flex justify-between w-[100px]'>
                            <div className='like_btn'>
                                <BsHeart className='text-[25px]' />
                                <p className='text-[13px] font-[550]'>1 like</p>
                            </div>
                            <div className='comment_btn'>
                                <svg aria-label="Comment" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Comment</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                            </div>
                            <div className='share_btn ml-[2px]'>
                                <svg aria-label="Share Post" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Share Post</title><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                            </div>
                        </div>
                        <div>
                            <svg aria-label="Save" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Save</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                        </div>
                    </div>

                    <div className='my-[5px]'>
                        <p className='text-[14px]'><span className='font-[550]'>3friends_mens_wear </span>
                            THREE FRIENDS MEN'S WEAR <br />
                            PREMUIM QUALITY SHOE <br />
                            SIZE 41- 44 <br />
                            Price - dm us <br />
                            Online delivery Available <br />
                            All over India PAN INDIA <br />
                            Whatsapp no 9887766455 <br />
                        </p>

                        <p className='font-[550] text-[15px]'>#trending #explorepage #explore #insta #instagram #instagood</p>
                    </div>

                    <div className='flex items-center'>
                        <input type="text" className='w-[90%] bg-[transparent] outline-none border-none' placeholder="Add a comment..." />
                        <div className='flex justify-center w-[10%]'>
                            <FaRegFaceLaughBeam />
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-[100%] flex justify-center my-[20px]'>
                <div className='home_post_section w-[468px] pb-[15px] '>
                    <div className='post_user_information flex items-center justify-between py-[5px]'>
                        <div className='flex items-center'>
                            <div className='profile_section'>
                                <div className='w-[35px] h-[35px] rounded-[50%] overflow-hidden'>
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


                    <div className='post_section h-[auto] '>
                        <div className='img-container  items-center justify-center'>
                            <Imageslider/>
                        
                        </div>
                    </div>



                    <div className='like_comment_section w-[100%]  flex justify-between mt-[5px]'>
                        <div className='like_share_btn flex justify-between w-[100px]'>
                            <div className='like_btn'>
                                <BsHeart className='text-[25px]' />
                                <p className='text-[13px] font-[550]'>1 like</p>
                            </div>
                            <div className='comment_btn'>
                                <svg aria-label="Comment" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Comment</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                            </div>
                            <div className='share_btn ml-[2px]'>
                                <svg aria-label="Share Post" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Share Post</title><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                            </div>
                        </div>
                        <div>
                            <svg aria-label="Save" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Save</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                        </div>
                    </div>

                    <div className='my-[5px]'>
                        <p className='text-[14px]'><span className='font-[550]'>3friends_mens_wear </span>
                            THREE FRIENDS MEN'S WEAR <br />
                            PREMUIM QUALITY SHOE <br />
                            SIZE 41- 44 <br />
                            Price - dm us <br />
                            Online delivery Available <br />
                            All over India PAN INDIA <br />
                            Whatsapp no 9887766455 <br />
                        </p>

                        <p className='font-[550] text-[15px]'>#trending #explorepage #explore #insta #instagram #instagood</p>
                    </div>

                    <div className='flex items-center'>
                        <input type="text" className='w-[90%] bg-[transparent] outline-none border-none' placeholder="Add a comment..." />
                        <div className='flex justify-center w-[10%]'>
                            <FaRegFaceLaughBeam />
                        </div>
                    </div>
                </div>
            </div>


            


        </>
    )
}
