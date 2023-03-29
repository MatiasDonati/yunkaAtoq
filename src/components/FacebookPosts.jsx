import React, { useState, useEffect } from 'react';

function FacebookPosts({ pageId }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`https://graph.facebook.com/${pageId}/posts?access_token={f29a84ce0c9e191f33ebe508eaabba5c}`);
        const data = await response.json();
        setPosts(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, [pageId]);

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.message}</h3>
          <p>{post.created_time}</p>
        </div>
      ))}
    </div>
  );
}

export default FacebookPosts;
