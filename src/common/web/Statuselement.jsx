import React from 'react'
import my_img from '../../images/myimg.jpeg'
import { Link } from 'react-router-dom'

export function Statuselement() {
    return (
        <>
            <Link to={"/story"}>
                <div className='statusmain flex justify-center flex-col  flex items-center '>
                    <div className='status_outer w-[65px] h-[65px] rounded-[50%] flex items-center justify-center'>
                        <div className="status_img_section w-[60px] h-[60px] border border-2 border-[black] rounded-[50%] overflow-hidden ">
                            <img src={my_img} alt="" />
                        </div>
                    </div>
                    <div className='mt-[-1px] text-[13px]'>name here</div>
                </div>
            </Link>
        </>
    )
}
