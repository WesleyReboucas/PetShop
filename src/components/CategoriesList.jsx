import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { search } from '../api/api'
import '../assets/css/blog.css'

const CategoriesList = () => { 

  const[categories, setCategories] = useState([])

  useEffect(() => {
   search(`/categories`, setCategories)
  }, [])

  return(
    <ul className="list-categories container flex">
      {
        categories.map((category) => (
          <Link to={`/category/${category.id}`}>
            <li className={`list-categories__category list-categories__category--${category.id}`}>
              {category.name}
            </li>
          </Link>
        ))
      }
    </ul>
  )
}

export default CategoriesList