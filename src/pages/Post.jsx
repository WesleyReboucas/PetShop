import React, {useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { search } from '../api/api'
import '../assets/css/post.css'

const Post = () => { 
  let history = useHistory()
  const { id } = useParams()
  const[post, setPost] = useState({})

  useEffect(() => {
    search(`/posts/${id}`, setPost)
    .catch(()=>{
      history.push('/404')
    })
  }, [id])

  return(
    <main className="container flex flex--center">
      <article className="card post">
        <h2 className="card__title">{post.title}</h2>
        <p className="carta__text">{post.body}</p>
      </article>
    </main>
  )
}

export default Post