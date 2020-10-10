import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"
import { CenteredContent } from "../components/styled"

import Header from "./header"

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    color: #333;
    margin: 0;
    font-family: sans-serif;
    font-weight: 300;
  }

  h1, h2 {
    margin-bottom: 2rem;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyles />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <CenteredContent>
        <main>{children}</main>
      </CenteredContent>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
