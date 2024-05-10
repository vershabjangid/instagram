import React from 'react'
import my_img from '../../images/myimg.jpeg'
import { Link } from 'react-router-dom'

export function Statuselement() {
    return (
        <>
            <Link to={"/story"}>
                <div className='statusmain flex justify-center flex-col items-center '>
                    <div className='border border-1 border-[blue] w-[80px] h-[80px] flex items-center justify-center'>
                        <div className='status_outer border border-1 border-[green] w-[79px] h-[79px] rounded-[50%] flex items-center justify-center'>
                            <div className='img_section w-[90%] h-[90%] rounded-[50%] border border-2 border-[black] overflow-hidden'>
                                <img src={my_img} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}
