import React from 'react'
import Stories from 'react-insta-stories';
import myimg from "../../images/shoes.jpeg"
import myimg1 from "../../images/WhatsApp Image 2024-01-05 at 13.16.38.jpeg"
export function InstaStoryslider() {

    const story = [
        myimg,myimg1,myimg,myimg1,myimg,myimg1,myimg
    ]
  return (
    <>
    <div className='flex justify-center items-center bg-[grey] h-[100vh] '>
        <Stories
          stories={story}
          width="100%"
          height="100%"
        />        
    </div>
    </>
  )
}

		

