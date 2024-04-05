import React from 'react'
import { Sidebar } from '../../common/web/Sidebar'

export function Home() {
    return (
        <>
            <div className='main'>
                <div className='w-[100%] h-[100vh]  bg-[black]'>
                    <Sidebar />
                </div>
            </div>
        </>
    )
}
