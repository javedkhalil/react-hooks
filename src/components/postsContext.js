import React, { useState, useEffect, createContext } from 'react'

export const PostsContext = createContext();

export const PostsContextProvider = props => {
  const [ posts, setPosts ] = useState();
    
  const requestPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const postsData = await response.json();
    setPosts(postsData);
  }

  useEffect(() => {
    requestPosts();
  }, []);

  return (
    <PostsContext.Provider
      value={[ posts, setPosts ]}
    >
      {props.children}
    </PostsContext.Provider>
  )
}
