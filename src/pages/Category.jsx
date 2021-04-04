import React, { useState, useEffect } from 'react'
import CategoriesList from '../components/CategoriesList'
import PostList from '../components/PostList'
import { Route, useParams, useRouteMatch, Link, Switch } from 'react-router-dom'
import { search } from '../api/api'
import SubCategory from './SubCategory'

import '../assets/css/blog.css'

const Category = () => {
  const { id } = useParams()
  const { url, path } = useRouteMatch()
  const [subcategories, setSubCategories] = useState([])

  useEffect(() => {
    search(`/categories/${id}`, (category) => {
      setSubCategories(category.subcategories)
    })
  }, [id])
  return (
    <>
      <div className="container">
        <h2 className="title-page">Pet Notícias</h2>
      </div>

      <CategoriesList />
      <ul className="list-categories container flex">
        {
          subcategories.map((subcategory) => (
            <li
              className={`list-categories__category list-categories__category--${id}`}
              key={subcategory}
            >
              <Link to={`${url}/${subcategory}`}>
                {subcategory}
              </Link>
            </li>
          ))

        }
      </ul>
      <Switch>
        <Route exact path={`${path}/`}>
          <PostList url={`/posts?category=${id}`} />
        </Route>
        <Route path={`${path}/:subcategory`}>
          <SubCategory />
        </Route>
      </Switch>
    </>
  )
}
export default Category
