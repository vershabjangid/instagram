import React from 'react'

import "../../css/index.css"
import "../../css/media.css"
import logo from "../../images/Instagram-Wordmark-Black-Logo.wine (1).svg"
import playstore from "../../images/playstore1 (1).png"
import microsoft from "../../images/microsoft1 (1).png"
import { Loginbottom } from '../../common/web/Loginbottom'
import { AiFillFacebook } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export function Createnew() {
  return (
    <>
      <div className='main'>
        <div className='createnew w-[100%] '>
          <div className='createnew_outer h-[100vh] flex items-center justify-center'>
            <div className='createnew_inner1 w-[80%] h-[100%] my-[10px] flex items-center justify-center flex-col'>

              <div className='createnew_login w-[380px] border border-4 pb-[20px] border-[white]'>
                <div className='logo_section h-[90px] flex items-center justify-center pt-[15px]'>
                  <figure className='w-[240px]'>
                    <img src={logo} alt="" className='w-[100%]' />
                  </figure>
                </div>

                <div className='w-[100%] text-center px-[50px]'>
                  <p className='text-[17px]'>
                    Sign up to see photos and videos from your friends.
                  </p>
                </div>

                <div className='facebook_btn flex justify-center'>
                  <a className='w-[100%] flex justify-center' href="https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26locale%3Den_US%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26response_type%3Dcode%252Cgranted_scopes%26scope%3Demail%26state%3D%257B%2522fbLoginKey%2522%253A%25224c4dar53jhsjbbfds41ye7av41qtrmdqp85k019np7ru11oitfh%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%2522%257D%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D88ec5413-7694-4cf4-84f6-c39e699a029d%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%25224c4dar53jhsjbbfds41ye7av41qtrmdqp85k019np7ru11oitfh%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%2522%257D%23_%3D_&display=page&locale=en_GB&pl_dbl=0"><button className='w-[76%] py-[10px] my-[15px] rounded-[7px] flex items-center justify-center text-[white] text-[15px] font-[600] bg-[#0095f6]'><AiFillFacebook className='mr-[5px] text-[19px]' /> Log in with Facebook</button></a>
                </div>

                <div className='w-[100%] flex justify-center mt-[0px]'>
                  <div className='or flex items-center justify-between w-[80%] my-[6px] '>
                    <div className=' w-[40%] border border-1 border-[#80808075]'></div>
                    <p>OR</p>
                    <div className=' w-[40%] border border-1 border-[#80808075]'></div>
                  </div>
                </div>

                <div className='w-[100%] flex justify-center flex-col mt-[20px]'>
                  <div className='flex items-center justify-center mb-[10px] '>
                    <input type="text" className='w-[80%] h-[35px] pl-[6px]' placeholder='Email or Mobile Number' />
                  </div>

                  <div className='flex items-center justify-center mb-[10px] '>
                    <input type="text" className='w-[80%] h-[35px] pl-[6px]' placeholder='Full Name' />
                  </div>

                  <div className='flex items-center justify-center mb-[10px] '>
                    <input type="text" className='w-[80%] h-[35px] pl-[6px]' placeholder='Username' />
                  </div>

                  <div className='flex items-center justify-center mb-[10px] '>
                    <input type="text" className='w-[80%] h-[35px] pl-[6px]' placeholder='Password' />
                  </div>
                </div>

                <div className='w-[100%] flex justify-center'>
                  <div className='w-[80%] text-center text-[14px]'>
                    <p>People who use our service may have uploaded your contact information to Instagram. Learn More</p>
                  </div>
                </div>

                <div className='w-[100%] flex justify-center mt-[10px]'>
                  <div className='w-[80%] text-center text-[14px]'>
                    <p>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</p>
                  </div>
                </div>

                <div className='w-[100%] flex justify-center mt-[20px]'>
                  <button className='w-[80%] text-center text-[15px] bg-[#0095f6] py-[10px] rounded-[6px] text-[white] font-[550]'>Sign up</button>
                </div>
              </div>

              <div className='createnew_login w-[380px] flex justify-center border border-4 border-[white] mt-[5px] py-[20px]'>
                <p>Have an account? <Link to={"/"} className='text-[#1d5a83] font-[650]'>Log in</Link></p>
              </div>

              <div className=' createnew_login w-[380px] border border-4 border-[white] my-[10px]'>
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
