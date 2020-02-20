import React from "react"
import { Link } from "gatsby"
import Navigation from "./navigation"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1 className="text-6xl font-black font-sans mb-10 mt-0">
          <Link className="shadow-none" to={`/`}>
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3 className="text-xl font-sans font-black mt-0">
          <Link className="shadow-none" to={`/`}>
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div>
        <Navigation />
      <div className="max-w-3xl mx-auto px-5 py-10">
        <header>{header}</header>
        <div  className="font-sans text-base text-gray-600 my-4" >{children}</div>
        <footer className="pt-8">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a className="text-blue-600" href="https://www.gatsbyjs.org">
            Gatsby
          </a>
        </footer>
      </div>
      </div>
    )
  }
}

export default Layout
