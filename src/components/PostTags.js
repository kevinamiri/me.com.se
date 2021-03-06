import React, { Component } from "react"
import kebabCase from "lodash.kebabcase"
import { Link } from "gatsby"

const PostTags = props => {
  const { tags, size } = props

  return (
    <div className="shadow-none flex items-center justify-center flex-col h-auto p-6">
      {tags &&
        tags.map(tag => (
          <Link
            key={tag}
            style={{ textDecoration: "none" }}
            to={`/tags/${kebabCase(tag)}/`}
          >
            <span className={size}>{tag}</span>
          </Link>
        ))}
    </div>
  )
}

export default PostTags
