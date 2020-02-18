import React, { useContext } from 'react';
import { PostsContext } from './postsContext'

function ShowPostsFromContext() {
  const [posts, setPosts] = useContext(PostsContext);
  // above is not state - its reference of state from context
  return (
    <>
      <hr />
      <strong>useContext</strong> hook here .... show posts from context component<br /><br />
        { posts !=='' && posts ? posts.map(post => <div key={ post.id }>{ post.title }</div>) : <p>Loading...</p> }
      <hr />
    </>
  );
}

export default ShowPostsFromContext;
