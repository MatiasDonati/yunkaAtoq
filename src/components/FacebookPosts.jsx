import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
function FacebookPosts() {
  return (
    <>
      <div className='bg-[url("../src/assets/rectangle.png")] bg-cover h-[950px] mx-[600px]'>
        <div className="">
          <div className="flex justify-between p-8">
            <div className="flex">
              <img
                className="w-[45px]"
                src="../src/assets/face.png"
                alt="face"
              />
              <h1 className="text-white text-4xl ml-5">Yunka Atoq</h1>
            </div>
            <AiOutlineLike className="text-[35px] text-white" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <iframe
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fyunkabo%2Fposts%2Fpfbid0ZwRsVikt5tXpSptNxfHmBSpj5eDQVLwSAQ6ANFwPUCLFgeaUyvVRuRUTzwxAzofVl&width=400&show_text=true&height=719&appId"
            width="400"
            height="719"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default FacebookPosts;
