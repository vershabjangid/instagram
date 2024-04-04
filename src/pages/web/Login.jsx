import React from 'react'
// react-icons
import { AiFillFacebook } from "react-icons/ai";

//css
import "../../css/index.css"
import "../../css/media.css"
// images
import girlcat from '../../images/girlcat.png'
import chatting from '../../images/chatting.png'
import name_logo from '../../images/Instagram-Wordmark-Black-Logo.wine (1).svg'
import playstore from '../../images/playstore1 (1).png'
import microsoft from '../../images/microsoft1 (1).png'
import mobile_img from "../../images/mobile.bg.png"
import { Link } from 'react-router-dom';
import { Loginbottom } from '../../common/web/Loginbottom';

export function Login() {
    return (
        <>
            <div className='main'>
                <div className='login'>
                    <div className='login_inner w-[100%] h-[100vh] px-[7px] flex'>
                        <div className='login_mobile w-[50%] h-[100%] flex items-center justify-end'>
                            <div className='mobile_section w-[450px]  flex items-center justify-end'>
                                <figure className=' w-[420px] relative'>
                                    <img src={mobile_img} alt="" />
                                    <img src={girlcat} alt="" className='girl_cat_img w-[53.5%] h-[85%] absolute top-[4.2%] right-[13%]' />
                                    <img src={chatting} alt="" className='chatting_img w-[53.5%] h-[85%] absolute top-[4.2%] right-[13%]' />
                                </figure>

                            </div>
                        </div>
                        <div className='login_section w-[50%] h-[100%] flex items-center'>
                            <div className='border border-4 border-[white] w-[370px] p-[10px] py-[25px]'>
                                <div className='logo flex items-center justify-center'>
                                    <img src={name_logo} alt="" className='w-[60%] h-[100px]' />
                                </div>


                                <div className='input_section py-[5px] flex justify-center items-center flex-col'>
                                    <input type="text" className='w-[80%] h-[32px] my-[5px] px-[5px]' placeholder="Phone number, username, or email" />
                                    <input type="text" className='w-[80%] h-[32px] px-[5px] ' placeholder="Password" />
                                    <Link to={"/home"} className=' w-[80%] text-center my-[15px] py-[3px] rounded-[8px] text-[white] font-[750] bg-[rgba(76,180,245,1)]'>Log in</Link>


                                    <div className='or flex items-center justify-between w-[80%] my-[6px] '>
                                        <div className=' w-[40%] border border-1 border-[#80808075]'></div>
                                        <p>OR</p>
                                        <div className=' w-[40%] border border-1 border-[#80808075]'></div>
                                    </div>


                                    <a href="https://m.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fm.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26locale%3Den_US%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26response_type%3Dcode%252Cgranted_scopes%26scope%3Demail%26state%3D%257B%2522fbLoginKey%2522%253A%25221n25ngc2g45xf10dupeg4y98x7o6odcrjn73tl1i6d6hth7slcz%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Deb12281f-89bc-464c-9e59-121966bbba5a%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%25221n25ngc2g45xf10dupeg4y98x7o6odcrjn73tl1i6d6hth7slcz%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%23_%3D_&display=touch&locale=en_GB&pl_dbl=0&refsrc=deprecated&_rdr" className='w-[80%]'>
                                        <div className='flex  items-center justify-center my-[10px] text-[rgb(65,81,131,1)]'>
                                            <AiFillFacebook className='mr-[5px] text-[19px]' />
                                            <p>Log in with Facebook</p>
                                        </div>
                                    </a>

                                    <p className='text-[12px] text-[rgb(39,62,133)]'><Link to={"/forgot_password"}>Forgot password?</Link></p>
                                </div>


                                <div className='flex items-center justify-center my-[10px]  py-[15px]'>
                                    <p>Don't have an account? <span className='text-[#0095f6] font-[600]'><Link to={"/createnew"}>Sign up</Link></span></p>
                                </div>

                                <div className=' items-center justify-center my-[10px]  py-[10px]'>
                                    <p className=' text-center'>Get the app.</p>
                                    <div className='app_download flex justify-center mt-[10px]'>
                                        <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D1B5E506A-9250-41E7-AE88-90ADAE1CECB9%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge" className='w-[130px] mr-[10px]'>
                                            <img src={playstore} alt="" className='w-[100%]' />
                                        </a>


                                        <a href="https://www.microsoft.com/store/productId/9NBLGGH5L9XT?ocid=pdpshare" className='w-[110px]'>
                                            <img src={microsoft} alt="" className='w-[100%]' />
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>

                    <Loginbottom/>

                </div>


            </div>
        </>
    )
}
