import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { search } from '../api/api'


const PostList = ( { url } ) => { 

const [posts, setPosts] = useState([])

useEffect(() => {
  search(url, setPosts)
}, [url])

  return(
    <section className="posts container">
      { 
       posts.map((post)=> (
         <Link className={`card-post card-post--${post.category}`} to={`/posts/${post.id}`}>
           <article key={post.id}>
              <h3 className="card-post__title">
                {post.title}
              </h3>
              <p className="card-post__meta">{post.metadescription}</p>
           </article> 
         </Link>
       ))
      }
    </section>
  )
}

export default PostList