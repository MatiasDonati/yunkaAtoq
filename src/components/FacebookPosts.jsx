import React from 'react';
import { AiOutlineLike } from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
function FacebookPosts() {


  return (
    <>
      <div className='flex  bg-[url("../src/assets/rectangle.png")] bg-cover h-[950px] mx-[400px]'>
        <div className='flex '>
          <div className='w-[45px]'>
          <img  src="../src/assets/face.png" alt="face" />
          <h1 className='text-white text-4xl' >Yunka Atoq</h1>
          </div>
        <AiOutlineLike className='text-[35px] text-white'/>
        </div>
        <div className='absolute mt-20'>
          <iframe className='absolute mt-9.5 mx-[100px]' src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fyunkabo%2Fposts%2Fpfbid02dV54QtPEvwc3Uhxg1t1PDQjhFKnyMZPu8PhUd8SXBhCj8CcmLnj9pgq323W4fpaal&show_text=true&width=500" width="500" height="780" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </div>
      </div>
    </>
  );
}

export default FacebookPosts;
