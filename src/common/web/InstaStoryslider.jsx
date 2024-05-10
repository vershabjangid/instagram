import React from "react";
import Stories from "react-insta-stories";
import myimg from "../../images/shoes.jpeg";
import myimg1 from "../../images/WhatsApp Image 2024-01-05 at 13.16.38.jpeg";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

import "../../css/index.css";
export function InstaStoryslider() {
  const story = [myimg, myimg1, myimg, myimg1, myimg, myimg1, myimg];
  return (
    <>
      {/* main person id changing slider  */}
      <AwesomeSlider className="h-[100vh]">
        {/* inner slider main outer section*/}
        <div className="h-[100%] flex items-center">
          {/* main content section*/}
          <div className="flex justify-center items-center bg-[grey] w-[500px] h-[100%] relative ">
            {/*main id information section */}
            <div className="id_section absolute text-[white] z-[9999] top-[3%] w-[calc(100%-10px)] px-[5px]">
              <div className="status_content_inner border border-1 border-[red] w-[100%]">
                <div className="image_section flex items-center justify-between">
                  <div className="w-[75%] border border-1 border-[green] flex items-center">
                    <div className="profile_img rounded-[50%] w-[40px] h-[40px] border border-1 border-[gold] overflow-hidden">
                      <img src={myimg} alt="" />
                    </div>

                    <div className="insta_id ml-[10px]">
                      <p className="text-[14px] font-[600]">vershab_jangid</p>
                    </div>
                  </div>

                  {/*story controls section*/}
                  <div className="w-[25%] border border-1 border-[blue] flex justify-evenly items-center">
                    <div>
                      <svg
                        aria-label="Audio is muted"
                        class="x1lliihq x1n2onr6 x9bdzbf"
                        fill="currentColor"
                        height="16"
                        role="img"
                        viewBox="0 0 48 48"
                        width="16"
                      >
                        <title>Audio is muted</title>
                        <path
                          clip-rule="evenodd"
                          d="M1.5 13.3c-.8 0-1.5.7-1.5 1.5v18.4c0 .8.7 1.5 1.5 1.5h8.7l12.9 12.9c.9.9 2.5.3 2.5-1v-9.8c0-.4-.2-.8-.4-1.1l-22-22c-.3-.3-.7-.4-1.1-.4h-.6zm46.8 31.4-5.5-5.5C44.9 36.6 48 31.4 48 24c0-11.4-7.2-17.4-7.2-17.4-.6-.6-1.6-.6-2.2 0L37.2 8c-.6.6-.6 1.6 0 2.2 0 0 5.7 5 5.7 13.8 0 5.4-2.1 9.3-3.8 11.6L35.5 32c1.1-1.7 2.3-4.4 2.3-8 0-6.8-4.1-10.3-4.1-10.3-.6-.6-1.6-.6-2.2 0l-1.4 1.4c-.6.6-.6 1.6 0 2.2 0 0 2.6 2 2.6 6.7 0 1.8-.4 3.2-.9 4.3L25.5 22V1.4c0-1.3-1.6-1.9-2.5-1L13.5 10 3.3-.3c-.6-.6-1.5-.6-2.1 0L-.2 1.1c-.6.6-.6 1.5 0 2.1L4 7.6l26.8 26.8 13.9 13.9c.6.6 1.5.6 2.1 0l1.4-1.4c.7-.6.7-1.6.1-2.2z"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </div>

                    <div>
                      <svg
                        aria-label="Play"
                        class="x1lliihq x1n2onr6 x9bdzbf"
                        fill="currentColor"
                        height="16"
                        role="img"
                        viewBox="0 0 24 24"
                        width="16"
                      >
                        <title>Play</title>
                        <path d="M5.888 22.5a3.46 3.46 0 0 1-1.721-.46l-.003-.002a3.451 3.451 0 0 1-1.72-2.982V4.943a3.445 3.445 0 0 1 5.163-2.987l12.226 7.059a3.444 3.444 0 0 1-.001 5.967l-12.22 7.056a3.462 3.462 0 0 1-1.724.462Z"></path>
                      </svg>
                    </div>

                    <div>
                      <svg
                        aria-label="Menu"
                        class="x1lliihq x1n2onr6 x9bdzbf"
                        fill="currentColor"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <title>Menu</title>
                        <circle cx="12" cy="12" r="2.75"></circle>
                        <circle cx="19.5" cy="12" r="2.75"></circle>
                        <circle cx="4.5" cy="12" r="2.75"></circle>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Stories stories={story} width="100%" height="100%" />


            {/* reply section */}

            <div className=" absolute border border-1 border-[gold] bottom-[5%] w-[calc(100%-10px)] px-[5px] z-[9999] flex ">
              <div className="reply_on_story_section w-[83%]">
                <input
                  type="text"
                  className=" bg-transparent border border-1 border-[grey] w-[calc(100%-20px)] px-[10px] h-[40px] rounded-[20px]"
                  placeholder="Reply to"
                />
              </div>
              <div className="w-[17%] border border-1 border-[blue] text-[white] flex items-center justify-evenly">
                <div>
                  <svg
                    aria-label="Like"
                    class="x1lliihq x1n2onr6 xq3z1fi"
                    fill="currentColor"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <title>Like</title>
                    <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                  </svg>
                </div>

                <div className="">
                  <svg
                    aria-label="Direct"
                    class="x1lliihq x1n2onr6 xq3z1fi"
                    fill="currentColor"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <title>Direct</title>
                    <line
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="2"
                      x1="22"
                      x2="9.218"
                      y1="3"
                      y2="10.083"
                    ></line>
                    <polygon
                      fill="none"
                      points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></polygon>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>







        
      </AwesomeSlider>
    </>
  );
}
