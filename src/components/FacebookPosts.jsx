import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
function FacebookPosts() {
  return (
<div className="flex justify-center items-center">
  <div className="bg-[url('../src/assets/rectangle.png')] bg-cover h-[50vh] sm:h-[100%] sm:mx-[0] md:w-1/2 mx-auto">
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
        <div>
          <AiOutlineLike className="text-[35px] text-white " />
        </div>
      </div>
    </div>
    <div className="flex justify-center items-center pb-10">
      <iframe
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fyunkabo%2Fposts%2Fpfbid0ZwRsVikt5tXpSptNxfHmBSpj5eDQVLwSAQ6ANFwPUCLFgeaUyvVRuRUTzwxAzofVl&width=400&show_text=true&height=719&appId"
        width="400"
        height="719"
      ></iframe>
    </div>
  </div>
</div>

  );
}

export default FacebookPosts;
