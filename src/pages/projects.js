import React from "react"
import Navigation from "../components/navigation"

export default () => {
  return (
    <div>
      <Navigation />
      <div className="max-w-3xl mx-auto px-5 py-10">
        <header>zebravpn</header>
        <div className="font-sans text-base text-gray-600 my-4">
          https://zebravpn.com
        </div>
      </div>
    </div>
  )
}
