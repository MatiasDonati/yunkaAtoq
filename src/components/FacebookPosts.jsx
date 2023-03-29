import React from 'react';

function FacebookPosts() {


  return (
    <>
    <div className='contenedor flex justify-center'>
      <img src="../src/assets/rectangle.png" alt="rectangle" />
      <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fyunkabo%2Fposts%2Fpfbid0a7asns2cuT9jVrmYhrjP1bEERKZVmyVQoADNroU69spFUcgbjzFv3wGodwC4bdP1l&show_text=true&width=500" width="500" height="780" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
      {/* <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fyunkabo%2Fposts%2Fpfbid037dsTHjnb9N3hVdmM7uEyUmNnazhxaS4LAhRX2DKK3gV8E8z3kiPHDw9oLsoY4iFTl&show_text=true&width=500" width="500" height="581" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe> */}
    </div>
    </>
  );
}

export default FacebookPosts;
