import React from 'react'
import { Sidebar } from '../../common/web/Sidebar'
import { Link } from 'react-router-dom'

import "../../css/index.css"
import "../../css/media.css"

export function Saveinfo() {
  return (
    <>
    <div className='main'>
        <div className='w-[100%] h-[100vh]  bg-[black] relative'>
            <Sidebar />
            <div className='save_info_section w-[82%] h-[100%] absolute right-0 flex items-center justify-center'>
                <div className='save_info_inner w-[30%] border border-2 border-[white] flex items-center justify-center flex-col text-[white] py-[30px]'>
                    <div className=' flex items-center justify-center w-[100%]   mb-[10px]'>
                    <svg aria-label="" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="62" role="img" viewBox="0 0 96 96" width="62"><title></title><circle cx="48" cy="48" fill="none" r="47" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle><path d="M62 39.688a14 14 0 1 0-21.542 11.783L36.617 69h22.766l-3.841-17.53A13.978 13.978 0 0 0 62 39.689Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
                    </div>

                    <div className='w-[100%]  text-center px-[30px]'>
                        <p className='text-[14.5px] font-[660]'>Save your login info?</p>
                        <p className='text-[grey] text-[14.5px] mt-[7px]'>We can save your login info on this browser so you don't need to enter it again.</p>
                    </div>

                    <div className='save_info_button w-[100%] mt-[10px] flex items-center justify-center px-[25px]'>
                        <button className='bg-[#0095f6] w-[100%] py-[3px] rounded-[5px]'>Save info</button>
                    </div>

                    <div className='save_info_button w-[100%] mt-[10px] flex items-center justify-center px-[25px]'>
                        <Link to={"/home"} className='text-[#0094f1] font-[550] hover:text-[white]'>Not now</Link>
                    </div>
                </div>

            </div>
        </div>
    </div>
</>
  )
}
