import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

    return (
      <Layout location={this.props.location}>
        <SEO title="All posts" />
        <Bio />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div className="shadow-none flex items-center justify-center flex-col h-auto p-6">
            <article className="px-10 pb-6 m-0 bg-graybox rounded-lg shadow-2x" key={node.fields.slug}>
              <header className="pb-4">
                <h3 className="text-2xl font-black mt-16 mb-2">
                  <Link
                    className="text-blue-600 shadow-none"
                    to={node.fields.slug}
                  >
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
              </header>
              <section>
                <p
                  className="mb-8"
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
            </div>
          )
        })}
       <div className="flex-row sm:flex-col md:flex-row-reverse lg:flex-col-reverse xl:flex-row my-12">
        <ul className="flex justify-between">
          {!isFirst && (
            <Link  className="inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white" to={prevPage} rel="prev">
              ← Previous Page
            </Link>
          )}
          {Array.from({ length: numPages }, (_, i) => (
            <li className="mr-3 m-0"
              key={`pagination-number${i + 1}`}
            >
              <Link className="inline-block border border-white rounded hover:border-gray-200 text-blue-400 hover:bg-gray-200 py-2 px-4"
                to={`/${i === 0 ? '' : i + 1}`}
                style={{
                  padding: rhythm(1 / 4),
                  textDecoration: 'none',
                  color: i + 1 === currentPage ? '#ffffff' : '',
                  background: i + 1 === currentPage ? '#007acc' : '',
                }}
              >
                {i + 1}
              </Link>
            </li>
          ))}
          {!isLast && (
            <Link  className="inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white" to={nextPage} rel="next">
              Next Page →
            </Link>
          )}
        </ul>
        </div> 
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
query blogPageQuery($skip: Int!, $limit: Int!) {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }
    limit: $limit
    skip: $skip
  ) {
    edges {
      node {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "DD MMMM, YYYY")
          title
          categories
          tags
        }
      }
    }
  }
}
`
