import React from "react"
import { Link, graphql } from "gatsby"
import kebabCase from "lodash.kebabcase"
import Bio from "../components/bio"
import Layout from "../components/layout"
import PostTags from "../components/PostTags"
import SEO from "../components/seo"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteTags = this.props.data.site.siteMetadata.tags
    const { previous, next } = this.props.pageContext
    const elements = post.frontmatter.tags
    const items = []

    elements.map((value, index) => {
      items.push(
        <Link
          key={index}
          className="shadow-none no-underline inline-block"
          to={`/tags/${kebabCase(value)}`}
        >
          <span className="rounded bg-gray-400 hover:bg-orange-300 px-1 py-1 text-xs mr-3 text-white no-underline">
            {value}
          </span>
        </Link>
      )
    })

    // for (const [index, value] of elements.entries()) {
    // items.push(
    //   <Link className="shadow-none no-underline inline-block" to={`/tags/${kebabCase(value)}`}>
    //   <span class="rounded bg-red-400 px-1 py-1 text-xs mr-3 text-white no-underline">{value}</span>
    //   </Link>
    //   )
    // }

    return (
      <Layout location={this.props.location} title={siteTitle} tags={siteTags}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article>
          <header>
            <h1 className="text-3xl font-black mt-8 mb-0">
              {post.frontmatter.title}
            </h1>
            <p className="text-sm leading-loose mb-8 ">
              {post.frontmatter.date}
            </p>
            <p className="text-sm leading-loose mb-8 ">{items}</p>
          </header>
          <section
            className="markdown"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <PostTags tags={post.tags} />
          <hr className="h-px mb-8" />
          <footer>
            <Bio />
          </footer>
        </article>

        <nav>
          <ul
            className="flex flex-wrap justify-between mb-8"
            // style={{
            //   display: `flex`,
            //   flexWrap: `wrap`,
            //   justifyContent: `space-between`,
            //   listStyle: `none`,
            //   padding: 0,
            // }}
          >
            <li>
              {previous && (
                <Link
                  className="text-blue-600"
                  to={previous.fields.slug}
                  rel="prev"
                >
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link
                  className="text-blue-600"
                  to={next.fields.slug}
                  rel="next"
                >
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 150)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        categories
        tags
        description
      }
    }
  }
`
