import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
function FacebookPosts() {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="bg-[url('../src/assets/rectangle.png')] bg-cover h-[50vh] sm:h-[100%] sm:mx-[0] md:w-[80%] mx-auto w-[350px]">

        <div className="flex justify-between p-8 ">
          <div className="flex">
            <img
              className="w-[45px]"
              src="../src/assets/face.png"
              alt="face"
            />
            <h1 className="text-white text-4xl ml-5">Yunka Atoq</h1>
          </div>
          <div >
            <AiOutlineLike className="text-[35px] text-white " />
          </div>
        </div>

        <div className="flex justify-center items-center pb-10 ">
          <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fyunkabo%2Fposts%2Fpfbid0A7AfnCRqrud5gGqjAjN7DpwR4P5gTuLr2b7sPYy7iaHsLYvBhzx1tnFoJ4fmnQZKl&show_text=true&width=500" 
          width="500" height="745" ></iframe>
        </div>
      </div>
    </div>
  );
}

export default FacebookPosts;
