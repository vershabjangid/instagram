import React from 'react'
// react-icons
import { AiFillFacebook } from "react-icons/ai";

//media
import '../css/index.css'
import '../css/media.css'
// images
import girlcat from '../images/girlcat.png'
import chatting from '../images/chatting.png'
import name_logo from '../images/Instagram-Wordmark-Black-Logo.wine (1).svg'
import playstore from '../images/playstore1 (1).png'
import microsoft from '../images/microsoft1 (1).png'

export function Login() {
    return (
        <>
            <div className='main'>
                <div className='login w-[100%] border border-1 border-[red] h-[100vh] flex'>
                    <div className='w-[50%] border border-1 border-[blue] flex justify-end'>
                        <div className='mobile_img w-[60%] border border-1 border-[green] relative'>
                            <img src={girlcat} alt="" className='girlcat_img absolute w-[61%] right-[7.6%] top-[4%]' />
                            <img src={chatting} alt="" className='chatting_img absolute w-[61%] right-[7.6%] top-[4%]' />
                        </div>
                    </div>
                    <div className='w-[50%] border border-1 border-[black] flex'>
                        <div className='login_section w-[50%] p-[15px] border border-1 border-[purple] flex items-center justify-center flex-col'>
                            <div className='w-[100%] bg-[white] border border-2 border-[#3d3d3da6] flex items-center justify-center flex-col px-[20px]'>
                                <img src={name_logo} alt="" className='w-[70%]' />

                                <div className='input_section w-[100%]'>
                                    <input type="text" placeholder='Phone number, username, or email' className='w-[100%] h-[35px] mb-[3px] pl-[10px] border border-1 border-[#8080805d]' />
                                    <input type="password" placeholder='Enter password' className='w-[100%] h-[35px] border border-1 border-[#8080805d] pl-[10px]' />
                                </div>

                                <button className='w-[100%] bg-[#3bbaec] my-[15px] py-[5px] rounded-[10px] text-[white] font-[550]'>Log in</button>

                                <div className='flex items-center justify-between w-[100%]'>
                                    <div className=' border-b-2 border-[#8080805d] w-[40%]'></div>
                                    <p className='text-[14px] text-[#5f5e5e] font-[550]'>OR</p>
                                    <div className=' border-b-2 border-[#8080805d] w-[40%]'></div>
                                </div>


                                <div className='login_facebook text-[#1d4566] flex items-center mt-[20px]'>
                                    <AiFillFacebook className='text-[20px]' />
                                    <p className='text-[15px] ml-[5px] font-[550]'>Log in with Facebook</p>
                                </div>

                                <div className='forgot_password text-[12px] text-[#1d4566] my-[15px]'>
                                    <p>Forgot Password?</p>
                                </div>
                            </div>


                            <div className='dont_have_account w-[100%] bg-[white] mt-[10px] border border-2 border-[#3d3d3da6] py-[15px]'>
                                <p className=' text-center text-[15px]'>Don't have an account?<span className=' text-[#3bbaec] font-[550] cursor-pointer'> Sign up</span></p>
                            </div>

                            <div className='w-[100%] border border-1 border-[red] mt-[10px]'>
                                <div className='w-[100%] text-center'>
                                    <p>Get the app.</p>
                                </div>
                                <div className='w-[100%] flex items-center justify-center mt-[5px]'>
                                    <div className='w-[50%] flex items-center justify-center'>
                                        <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D1B5E506A-9250-41E7-AE88-90ADAE1CECB9%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge" className=' flex justify-center'>
                                            <img src={playstore} alt="" className='w-[90%]' />
                                        </a>
                                    </div>
                                    <div className='w-[50%] flex items-center justify-center'>
                                        <a href="https://www.microsoft.com/store/productId/9NBLGGH5L9XT?ocid=pdpshare" className=' flex justify-center'>
                                            <img src={microsoft} alt="" className='w-[72%]' />
                                        </a>
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
