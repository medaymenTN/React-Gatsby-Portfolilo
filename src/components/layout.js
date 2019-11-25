/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import "./layout.css"
import { useStaticQuery, graphql } from "gatsby"
const Layout = ({ children }) => {
  const { dataJson } = useStaticQuery(
    graphql`
    query{
      dataJson {
        fullname
        location
        sub
      }
    }
    `
  )

  return (
    <>
      <Header siteTitle={`${dataJson.fullname}'s portfolio'`} />
      <div>
            <li>
              {dataJson.fullname}
            </li>
            <li>
              {dataJson.location}
            </li>
            <li>
              {dataJson.sub}
            </li>
     </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
