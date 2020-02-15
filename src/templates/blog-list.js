import React from "react"
import { Link, graphql } from "gatsby"
import kebabCase from 'lodash.kebabcase'
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
          const elements = node.frontmatter.tags
          const items = []
          
            for (const [index, value] of elements.entries()) {
            items.push(<span className="rounded bg-gray-400 hover:bg-orange-300 px-1 py-1 text-xs mr-3 text-white" key={index}><Link className="shadow-none" to={`/tags/${kebabCase(value)}`}>{value}</Link></span>)
            }
          return (
            <div className="w-full shadow-none flex items-center justify-center flex-col h-auto py-6 px-6">
            <article className="shadow-lg border px-10 py-8 bg-graybox rounded-lg" key={node.fields.slug}>
              <header className="pb-4">
                <h3 className="sm:text-xl lg:text-2xl xl:text-2xl md:text-2xl font-black mt-8 mb-4">
                  <Link
                    className="text-black-600 shadow-none"
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
             <p className="text-sm leading-loose mb-8">
              {items}
            </p>
            <Link
                    className="inline-block bg-red-200 hover:bg-red-300 rounded px-3 py-1 text-sm text-redbutton mr-2"
                    to={node.fields.slug}
                  >
                    read more
                  </Link>
              </section>
            </article>
            </div>
          )
        })}
       <div className="flex-row sm:flex-col md:flex-row-reverse lg:flex-col-reverse xl:flex-row my-12">
        <ul className="flex justify-between">
          {!isFirst && (
            <Link  className="inline-block bg-gray-400 hover:bg-orange-300 py-2 px-4 rounded-l text-black-600 shadow-none" to={prevPage} rel="prev">
              ← Previous Page
            </Link>
          )}
          {Array.from({ length: numPages }, (_, i) => (
            <li className="mr-3 m-0"
              key={`pagination-number${i + 1}`}
            >
              <Link className="inline-block bg-transparent bg-gray-400 hover:bg-orange-300 text-black-600 py-2 px-4 rounded-sm shadow-none"
                to={`/${i === 0 ? '' : i + 1}`}
                style={{
                  padding: rhythm(-1 / 4),
                  textDecoration: 'none',
                  color: i + 1 === currentPage ? '#ffffff' : '',
                  background: i + 1 === currentPage ? '#f96854' : '',
                }}
              >
                {i + 1}
              </Link>
            </li>
          ))}
          {!isLast && (
            <Link  className="bg-gray-400 hover:bg-orange-300 py-2 px-4 rounded-r text-black-600 shadow-none" to={nextPage} rel="next">
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
