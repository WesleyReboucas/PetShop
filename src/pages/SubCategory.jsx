import React from 'react'
import { useParams } from 'react-router-dom'
import PostList from '../components/PostList'

const SubCategory = () => { 
  const { subcategory } = useParams()
  return(
    <PostList url={`/posts?subcategory=${subcategory}`} />
  )
}

export default SubCategory